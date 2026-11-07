import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Sparkles, ArrowUpRight, Dna, Atom, Feather, 
  Layers, Radio, Compass, Orbit, Zap, Eye
} from 'lucide-react';

/* ══════════════════════════════════════════════════════════════════════════════
   VISUAL CORE 1: SAGITTARIUS (Bio-AI, CRISPR Genomic Core, Psi Glyph)
   ══════════════════════════════════════════════════════════════════════════════ */
function SagittariusVisualCore() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Ambient Pulsing Biological Nebula */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.25)_0%,rgba(0,255,148,0.08)_45%,transparent_75%)] animate-pulse" />

      {/* Cybernetic Grid Backdrop */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Animated SVG Bio-Quantum Lattice */}
      <svg viewBox="0 0 240 240" className="w-full h-full max-w-[230px] max-h-[230px] relative z-10" fill="none">
        <defs>
          <linearGradient id="bio-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#00FF94" />
          </linearGradient>
          <linearGradient id="bio-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FF94" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
          <radialGradient id="bio-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#6366F1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <filter id="bio-filter-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Central Core Glow Aura */}
        <circle cx="120" cy="120" r="75" fill="url(#bio-core-glow)" />

        {/* Outer Rotating Astrolabe Data Ring */}
        <g className="animate-[spin_24s_linear_infinite]" style={{ transformOrigin: '120px 120px' }}>
          <circle cx="120" cy="120" r="102" stroke="rgba(168,85,247,0.3)" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="120" cy="120" r="95" stroke="rgba(0,255,148,0.25)" strokeWidth="0.8" strokeDasharray="3 14" />
          {/* Calibrator ticks */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="120"
              y1="15"
              x2="120"
              y2="23"
              stroke="#00FF94"
              strokeWidth="1.5"
              transform={`rotate(${deg} 120 120)`}
              opacity="0.7"
            />
          ))}
        </g>

        {/* Counter-Rotating Chromosome Ring */}
        <g className="animate-[spin_16s_linear_infinite_reverse]" style={{ transformOrigin: '120px 120px' }}>
          <circle cx="120" cy="120" r="82" stroke="rgba(168,85,247,0.4)" strokeWidth="1.2" strokeDasharray="12 12" />
          {/* Genetic Codon Markers */}
          {[30, 75, 120, 165, 210, 255, 300, 345].map((deg, i) => (
            <circle
              key={deg}
              cx={120 + 82 * Math.cos((deg * Math.PI) / 180)}
              cy={120 + 82 * Math.sin((deg * Math.PI) / 180)}
              r={i % 2 === 0 ? "3" : "2"}
              fill={i % 2 === 0 ? "#00FF94" : "#A855F7"}
              filter="url(#bio-filter-glow)"
            />
          ))}
        </g>

        {/* 3D Double Helix Wave Strands */}
        <g opacity="0.85">
          {/* Sine strand 1 */}
          <path
            d="M50,120 Q85,75 120,120 T190,120"
            stroke="url(#bio-grad-1)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          {/* Sine strand 2 */}
          <path
            d="M50,120 Q85,165 120,120 T190,120"
            stroke="#00FF94"
            strokeWidth="1.6"
            strokeDasharray="4 3"
            fill="none"
          />
          {/* Base pair hydrogen rungs */}
          {[65, 80, 95, 110, 125, 140, 155, 175].map((x) => {
            const dy = Math.sin(((x - 50) / 70) * Math.PI) * 28;
            return (
              <line
                key={x}
                x1={x}
                y1={120 - dy}
                x2={x}
                y2={120 + dy}
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
            );
          })}
        </g>

        {/* Central Luminous Holographic Psi (Ψ) Glyph */}
        <g filter="url(#bio-filter-glow)">
          {/* Deep ambient shadow */}
          <text
            x="120"
            y="148"
            fontFamily="'Cinzel', 'Cinzel Decorative', serif"
            fontWeight="900"
            fontSize="88"
            textAnchor="middle"
            fill="rgba(168,85,247,0.2)"
            letterSpacing="2"
          >
            Ψ
          </text>
          {/* Glowing core text */}
          <text
            x="120"
            y="148"
            fontFamily="'Cinzel', 'Cinzel Decorative', serif"
            fontWeight="900"
            fontSize="88"
            textAnchor="middle"
            fill="url(#bio-grad-1)"
            letterSpacing="2"
          >
            Ψ
          </text>
        </g>

        {/* Constellation Nodes around Core */}
        <g stroke="rgba(0,255,148,0.5)" strokeWidth="0.8" opacity="0.8">
          <line x1="85" y1="80" x2="105" y2="65" />
          <line x1="105" y1="65" x2="135" y2="65" />
          <line x1="135" y1="65" x2="155" y2="80" />
          <line x1="155" y1="80" x2="150" y2="105" />
          <circle cx="85" cy="80" r="2.5" fill="#00FF94" />
          <circle cx="105" cy="65" r="3" fill="#A855F7" />
          <circle cx="135" cy="65" r="3" fill="#A855F7" />
          <circle cx="155" cy="80" r="2.5" fill="#00FF94" />
        </g>

        {/* Subatomic Sparkles */}
        <circle cx="68" cy="95" r="1.5" fill="#FFFFFF" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="172" cy="145" r="1.5" fill="#00FF94" className="animate-ping" style={{ animationDuration: '4s' }} />
        <circle cx="120" cy="52" r="2" fill="#A855F7" className="animate-ping" style={{ animationDuration: '2.5s' }} />
      </svg>

      {/* Cyber Readout Banner */}
      <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-purple-300/70 border-t border-purple-500/20 pt-1.5 pointer-events-none">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          CRISPR // CAS-9
        </span>
        <span className="tracking-widest text-emerald-400 font-semibold">SYNAPSE 99.4%</span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   VISUAL CORE 2: SAM SCITECH (Cosmic Singularity, Event Horizon & Quantum Stargate)
   ══════════════════════════════════════════════════════════════════════════════ */
function SciTechVisualCore() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Relativistic Deep Space Void & Doppler Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.28)_0%,rgba(14,165,233,0.12)_40%,transparent_75%)] animate-pulse" />

      {/* Radial Coordinate Starlight Matrix */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(34,211,238,0.4) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <svg viewBox="0 0 240 240" className="w-full h-full max-w-[230px] max-h-[230px] relative z-10" fill="none">
        <defs>
          <linearGradient id="sci-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="60%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="sci-stargate" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="50%" stopColor="#F43F5E" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <radialGradient id="sci-blackhole" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#030712" />
            <stop offset="65%" stopColor="#082F49" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
          <filter id="sci-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4.5" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Central Event Horizon Black Hole */}
        <circle cx="120" cy="120" r="50" fill="url(#sci-blackhole)" />
        <circle cx="120" cy="120" r="32" fill="#02040A" stroke="#38BDF8" strokeWidth="1.5" filter="url(#sci-glow)" />

        {/* Relativistic Accretion Disk (Tilted Ellipse with Doppler Asymmetry) */}
        <g className="animate-[spin_18s_linear_infinite]" style={{ transformOrigin: '120px 120px' }}>
          <ellipse
            cx="120"
            cy="120"
            rx="96"
            ry="40"
            stroke="url(#sci-cyan)"
            strokeWidth="2.5"
            strokeDasharray="18 8 36 6"
            transform="rotate(-26 120 120)"
            filter="url(#sci-glow)"
          />
          <ellipse
            cx="120"
            cy="120"
            rx="82"
            ry="30"
            stroke="rgba(56,189,248,0.5)"
            strokeWidth="1.2"
            strokeDasharray="6 6"
            transform="rotate(-26 120 120)"
          />
        </g>

        {/* Counter Orbit Gravitational Wave Rings */}
        <g className="animate-[spin_28s_linear_infinite_reverse]" style={{ transformOrigin: '120px 120px' }}>
          <circle cx="120" cy="120" r="98" stroke="rgba(34,211,238,0.25)" strokeWidth="0.8" strokeDasharray="4 8" />
          {/* Orbital Satellites / Starlight Photons */}
          {[0, 90, 180, 270].map((deg) => (
            <circle
              key={deg}
              cx={120 + 98 * Math.cos((deg * Math.PI) / 180)}
              cy={120 + 98 * Math.sin((deg * Math.PI) / 180)}
              r="2.5"
              fill="#38BDF8"
              filter="url(#sci-glow)"
            />
          ))}
        </g>

        {/* Holographic Quantum Torii Stargate Overlay */}
        <g transform="translate(120, 120) scale(0.68) translate(-120, -120)">
          {/* Top arch beam */}
          <path
            d="M60,68 C90,62 150,62 180,68 L176,78 C148,73 92,73 64,78 Z"
            fill="url(#sci-stargate)"
            filter="url(#sci-glow)"
          />
          {/* Sub beam */}
          <rect x="70" y="86" width="100" height="8" rx="2" fill="#BE123C" opacity="0.9" />
          {/* Twin Gate Pillars */}
          <rect x="80" y="94" width="10" height="84" rx="2" fill="url(#sci-stargate)" />
          <rect x="150" y="94" width="10" height="84" rx="2" fill="url(#sci-stargate)" />
          {/* Stargate Energy Tether */}
          <line x1="85" y1="130" x2="155" y2="130" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="3 3" />
        </g>

        {/* Floating Japanese Science Kanji Hologram */}
        <text
          x="120"
          y="188"
          fontFamily="'Noto Serif JP', serif"
          fontWeight="700"
          fontSize="14"
          fill="#38BDF8"
          textAnchor="middle"
          letterSpacing="4"
          filter="url(#sci-glow)"
          opacity="0.95"
        >
          科学教育
        </text>

        {/* Photon Polar Jets */}
        <line x1="120" y1="20" x2="120" y2="60" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 2" opacity="0.8" />
        <line x1="120" y1="180" x2="120" y2="220" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 2" opacity="0.8" />
      </svg>

      {/* Cyber Readout Banner */}
      <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-cyan-300/70 border-t border-cyan-500/20 pt-1.5 pointer-events-none">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          YOUTUBE // @SamSciTech
        </span>
        <span className="tracking-widest text-cyan-400 font-semibold">1420.4 MHz</span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   VISUAL CORE 3: WORDS & WORLDS (Chrono-Prism, Multilingual Celestial Astrolabe)
   ══════════════════════════════════════════════════════════════════════════════ */
function WordsWorldsVisualCore() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Radiant Solar-Amber Nebula Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.22)_0%,rgba(217,119,6,0.1)_40%,transparent_75%)] animate-pulse" />

      {/* Sacred Geometry Mandala Grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(245,158,11,0.5) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      <svg viewBox="0 0 240 240" className="w-full h-full max-w-[230px] max-h-[230px] relative z-10" fill="none">
        <defs>
          <linearGradient id="ww-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <radialGradient id="ww-prism-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#78350F" stopOpacity="0" />
          </radialGradient>
          <filter id="ww-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Golden Core Aura */}
        <circle cx="120" cy="120" r="60" fill="url(#ww-prism-glow)" />

        {/* Rotating Outer Astrolabe Rune Circle */}
        <g className="animate-[spin_32s_linear_infinite]" style={{ transformOrigin: '120px 120px' }}>
          <circle cx="120" cy="120" r="100" stroke="rgba(245,158,11,0.35)" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="120" cy="120" r="92" stroke="rgba(245,158,11,0.2)" strokeWidth="0.8" />
          
          {/* Multilingual Classical Glyphs in Orbital Alignment */}
          <text x="120" y="28" fontFamily="'Cinzel', serif" fontSize="10" fill="#FDE68A" textAnchor="middle" filter="url(#ww-glow)">νοῦς</text>
          <text x="210" y="124" fontFamily="'Cinzel', serif" fontSize="10" fill="#FDE68A" textAnchor="middle" filter="url(#ww-glow)">வார்த்தை</text>
          <text x="120" y="218" fontFamily="'Cinzel', serif" fontSize="10" fill="#FDE68A" textAnchor="middle" filter="url(#ww-glow)">Amor Fati</text>
          <text x="32" y="124" fontFamily="'Cinzel', serif" fontSize="10" fill="#FDE68A" textAnchor="middle" filter="url(#ww-glow)">شعر</text>
        </g>

        {/* Counter-Rotating Sacred Geometry Octagon */}
        <g className="animate-[spin_20s_linear_infinite_reverse]" style={{ transformOrigin: '120px 120px' }}>
          <circle cx="120" cy="120" r="76" stroke="rgba(245,158,11,0.4)" strokeWidth="1.2" strokeDasharray="8 10" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <circle
              key={deg}
              cx={120 + 76 * Math.cos((deg * Math.PI) / 180)}
              cy={120 + 76 * Math.sin((deg * Math.PI) / 180)}
              r="2.5"
              fill="#F59E0B"
              filter="url(#ww-glow)"
            />
          ))}
        </g>

        {/* Central Luminous Quantum Chrono-Lantern / Prism */}
        <g filter="url(#ww-glow)" transform="translate(120, 120) scale(1.15) translate(-120, -120)">
          {/* Diamond faceted prism body */}
          <polygon
            points="120,70 145,108 135,155 105,155 95,108"
            fill="rgba(30, 15, 5, 0.85)"
            stroke="url(#ww-gold)"
            strokeWidth="2"
          />
          {/* Internal Eternal Flame */}
          <path
            d="M120,95 Q113,115 120,132 Q127,115 120,95 Z"
            fill="url(#ww-gold)"
            className="animate-pulse"
          />
          <circle cx="120" cy="120" r="4" fill="#FFFFFF" />
          {/* Light Beams Radiating outwards */}
          <line x1="120" y1="65" x2="120" y2="45" stroke="#FDE68A" strokeWidth="1.5" />
          <line x1="145" y1="108" x2="165" y2="108" stroke="#FDE68A" strokeWidth="1.2" />
          <line x1="95" y1="108" x2="75" y2="108" stroke="#FDE68A" strokeWidth="1.2" />
        </g>

        {/* Starlight Constellation Dust */}
        <circle cx="78" cy="74" r="1.5" fill="#FDE68A" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="162" cy="74" r="1.5" fill="#FDE68A" className="animate-ping" style={{ animationDuration: '4.5s' }} />
        <circle cx="164" cy="165" r="1.8" fill="#F59E0B" className="animate-ping" style={{ animationDuration: '3.5s' }} />
        <circle cx="76" cy="165" r="1.5" fill="#F59E0B" className="animate-ping" style={{ animationDuration: '2.5s' }} />
      </svg>

      {/* Cyber Readout Banner */}
      <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-amber-300/70 border-t border-amber-500/20 pt-1.5 pointer-events-none">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          HERMENEUTICS // ACTIVE
        </span>
        <span className="tracking-widest text-amber-400 font-semibold">4 DIALECTS</span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   MAIN HOLOGRAPHIC 3D VISION CARD COMPONENT
   ══════════════════════════════════════════════════════════════════════════════ */
export default function HolographicVisionCard({
  id,
  title,
  subtitle,
  category,
  sectorCode,
  accentColor = '#A855F7',
  glowColor = 'rgba(168,85,247,0.4)',
  borderColor = 'rgba(168,85,247,0.3)',
  icon: CardIcon = Sparkles,
  tags = [],
  onClick,
}) {
  const cardRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [coords, setCoords] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth 3D tilt calculation based on cursor position relative to card
  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setCoords({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0.5, y: 0.5 });
  };

  // Convert coords (0..1) to rotation angles (-8deg to +8deg)
  const rotateY = shouldReduceMotion ? 0 : (coords.x - 0.5) * 16;
  const rotateX = shouldReduceMotion ? 0 : (0.5 - coords.y) * 16;

  // Specular reflection coordinates
  const glareX = coords.x * 100;
  const glareY = coords.y * 100;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        perspective: '1000px',
      }}
      className="relative cursor-pointer select-none group w-full max-w-[340px] sm:max-w-[360px] h-[520px] flex-shrink-0"
    >
      {/* ── Outer Dimensional Ambient Glow ── */}
      <div
        className="absolute -inset-2 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${glowColor}, transparent 70%)`,
        }}
      />

      {/* ── 3D Card Body Shell ── */}
      <motion.div
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.025 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 24,
        }}
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: isHovered
            ? `0 25px 60px -15px rgba(0, 0, 0, 0.95), 0 0 35px -5px ${glowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.15)`
            : '0 15px 40px -15px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        }}
        className="relative w-full h-full rounded-[28px] bg-gradient-to-b from-[#0e0c18]/95 via-[#080711]/98 to-[#040407] border border-white/10 group-hover:border-white/25 overflow-hidden flex flex-col justify-between p-6 transition-colors duration-300"
      >
        {/* Holographic Specular Glare Layer */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30"
          style={{
            opacity: isHovered ? 0.25 : 0,
            background: `radial-gradient(circle 280px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.6) 0%, transparent 60%)`,
          }}
        />

        {/* Futuristic Scanline Effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.06] z-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 4px)',
          }}
        />

        {/* ── 1. Top Card Telemetry Header ── */}
        <div className="relative z-20 flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: accentColor }}
            />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-bold text-white/80">
              {sectorCode}
            </span>
          </div>

          <div 
            className="p-1.5 rounded-lg border flex items-center justify-center transition-colors"
            style={{ 
              backgroundColor: `${accentColor}15`, 
              borderColor: `${accentColor}35`,
              color: accentColor 
            }}
          >
            <CardIcon size={14} />
          </div>
        </div>

        {/* ── 2. Center Animated Visual Stage ── */}
        <div className="relative z-20 my-auto w-full aspect-square max-h-[240px] rounded-2xl bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center shadow-inner group-hover:border-white/15 transition-all">
          {id === 'sagittarius' && <SagittariusVisualCore />}
          {id === 'scitech' && <SciTechVisualCore />}
          {id === 'words-worlds' && <WordsWorldsVisualCore />}
        </div>

        {/* ── 3. Bottom Description & Action Deck ── */}
        <div className="relative z-20 space-y-3 pt-3 border-t border-white/10">
          <div>
            <span
              className="font-mono text-[9.5px] uppercase tracking-[0.3em] font-semibold block mb-1"
              style={{ color: accentColor }}
            >
              {category}
            </span>
            <h3 className="font-display font-extrabold text-2xl text-white tracking-wide group-hover:text-white transition-colors">
              {title}
            </h3>
            <p className="font-body text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {tags.map((t, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md font-mono text-[9px] uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Interactive Trigger CTA */}
          <div
            className="w-full py-2.5 px-4 rounded-xl flex items-center justify-between font-mono text-[11px] font-bold tracking-wider uppercase transition-all duration-300 mt-2"
            style={{
              backgroundColor: isHovered ? `${accentColor}25` : 'rgba(255, 255, 255, 0.04)',
              borderColor: isHovered ? accentColor : 'rgba(255, 255, 255, 0.1)',
              borderWidth: '1px',
              color: isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
            }}
          >
            <span className="flex items-center gap-2">
              <span 
                className="w-1.5 h-1.5 rounded-full" 
                style={{ backgroundColor: accentColor }} 
              />
              ENTER PORTAL
            </span>
            <ArrowUpRight
              size={15}
              className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              style={{ color: accentColor }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

