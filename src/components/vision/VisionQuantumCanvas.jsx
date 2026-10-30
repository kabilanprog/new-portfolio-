import React, { useEffect, useRef } from 'react';

/**
 * High-performance interactive 3D particle canvas with 3 dynamic modes:
 * - 'bio': Rotating 3D DNA Double Helix with neural synapses
 * - 'astro': Gravitational black hole accretion disk with relativistic Doppler effect
 * - 'philosophy': Floating 3D multilingual glyph constellation with ink trails
 */
export default function VisionQuantumCanvas({ mode = 'bio' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || 600);

    let mouse = { x: width / 2, y: height / 2, isHover: false };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || 600;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHover = true;
    };

    const handleMouseLeave = () => {
      mouse.isHover = false;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    // Mode-specific entities
    // 1. DNA Helix Nodes (80 base pairs)
    const basePairs = [];
    for (let i = 0; i < 70; i++) {
      basePairs.push({
        t: (i / 70) * Math.PI * 8,
        yNorm: i / 70, // 0 to 1
        baseType: ['A', 'T', 'G', 'C'][i % 4],
      });
    }

    // 2. Astro Accretion Particles
    const astroParticles = [];
    for (let i = 0; i < 180; i++) {
      astroParticles.push({
        radius: 40 + Math.random() * 220,
        angle: Math.random() * Math.PI * 2,
        speed: 0.008 + Math.random() * 0.025,
        size: Math.random() * 2.2 + 0.8,
        color: Math.random() > 0.4 ? '#38BDF8' : (Math.random() > 0.5 ? '#818CF8' : '#F472B6'),
        z: (Math.random() - 0.5) * 40,
      });
    }

    // 3. Philosophy Glyphs
    const glyphs = ['Ψ', '✦', 'Ω', '∞', 'λ', 'φ', 'வார்த்தை', 'شعر', 'νοῦς', '志', '愛', '01'];
    const textParticles = [];
    for (let i = 0; i < 40; i++) {
      textParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        text: glyphs[i % glyphs.length],
        alpha: Math.random() * 0.4 + 0.15,
        size: Math.floor(Math.random() * 14 + 10),
      });
    }

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      if (mode === 'bio') {
        // ── 3D DNA DOUBLE HELIX RENDERER ──
        const helixHeight = Math.min(height * 0.8, 480);
        const radius = Math.min(width * 0.16, 110);
        const startY = cy - helixHeight / 2;

        for (let i = 0; i < basePairs.length; i++) {
          const bp = basePairs[i];
          const currentT = bp.t + time * 0.9;
          const y = startY + bp.yNorm * helixHeight;

          // Strand 1 3D projection
          const x1 = cx + Math.cos(currentT) * radius;
          const z1 = Math.sin(currentT) * radius;
          const scale1 = (z1 + radius * 1.5) / (radius * 2.5);

          // Strand 2 3D projection (180 deg shifted)
          const x2 = cx + Math.cos(currentT + Math.PI) * radius;
          const z2 = Math.sin(currentT + Math.PI) * radius;
          const scale2 = (z2 + radius * 1.5) / (radius * 2.5);

          // Connecting Hydrogen Bond (Base Pair Line)
          const alphaLine = Math.max(0.1, (scale1 + scale2) / 2 - 0.2);
          ctx.beginPath();
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${alphaLine * 0.45})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Strand 1 Nucleotide Sphere
          ctx.beginPath();
          ctx.arc(x1, y, Math.max(1.5, 3.5 * scale1), 0, Math.PI * 2);
          ctx.fillStyle = '#C084FC';
          ctx.shadowBlur = 10 * scale1;
          ctx.shadowColor = '#A855F7';
          ctx.fill();
          ctx.shadowBlur = 0;

          // Strand 2 Nucleotide Sphere
          ctx.beginPath();
          ctx.arc(x2, y, Math.max(1.5, 3.5 * scale2), 0, Math.PI * 2);
          ctx.fillStyle = '#38BDF8';
          ctx.shadowBlur = 10 * scale2;
          ctx.shadowColor = '#0284C7';
          ctx.fill();
          ctx.shadowBlur = 0;

          // Interactive mouse repulsion
          if (mouse.isHover) {
            const dist = Math.hypot(mouse.x - x1, mouse.y - y);
            if (dist < 90) {
              ctx.beginPath();
              ctx.moveTo(mouse.x, mouse.y);
              ctx.lineTo(x1, y);
              ctx.strokeStyle = 'rgba(192, 132, 252, 0.4)';
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      } else if (mode === 'astro') {
        // ── RELATIVISTIC ACCRETION DISK RENDERER ──
        // Center Event Horizon
        const eventHorizonR = Math.min(width * 0.08, 48);
        
        ctx.save();
        ctx.translate(cx, cy);

        // Rotating Black Hole Glow Aura
        const bgGrad = ctx.createRadialGradient(0, 0, eventHorizonR * 0.8, 0, 0, eventHorizonR * 4);
        bgGrad.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
        bgGrad.addColorStop(0.3, 'rgba(99, 102, 241, 0.2)');
        bgGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = bgGrad;
        ctx.beginPath();
        ctx.arc(0, 0, eventHorizonR * 4, 0, Math.PI * 2);
        ctx.fill();

        // Accretion disk particles
        for (let p of astroParticles) {
          p.angle += p.speed * (80 / p.radius);

          // 3D tilted disk projection
          const tilt = 0.45;
          const x = Math.cos(p.angle) * p.radius;
          const y = Math.sin(p.angle) * p.radius * tilt + p.z;

          // Relativistic brightness (Doppler boosting on approaching side)
          const doppler = Math.sin(p.angle) * 0.4 + 0.6;

          ctx.beginPath();
          ctx.arc(x, y, p.size * doppler, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.min(1, Math.max(0.15, doppler * 0.9));
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
        }

        // Inner Photon Sphere Ring
        ctx.beginPath();
        ctx.arc(0, 0, eventHorizonR * 1.3, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(244, 114, 182, 0.65)';
        ctx.lineWidth = 2;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#F472B6';
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Pure Black Event Horizon Core
        ctx.beginPath();
        ctx.arc(0, 0, eventHorizonR, 0, Math.PI * 2);
        ctx.fillStyle = '#020307';
        ctx.fill();
        ctx.strokeStyle = '#00FF94';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
      } else {
        // ── PHILOSOPHY MULTILINGUAL NEURAL MATRIX ──
        for (let tp of textParticles) {
          tp.x += tp.vx;
          tp.y += tp.vy;

          if (tp.x < 0) tp.x = width;
          if (tp.x > width) tp.x = 0;
          if (tp.y < 0) tp.y = height;
          if (tp.y > height) tp.y = 0;

          // Interactive mouse attraction
          if (mouse.isHover) {
            const dx = mouse.x - tp.x;
            const dy = mouse.y - tp.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 140) {
              tp.x += dx * 0.02;
              tp.y += dy * 0.02;

              ctx.beginPath();
              ctx.moveTo(mouse.x, mouse.y);
              ctx.lineTo(tp.x, tp.y);
              ctx.strokeStyle = 'rgba(245, 208, 122, 0.2)';
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }

          ctx.font = `italic ${tp.size}px 'Cormorant Garamond', 'Noto Serif JP', serif`;
          ctx.fillStyle = '#F5D07A';
          ctx.globalAlpha = tp.alpha;
          ctx.fillText(tp.text, tp.x, tp.y);
          ctx.globalAlpha = 1;
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute inset-0 pointer-events-auto"
      style={{ opacity: 0.85 }}
    />
  );
}
