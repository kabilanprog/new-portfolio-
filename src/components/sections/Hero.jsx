import React from 'react';
import { motion } from 'framer-motion';
import Robot3DCanvas from '../common/Robot3DCanvas';

/* ── Spotlight SVG from reference (anbumalligarjun.me) ── */
function SpotlightSVG() {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, delay: 0.4 }}
      className="pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] -top-40 left-0 md:left-60 md:-top-20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#spotlightBlur)">
        <ellipse
          cx="1924.71" cy="273.501"
          rx="1924.71" ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill="rgba(0, 255, 148, 0.18)"
          fillOpacity="0.22"
        />
      </g>
      <defs>
        <filter id="spotlightBlur" x="0.86" y="0.83" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="151" result="spotBlur" />
        </filter>
      </defs>
    </motion.svg>
  );
}

export default function Hero() {
  const firstName = "Kabilan";
  const subTitle   = "Full Stack & AI Engineer";
  const tagLine    = "Java · Full Stack · Computer Vision";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050505] pt-20"
    >
      {/* ── Deep Space Background Radial Glows ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#07070a] to-[#050505]" />
        {/* Exact reference gradients */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(0,255,148,0.08)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
        </motion.div>
        {/* Right-side teal glow (matches reference) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_68%_38%,rgba(0,140,100,0.55)_0%,rgba(0,90,70,0.25)_35%,transparent_60%)]" />
        {/* Pulsing center glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,148,0.06)_0%,transparent_35%)] animate-[pulseGlow_8s_ease-in-out_infinite]" />
      </div>

      {/* ── SVG Spotlight Beam (exact from reference) ── */}
      <SpotlightSVG />

      {/* ── Hero Content: Left Text + Right 3D Robot ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-[clamp(32px,6vw,96px)] py-[6vh] sm:py-[10vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">

          {/* Left Editorial Column */}
          <div className="lg:col-span-7 max-w-[520px] mx-auto lg:mx-0 text-center lg:text-left">

            {/* Category Mono Tag */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-3 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="h-px w-10 bg-white/20 shrink-0" />
              <span
                className="font-mono text-[10px] uppercase tracking-[0.3em]"
                style={{ color: 'rgba(0,255,148,0.55)' }}
              >
                {tagLine}
              </span>
            </motion.div>

            {/* Giant Blur-Reveal Name (letter by letter, exact reference) */}
            <h1 style={{ lineHeight: 1, marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              {/* First name — extra large italic serif */}
              <span
                className="block"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(5rem, 12vw, 10rem)',
                  lineHeight: 0.88,
                  letterSpacing: '-0.015em',
                  color: '#F0EDE8',
                  textShadow: '0 2px 40px rgba(255,255,255,0.06)',
                }}
              >
                {firstName.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, filter: 'blur(8px)', y: 40 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.3 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>

              {/* Subtitle — medium italic, tinted green like reference */}
              <motion.span
                className="block"
                initial={{ opacity: 0, filter: 'blur(8px)', y: 30 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
                  lineHeight: 0.92,
                  letterSpacing: '0.005em',
                  color: '#C8F5E8',
                }}
              >
                {subTitle}
              </motion.span>
            </h1>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontWeight: 200,
                fontSize: 'clamp(0.88rem, 1.3vw, 1.02rem)',
                lineHeight: 1.85,
                letterSpacing: '0.01em',
                color: 'rgba(161,161,170,0.85)',
                maxWidth: '420px',
                marginBottom: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              Building at the intersection of{' '}
              <span style={{ color: '#2FFFB0' }}>AI</span>,{' '}
              <span style={{ color: '#2FFFB0' }}>Deep Learning</span>, and{' '}
              <span style={{ color: '#2FFFB0' }}>Scalable Web Systems</span>{' '}
              — engineering intelligent software that solves real-world challenges.
            </motion.p>

            {/* CTA Buttons (exact match reference) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="hero-cta-row flex items-center gap-6 sm:gap-8 flex-wrap justify-center lg:justify-start"
            >
              <a
                href="#experience"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1px solid rgba(0,255,148,0.45)',
                  borderRadius: '9999px',
                  padding: '10px 28px',
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#00FF94',
                  background: 'transparent',
                  transition: 'background 0.25s, border-color 0.25s, color 0.25s',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#00FF94';
                  e.currentTarget.style.color = '#000';
                  e.currentTarget.style.borderColor = '#00FF94';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#00FF94';
                  e.currentTarget.style.borderColor = 'rgba(0,255,148,0.45)';
                }}
              >
                Explore My Journey
              </a>

              <a
                href="#projects"
                className="group"
                style={{
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(242,242,242,0.55)',
                  transition: 'color 0.2s',
                  position: 'relative',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                }}
              >
                View Projects
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    height: '1px',
                    width: '100%',
                    background: 'rgba(242,242,242,0.35)',
                  }}
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── 3D Interactive Cyber Robot (Framed on right side, matching reference) ── */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-full md:w-[58%] h-full flex items-center justify-center will-change-[opacity]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        aria-hidden="true"
      >
        <div className="h-full w-full [&_canvas]:pointer-events-auto [&_canvas]:bg-transparent! [&_canvas]:cursor-none">
          <Robot3DCanvas />
        </div>
      </motion.div>

      {/* Scroll Indicator Dot */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        aria-hidden="true"
      >
        <div className="h-2 w-2 rounded-full bg-neon shadow-[0_0_0_4px_rgba(0,255,148,0.15)]" />
      </motion.div>

      {/* Bottom fade-to-black */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
