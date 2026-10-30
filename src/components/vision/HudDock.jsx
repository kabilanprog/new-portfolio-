import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Dna, Atom, Feather } from 'lucide-react';

/* ══════════════════════════════════════════════════════════════════════════════
   MODE CONFIGURATION: Unified celestial palette with mode accents
   ══════════════════════════════════════════════════════════════════════════════ */
const MODE_CONFIG = {
  bio: {
    id: 'bio',
    key: '1',
    label: 'Bio-AI',
    shortLabel: 'Bio-AI',
    microLabel: 'Bio',
    icon: Dna,
    accent: '#a855f7', // violet
    glow: 'rgba(168, 85, 247, 0.35)',
    borderGlow: 'rgba(168, 85, 247, 0.55)',
    bgActive: 'rgba(168, 85, 247, 0.18)',
  },
  astro: {
    id: 'astro',
    key: '2',
    label: 'Astrophysics',
    shortLabel: 'Astro',
    microLabel: 'Astro',
    icon: Atom,
    accent: '#22d3ee', // cyan
    glow: 'rgba(34, 211, 238, 0.35)',
    borderGlow: 'rgba(34, 211, 238, 0.55)',
    bgActive: 'rgba(34, 211, 238, 0.18)',
  },
  philosophy: {
    id: 'philosophy',
    key: '3',
    label: 'Philosophy',
    shortLabel: 'Phil',
    microLabel: 'Phil',
    icon: Feather,
    accent: '#f5d07a', // amber
    glow: 'rgba(245, 208, 122, 0.35)',
    borderGlow: 'rgba(245, 208, 122, 0.55)',
    bgActive: 'rgba(245, 208, 122, 0.18)',
  },
};

const MODES = [MODE_CONFIG.bio, MODE_CONFIG.astro, MODE_CONFIG.philosophy];

/* ══════════════════════════════════════════════════════════════════════════════
   ASTRONOMICAL FORMULA: GMST & Local Sidereal Time for Coimbatore (76.9558° E)
   ══════════════════════════════════════════════════════════════════════════════ */
function calculateLST(date, longitudeDegrees = 76.9558) {
  // Julian Date calculation from Unix epoch milliseconds
  const jd = 2440587.5 + date.getTime() / 86400000;
  // Days elapsed since J2000.0 (JD 2451545.0)
  const d = jd - 2451545.0;
  const t = d / 36525.0;

  // Greenwich Mean Sidereal Time in degrees (standard IAU polynomial)
  let gmstDeg =
    (280.46061837 + 360.98564736629 * d + 0.000387933 * t * t - (t * t * t) / 38710000) % 360;
  if (gmstDeg < 0) gmstDeg += 360;

  // Convert GMST to decimal hours (15° per hour)
  const gmstHours = gmstDeg / 15;

  // Local Sidereal Time = GMST + Longitude / 15 (East is positive)
  let lstHours = (gmstHours + longitudeDegrees / 15) % 24;
  if (lstHours < 0) lstHours += 24;

  const h = Math.floor(lstHours);
  const m = Math.floor((lstHours - h) * 60);
  const s = Math.floor(((lstHours - h) * 60 - m) * 60);

  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function formatIST(date) {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(date);
  } catch {
    // Fallback if Intl timeZone is unavailable
    const istMs = date.getTime() + (5.5 * 60 + date.getTimezoneOffset()) * 60000;
    const d = new Date(istMs);
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }
}

/**
 * Custom hook to track real-time IST and Local Sidereal Time
 * Updates every second, properly cleaned up on unmount.
 */
function useCelestialClock(longitude = 76.9558) {
  const [clock, setClock] = useState(() => {
    const now = new Date();
    return {
      ist: formatIST(now),
      lst: calculateLST(now, longitude),
    };
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock({
        ist: formatIST(now),
        lst: calculateLST(now, longitude),
      });
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [longitude]);

  return clock;
}

/* ══════════════════════════════════════════════════════════════════════════════
   ANIMATED EQUALIZER BARS (4 bars, reactive to audio state & reduced-motion)
   ══════════════════════════════════════════════════════════════════════════════ */
function EqualizerBars({ isAudioOn, shouldReduceMotion }) {
  const bars = [
    { id: 1, animClass: 'animate-eq-bar-1' },
    { id: 2, animClass: 'animate-eq-bar-2' },
    { id: 3, animClass: 'animate-eq-bar-3' },
    { id: 4, animClass: 'animate-eq-bar-4' },
  ];

  return (
    <div
      className="flex items-center gap-[2.5px] h-3.5 px-0.5 flex-shrink-0"
      aria-hidden="true"
    >
      {bars.map((bar) => {
        let heightClass = 'h-[3px] opacity-40';
        if (isAudioOn) {
          heightClass = shouldReduceMotion ? 'h-2.5 opacity-90' : `${bar.animClass} opacity-100`;
        }

        return (
          <span
            key={bar.id}
            className={`w-[2.5px] rounded-full bg-[#f5d07a] transition-all duration-300 ${heightClass}`}
          />
        );
      })}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT: Celestial Astrolabe Dock
   ══════════════════════════════════════════════════════════════════════════════ */
export default function HudDock({
  horizonMode = 'bio',
  setHorizonMode,
  isAudioOn = false,
  onToggleAudio,
}) {
  const clock = useCelestialClock(76.9558);
  const shouldReduceMotion = useReducedMotion();
  const currentMode = MODE_CONFIG[horizonMode] || MODE_CONFIG.bio;

  // Keyboard navigation: keys 1, 2, 3 switch horizon mode (ignored while typing in inputs)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const target = e.target;
      if (
        target instanceof HTMLElement &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === '1') setHorizonMode('bio');
      else if (e.key === '2') setHorizonMode('astro');
      else if (e.key === '3') setHorizonMode('philosophy');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setHorizonMode]);

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
      }
      className="relative mb-6 sm:mb-8 w-full max-w-4xl lg:max-w-5xl rounded-2xl sm:rounded-full bg-black/55 backdrop-blur-xl border font-mono transition-shadow duration-500 p-2 sm:px-4 sm:py-2 select-none"
      style={{
        borderColor: 'rgba(200, 146, 42, 0.35)',
        boxShadow: `0 0 28px -4px ${currentMode.glow}, 0 10px 30px -10px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(245, 208, 122, 0.22)`,
      }}
    >
      {/* ── Tarot Card Echo Corner Ticks (Left & Right) ── */}
      <span
        aria-hidden="true"
        className="hidden lg:block absolute left-2.5 top-1/2 -translate-y-1/2 text-[#c8922a]/40 text-[9px] pointer-events-none select-none font-serif"
      >
        ✦
      </span>
      <span
        aria-hidden="true"
        className="hidden lg:block absolute right-2.5 top-1/2 -translate-y-1/2 text-[#c8922a]/40 text-[9px] pointer-events-none select-none font-serif"
      >
        ✦
      </span>

      {/* ── Responsive Container ──
          <640px: 2-row grid (Row 1: Telemetry + Audio, Row 2: Full-width segmented tabs)
          ≥640px: single row flex (Telemetry | Mode Switcher | Audio)
      */}
      <div className="grid grid-cols-[1fr_auto] sm:flex sm:flex-row items-center justify-between gap-2.5 sm:gap-3 w-full">
        
        {/* ── 1. Telemetry Block ── */}
        <div className="col-start-1 row-start-1 flex items-center gap-2 sm:gap-2.5 flex-shrink-0 whitespace-nowrap pl-1 sm:pl-2">
          {/* Pulsing Concentric Status Ring */}
          <div
            className="relative flex items-center justify-center w-3.5 h-3.5 flex-shrink-0"
            title="Telemetry Core Online"
          >
            <span
              className={`absolute inset-0 rounded-full bg-[#f5d07a]/30 ${
                shouldReduceMotion ? '' : 'animate-ping-ring'
              }`}
            />
            <span className="absolute w-2.5 h-2.5 rounded-full bg-[#c8922a]/20 border border-[#f5d07a]/50" />
            <span className="relative w-1.5 h-1.5 rounded-full bg-[#f5d07a] shadow-[0_0_6px_#f5d07a]" />
          </div>

          {/* Location & Real-Time Clock */}
          <div className="flex flex-col justify-center leading-tight whitespace-nowrap">
            {/* Line 1: Location & Coordinates (Never hidden on mobile) */}
            <div className="text-[11px] font-medium tracking-[0.12em] text-[#e0d8c7] flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
              <span className="font-semibold text-white">COIMBATORE</span>
              <span className="text-[#c8922a]/40 hidden sm:inline">·</span>
              <span className="text-slate-400 font-normal hidden sm:inline">
                11.0168° N, 76.9558° E
              </span>
            </div>

            {/* Line 2: Real-time IST & Local Sidereal Time */}
            <div className="text-[10px] tracking-[0.12em] text-slate-400 tabular-nums flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
              <span>IST {clock.ist}</span>
              {/* LST hidden on 640-1023px, visible on >=1024px desktop */}
              <span className="text-[#c8922a]/40 hidden lg:inline">·</span>
              <span className="text-slate-400/90 hidden lg:inline">
                LST {clock.lst}
              </span>
            </div>
          </div>

          {/* Core Synchronized Status Chip (soft gold / emerald-white) */}
          <div className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#c8922a]/10 border border-[#c8922a]/30 text-[10px] tracking-wider font-mono whitespace-nowrap flex-shrink-0">
            <span className="text-[#c8922a]">CORE:</span>
            <span className="text-[#e2e8f0] font-medium">SYNCHRONIZED</span>
          </div>
          {/* Compact Chip for mobile & tablet */}
          <div className="inline-flex xl:hidden items-center px-1.5 py-0.5 rounded-full bg-[#c8922a]/10 border border-[#c8922a]/30 text-[9px] tracking-wider font-mono text-[#e2e8f0] whitespace-nowrap flex-shrink-0">
            <span>SYNC</span>
          </div>
        </div>

        {/* ── 2. Mode Switcher (Accessible Tablist with Shared Sliding Pill) ── */}
        <div
          role="tablist"
          aria-label="Horizon Vision Modes"
          className="col-span-2 row-start-2 sm:col-span-1 sm:row-start-auto relative flex items-center w-full sm:w-auto p-1 rounded-full bg-black/45 border border-[#c8922a]/25 backdrop-blur-md"
        >
          {MODES.map((mode) => {
            const isActive = horizonMode === mode.id;
            const Icon = mode.icon;

            return (
              <button
                key={mode.id}
                role="tab"
                id={`hud-tab-${mode.id}`}
                aria-selected={isActive}
                aria-controls={`hud-panel-${mode.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setHorizonMode(mode.id)}
                className={`relative z-10 flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs tracking-[0.12em] uppercase transition-colors duration-200 outline-none whitespace-nowrap focus-visible:ring-1 focus-visible:ring-[#f5d07a] ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-slate-400 hover:text-[#f0ede8]'
                }`}
              >
                {/* Framer-Motion Shared Sliding Pill Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeHudTab"
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: mode.bgActive,
                      border: `1px solid ${mode.borderGlow}`,
                      boxShadow: `0 0 16px ${mode.glow}`,
                    }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 380, damping: 30 }
                    }
                  />
                )}

                <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                  <Icon
                    size={13}
                    style={{
                      color: isActive ? mode.accent : 'currentColor',
                      filter:
                        isActive && !shouldReduceMotion
                          ? `drop-shadow(0 0 6px ${mode.accent})`
                          : 'none',
                      transition: 'color 0.25s ease, filter 0.25s ease',
                    }}
                  />
                  {/* Desktop label */}
                  <span className="hidden lg:inline whitespace-nowrap">{mode.label}</span>
                  {/* Tablet label */}
                  <span className="hidden sm:inline lg:hidden whitespace-nowrap">{mode.shortLabel}</span>
                  {/* Mobile label */}
                  <span className="inline sm:hidden whitespace-nowrap">{mode.microLabel}</span>

                  {/* Keyboard Shortcut Hint (only shown on Philosophy tab, hidden on mobile) */}
                  {mode.id === 'philosophy' && (
                    <kbd
                      aria-hidden="true"
                      className="hidden sm:inline-block ml-0.5 px-1 py-0.2 rounded text-[9px] text-[#c8922a]/70 bg-[#c8922a]/10 border border-[#c8922a]/20"
                    >
                      {mode.key}
                    </kbd>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── 3. Ambient Audio Toggle (Live Equalizer Feedback) ── */}
        <div className="col-start-2 row-start-1 sm:col-start-auto sm:row-start-auto flex justify-end flex-shrink-0 whitespace-nowrap pr-1 sm:pr-2">
          <button
            type="button"
            onClick={onToggleAudio}
            aria-pressed={isAudioOn}
            aria-label={`Toggle ambient soundscape, currently ${isAudioOn ? 'active' : 'inactive'}`}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 text-[11px] uppercase tracking-[0.12em] select-none outline-none whitespace-nowrap focus-visible:ring-1 focus-visible:ring-[#f5d07a] ${
              isAudioOn
                ? 'bg-[#c8922a]/15 border-[#f5d07a]/50 text-[#f5d07a] shadow-[0_0_14px_rgba(200,146,42,0.25)]'
                : 'bg-black/40 border-[#c8922a]/25 text-slate-400 hover:text-[#f0ede8] hover:border-[#c8922a]/50'
            }`}
          >
            <EqualizerBars
              isAudioOn={isAudioOn}
              shouldReduceMotion={shouldReduceMotion}
            />
            {/* Full text on tablet & desktop */}
            <span className="hidden sm:inline whitespace-nowrap">
              AUDIO · {isAudioOn ? 'ON' : 'OFF'}
            </span>
            {/* Compact text on mobile */}
            <span className="inline sm:hidden whitespace-nowrap">
              {isAudioOn ? 'AUDIO: ON' : 'AUDIO: OFF'}
            </span>
          </button>
        </div>

      </div>
    </motion.div>
  );
}
