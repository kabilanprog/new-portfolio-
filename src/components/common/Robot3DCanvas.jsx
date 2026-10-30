import React, { useEffect, useRef, useState } from 'react';

const SPLINE_SCENE_URL = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode';

export default function Robot3DCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const appRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [useViewerFallback, setUseViewerFallback] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const initSpline = async () => {
      try {
        // Dynamically import Spline runtime from CDN
        const splineModule = await import(
          /* @vite-ignore */ 'https://unpkg.com/@splinetool/runtime@1.9.72/build/runtime.js'
        ).catch(() =>
          import(/* @vite-ignore */ 'https://esm.sh/@splinetool/runtime@1.9.72')
        );

        if (!isMounted || !canvasRef.current) return;

        const { Application } = splineModule;
        const app = new Application(canvasRef.current);
        appRef.current = app;

        await app.load(SPLINE_SCENE_URL);

        if (isMounted) {
          setIsLoading(false);
        }
      } catch (error) {
        console.warn('[Robot3DCanvas] Runtime Application load fallback to viewer:', error);
        if (isMounted) {
          setUseViewerFallback(true);
          setIsLoading(false);
        }
      }
    };

    initSpline();

    // Global pointer forwarding for interactive head/eye tracking across screen
    const handlePointerMove = (e) => {
      const targetCanvas = canvasRef.current || containerRef.current?.querySelector('canvas');
      if (!targetCanvas) return;
      targetCanvas.dispatchEvent(
        new PointerEvent('pointermove', {
          bubbles: true,
          cancelable: false,
          clientX: e.clientX,
          clientY: e.clientY,
          screenX: e.screenX,
          screenY: e.screenY,
          movementX: e.movementX,
          movementY: e.movementY,
          pointerType: 'mouse',
          isPrimary: true,
        })
      );
    };

    const handlePointerEnter = (e) => {
      const targetCanvas = canvasRef.current || containerRef.current?.querySelector('canvas');
      if (!targetCanvas) return;
      targetCanvas.dispatchEvent(
        new PointerEvent('pointerover', {
          bubbles: true,
          cancelable: false,
          clientX: e.clientX,
          clientY: e.clientY,
          pointerType: 'mouse',
          isPrimary: true,
        })
      );
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerenter', handlePointerEnter, { passive: true });

    return () => {
      isMounted = false;
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerenter', handlePointerEnter);
      if (appRef.current) {
        try {
          appRef.current.dispose();
        } catch (e) {
          // ignore cleanup error
        }
        appRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[460px] md:min-h-[580px] flex items-center justify-center select-none"
    >
      {!useViewerFallback ? (
        <canvas
          ref={canvasRef}
          className={`w-full h-full cursor-none transition-opacity duration-700 pointer-events-auto ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ background: 'transparent', width: '100%', height: '100%' }}
        />
      ) : (
        <spline-viewer
          url={SPLINE_SCENE_URL}
          className="w-full h-full pointer-events-auto bg-transparent"
          style={{ width: '100%', height: '100%', background: 'transparent' }}
        />
      )}

      {/* Cyber Robot Loading Skeleton State */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="relative flex flex-col items-center gap-4">
            {/* Robot Head Silhouette */}
            <div className="w-20 h-24 rounded-[28px] bg-white/[0.04] border border-neon/20 animate-pulse relative overflow-hidden flex items-center justify-center">
              <div className="w-10 h-3 rounded-full bg-neon/30 animate-ping" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/10 to-transparent animate-[scan_2s_linear_infinite]" />
            </div>
            {/* Robot Torso Silhouette */}
            <div className="w-32 h-28 rounded-2xl bg-white/[0.03] border border-white/5 animate-pulse" />
            <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#00FF94]/70">
              Loading 3D Android...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}


