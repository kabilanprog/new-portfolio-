import React, { useState, useEffect, useRef } from 'react';
import { Atom } from 'lucide-react';

export default function VectorMatrixPlayground() {
  const canvasRef = useRef(null);
  const [u, setU] = useState({ x: 3.5, y: 2.0 });
  const [v, setV] = useState({ x: 1.5, y: 4.0 });
  const [preset, setPreset] = useState('custom');

  // Mathematical calculations
  const dotProduct = (u.x * v.x + u.y * v.y).toFixed(2);
  const magU = Math.hypot(u.x, u.y);
  const magV = Math.hypot(v.x, v.y);
  const cosTheta = magU && magV ? (dotProduct / (magU * magV)).toFixed(3) : '0.000';
  const angleDeg = ((Math.acos(Math.max(-1, Math.min(1, cosTheta))) * 180) / Math.PI).toFixed(1);

  const applyPreset = (type) => {
    setPreset(type);
    if (type === 'orthogonal') {
      setU({ x: 4.0, y: 0.0 });
      setV({ x: 0.0, y: 4.0 });
    } else if (type === 'embedding') {
      setU({ x: 3.2, y: 2.8 });
      setV({ x: 3.8, y: 3.3 });
    } else if (type === 'opposing') {
      setU({ x: 3.5, y: 2.0 });
      setV({ x: -3.5, y: -2.0 });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const width = (canvas.width = canvas.offsetWidth || 400);
    const height = (canvas.height = canvas.offsetHeight || 300);

    const originX = width / 2;
    const originY = height / 2;
    const scale = Math.min(width, height) / 12; // 1 unit = ~25px

    ctx.clearRect(0, 0, width, height);

    // 1. Draw Grid Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;

    for (let x = -6; x <= 6; x++) {
      ctx.beginPath();
      ctx.moveTo(originX + x * scale, 0);
      ctx.lineTo(originX + x * scale, height);
      ctx.stroke();
    }
    for (let y = -6; y <= 6; y++) {
      ctx.beginPath();
      ctx.moveTo(0, originY - y * scale);
      ctx.lineTo(width, originY - y * scale);
      ctx.stroke();
    }

    // 2. Axes
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();

    // Helper to draw vector arrow
    const drawVector = (vec, color, label) => {
      const targetX = originX + vec.x * scale;
      const targetY = originY - vec.y * scale;

      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(targetX, targetY);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 10;
      ctx.shadowColor = color;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Arrow head
      const angle = Math.atan2(originY - targetY, targetX - originX);
      ctx.beginPath();
      ctx.moveTo(targetX, targetY);
      ctx.lineTo(targetX - 10 * Math.cos(angle - Math.PI / 7), targetY + 10 * Math.sin(angle - Math.PI / 7));
      ctx.lineTo(targetX - 10 * Math.cos(angle + Math.PI / 7), targetY + 10 * Math.sin(angle + Math.PI / 7));
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();

      // Label
      ctx.font = 'bold 12px "JetBrains Mono", monospace';
      ctx.fillStyle = color;
      ctx.fillText(label, targetX + 8, targetY - 6);
    };

    // Draw Vector U (Cyan)
    drawVector(u, '#38BDF8', 'u⃗');

    // Draw Vector V (Pink)
    drawVector(v, '#F472B6', 'v⃗');

    // Draw Angle Arc
    const angleU = Math.atan2(u.y, u.x);
    const angleV = Math.atan2(v.y, v.x);
    ctx.beginPath();
    ctx.arc(originX, originY, 28, -Math.max(angleU, angleV), -Math.min(angleU, angleV));
    ctx.strokeStyle = 'rgba(245, 208, 122, 0.7)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

  }, [u, v]);

  return (
    <div className="rounded-3xl bg-[#080d1a]/95 border border-cyan-500/25 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_60px_rgba(56,189,248,0.1)] space-y-6">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
            <Atom size={22} />
          </div>
          <div>
            <h4 className="font-display font-bold text-lg text-white tracking-wide">
              Astrophysics & ML Vector Space Simulator
            </h4>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">
              Interactive Dot Product & Cosine Similarity Engine
            </span>
          </div>
        </div>

        {/* Presets */}
        <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-xl border border-white/10 text-[10.5px] font-mono">
          <button
            onClick={() => applyPreset('orthogonal')}
            className={`px-3 py-1 rounded-lg transition-all ${
              preset === 'orthogonal' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Orthogonal (90°)
          </button>
          <button
            onClick={() => applyPreset('embedding')}
            className={`px-3 py-1 rounded-lg transition-all ${
              preset === 'embedding' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Deep AI Alignment (0°)
          </button>
          <button
            onClick={() => applyPreset('opposing')}
            className={`px-3 py-1 rounded-lg transition-all ${
              preset === 'opposing' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Opposing (180°)
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Controls + Live 2D Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Controls */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Vector U Sliders */}
          <div className="p-4 rounded-2xl bg-black/50 border border-sky-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-sky-400 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400" /> Vector u⃗ = [{u.x.toFixed(1)}, {u.y.toFixed(1)}]
              </span>
              <span className="font-mono text-[10px] text-slate-400">Magnitude: {magU.toFixed(2)}</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-slate-400 w-4">X:</span>
                <input
                  type="range"
                  min="-5"
                  max="5"
                  step="0.1"
                  value={u.x}
                  onChange={(e) => {
                    setU({ ...u, x: parseFloat(e.target.value) });
                    setPreset('custom');
                  }}
                  className="w-full accent-sky-400 cursor-pointer"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-slate-400 w-4">Y:</span>
                <input
                  type="range"
                  min="-5"
                  max="5"
                  step="0.1"
                  value={u.y}
                  onChange={(e) => {
                    setU({ ...u, y: parseFloat(e.target.value) });
                    setPreset('custom');
                  }}
                  className="w-full accent-sky-400 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Vector V Sliders */}
          <div className="p-4 rounded-2xl bg-black/50 border border-pink-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-pink-400 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-400" /> Vector v⃗ = [{v.x.toFixed(1)}, {v.y.toFixed(1)}]
              </span>
              <span className="font-mono text-[10px] text-slate-400">Magnitude: {magV.toFixed(2)}</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-slate-400 w-4">X:</span>
                <input
                  type="range"
                  min="-5"
                  max="5"
                  step="0.1"
                  value={v.x}
                  onChange={(e) => {
                    setV({ ...v, x: parseFloat(e.target.value) });
                    setPreset('custom');
                  }}
                  className="w-full accent-pink-400 cursor-pointer"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-slate-400 w-4">Y:</span>
                <input
                  type="range"
                  min="-5"
                  max="5"
                  step="0.1"
                  value={v.y}
                  onChange={(e) => {
                    setV({ ...v, y: parseFloat(e.target.value) });
                    setPreset('custom');
                  }}
                  className="w-full accent-pink-400 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Real-time Math Output Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-center font-mono">
            <div className="p-1">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 block">Dot Product (u⃗·v⃗)</span>
              <span className="text-sm font-bold text-cyan-300">{dotProduct}</span>
            </div>
            <div className="p-1">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 block">Cosine Similarity</span>
              <span className="text-sm font-bold text-amber-300">{cosTheta}</span>
            </div>
            <div className="p-1">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 block">Angle (θ)</span>
              <span className="text-sm font-bold text-pink-300">{angleDeg}°</span>
            </div>
          </div>

        </div>

        {/* Live 2D Vector Plane Canvas */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full aspect-[4/3] rounded-2xl bg-[#040710] border border-cyan-500/30 overflow-hidden relative shadow-inner flex items-center justify-center">
            <canvas ref={canvasRef} className="w-full h-full" />
            <span className="absolute bottom-2.5 left-3 font-mono text-[9px] text-slate-500">
              Coordinate Scale: [-5, +5] ℝ²
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}
