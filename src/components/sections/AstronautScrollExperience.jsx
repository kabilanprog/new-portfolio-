import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function AstronautScrollExperience() {
  const canvasRef = useRef(null);
  const cardRef = useRef(null);
  const [isCardActive, setIsCardActive] = useState(false);
  const [cardStyle, setCardStyle] = useState({
    '--ics-pointer-x': '50%',
    '--ics-pointer-y': '50%',
    '--ics-rotate-x': '0deg',
    '--ics-rotate-y': '0deg',
    '--ics-glow-opacity': '0.3',
  });

  // Card Mouse Tilt Interaction
  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;

    const rotateX = ((rect.height / 2 - y) / 10).toFixed(2);
    const rotateY = ((x - rect.width / 2) / 10).toFixed(2);

    setCardStyle({
      '--ics-pointer-x': `${xPct}%`,
      '--ics-pointer-y': `${yPct}%`,
      '--ics-rotate-x': `${rotateX}deg`,
      '--ics-rotate-y': `${rotateY}deg`,
      '--ics-glow-opacity': '0.85',
    });
    setIsCardActive(true);
  };

  const handleCardMouseLeave = () => {
    setIsCardActive(false);
    setCardStyle({
      '--ics-pointer-x': '50%',
      '--ics-pointer-y': '50%',
      '--ics-rotate-x': '0deg',
      '--ics-rotate-y': '0deg',
      '--ics-glow-opacity': '0.25',
    });
  };

  // Cosmic Background Starfield
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Stars
    const stars = [];
    for (let i = 0; i < 75; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.5,
        color: Math.random() > 0.4 ? '#00FF94' : '#00BBF9',
        alpha: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.3 + 0.15,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        s.y -= s.speed;
        if (s.y < 0) s.y = height;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#050505] overflow-hidden"
      aria-label="About Me Section"
    >
      {/* Background Cosmic Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none z-0 opacity-70"
      />

      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-neon/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00BBF9]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-neon/60" />
            <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-neon font-semibold">
              Profile & Background
            </span>
            <span className="h-px w-8 bg-neon/60" />
          </div>
          <h2 className="font-display font-bold text-[clamp(2.5rem,5.5vw,4.5rem)] leading-none tracking-tight text-white uppercase">
            About Me
          </h2>
        </motion.div>

        {/* Main Ultra-Clean Professional Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#090b0e]/90 backdrop-blur-2xl p-6 sm:p-10 md:p-12 rounded-3xl border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)]"
        >
          
          {/* Left Column: 3D Holographic ICS Credential Badge Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={cardStyle}
              className={`ics-profile-card w-full max-w-[280px] ${isCardActive ? 'is-active' : ''}`}
            >
              {/* Outer Glowing Aura */}
              <div className="ics-profile-behind" />

              {/* 3D Shell */}
              <div className="ics-profile-shell">
                <div className="ics-profile-inner">
                  {/* Top Badge Slot Cutout */}
                  <div className="ics-profile-slot" />

                  {/* Holographic Foil Reflections */}
                  <div className="ics-profile-shine" />
                  <div className="ics-profile-glare" />

                  {/* Card Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-5 pt-7">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full border border-neon/50 flex items-center justify-center bg-neon/10">
                          <span className="font-serif italic text-neon text-sm font-bold">K</span>
                        </div>
                        <div>
                          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
                            Kabilan
                          </h4>
                          <span className="font-mono text-[8.5px] text-neon uppercase tracking-wider block font-medium">
                            Full Stack & AI Dev
                          </span>
                        </div>
                      </div>

                      <span className="font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded bg-neon/10 text-neon border border-neon/30 font-semibold">
                        2023–2027
                      </span>
                    </div>

                    {/* Body Details */}
                    <div className="space-y-2.5 py-3">
                      <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-slate-100">
                          <GraduationCap className="w-3.5 h-3.5 text-neon shrink-0" />
                          <span className="font-display font-semibold text-[11.5px] text-white">B.Tech in Information Tech</span>
                        </div>
                        <p className="font-body text-[10px] text-slate-400 leading-tight">
                          Hindusthan College of Engg & Tech
                        </p>
                        <p className="font-mono text-[10.5px] text-neon font-semibold pt-0.5">
                          CGPA: 8.1 / 10.0
                        </p>
                      </div>

                      <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 flex items-center justify-between text-[10px] font-body text-slate-300">
                        <span className="flex items-center gap-1 font-medium">
                          <Award className="w-3.5 h-3.5 text-[#00BBF9]" />
                          SIH Lead Finalist
                        </span>
                        <span className="font-mono text-neon font-semibold">DietLens</span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[9px] font-body text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-neon" />
                        Coimbatore, India
                      </span>
                      <span className="font-mono text-neon uppercase tracking-wider font-semibold text-[8px]">
                        Certified Dev
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Key Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              {/* Category mono tag */}
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-6 bg-neon/60" />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-neon font-semibold">
                  Engineering Vision
                </span>
              </div>

              {/* Big Editorial Headline */}
              <h3 className="font-display text-[clamp(1.8rem,3.8vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-white mb-4">
                I build systems <br />
                <span className="font-serif italic font-normal text-[#F0EDE8]">that matter.</span>
              </h3>

              {/* Body paragraph 1 */}
              <p className="font-body text-[14px] sm:text-[15px] leading-[1.8] text-slate-300 font-normal mb-3">
                Undergraduate in Information Technology at <strong className="text-white font-semibold">Hindusthan College of Engineering and Technology</strong> (Coimbatore), engineering at the intersection of deep learning pipelines and enterprise full-stack systems.
              </p>

              {/* Body paragraph 2 */}
              <p className="font-body text-[14px] sm:text-[15px] leading-[1.8] text-slate-400 font-normal">
                Architect of <strong className="text-neon font-medium">DietLens</strong> (trained across 135,000+ real food photos) and resilient microservices deployed with Docker and cloud runtimes.
              </p>
            </div>

            {/* Stats Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-black/40 border border-white/8 backdrop-blur-sm">
              {PERSONAL_INFO.stats.map((st, idx) => (
                <div key={idx} className="text-center p-1">
                  <span className="block font-display text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {st.value}
                  </span>
                  <span className="block font-mono text-[8.5px] uppercase tracking-[0.16em] text-neon mt-0.5 font-semibold">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
