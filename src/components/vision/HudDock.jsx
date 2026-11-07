import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Dna, Atom, Feather, Radio, Activity } from 'lucide-react';

/* ══════════════════════════════════════════════════════════════════════════════
   MODE CONFIGURATION: Modern Cyber-Fantasy Neon Palette
   ══════════════════════════════════════════════════════════════════════════════ */
const MODE_CONFIG = {
  bio: {
    id: 'bio',
    key: '1',
    label: 'Bio-AI',
    shortLabel: 'Bio-AI',
    microLabel: 'Bio',
    icon: Dna,
    accent: '#A855F7', // Neon Violet
    glow: 'rgba(168, 85, 247, 0.45)',
    borderGlow: 'rgba(168, 85, 247, 0.7)',
    bgActive: 'rgba(168, 85, 247, 0.22)',
  },
  astro: {
    id: 'astro',
    key: '2',
    label: 'Astrophysics',
    shortLabel: 'Astro',
    microLabel: 'Astro',
    icon: Atom,
    accent: '#22D3EE', // Electric Cyan
    glow: 'rgba(34, 211, 238, 0.45)',
    borderGlow: 'rgba(34, 211, 238, 0.7)',
    bgActive: 'rgba(34, 211, 238, 0.22)',
  },
  philosophy: {
    id: 'philosophy',
    key: '3',
    label: 'Philosophy',
    shortLabel: 'Phil',
    microLabel: 'Phil',
    icon: Feather,
    accent: '#F59E0B', // Solar Amber
    glow: 'rgba(245, 158, 11, 0.45)',
    borderGlow: 'rgba(245, 158, 11, 0.7)',
    bgActive: 'rgba(245, 158, 11, 0.22)',
  },
};

const MODES = [MODE_CONFIG.bio, MODE_CONFIG.astro, MODE_CONFIG.philosophy];

/* ══════════════════════════════════════════════════════════════════════════════
   ASTRONOMICAL FORMULA: GMST & Local Sidereal Time for Coimbatore (76.9558° E)
   ══════════════════════════════════════════════════════════════════════════════ */
function calculateLST(date, longitudeDegrees = 76.9558) {
  const jd = 2440587.5 + date.getTime() / 86400000;
  const d = jd - 2451545.0;
  const t = d / 36525.0;

  let gmstDeg =
    (280.46061837 + 360.98564736629 * d + 0.000387933 * t * t - (t * t * t) / 38710000) % 360;
  if (gmstDeg < 0) gmstDeg += 360;

  const gmstHours = gmstDeg / 15;
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
    const istMs = date.getTime() + (5.5 * 60 + date.getTimezoneOffset()) * 60000;
    const d = new Date(istMs);
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }
}

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
   ANIMATED EQUALIZER BARS (Reactive to audio state & current accent)
   ══════════════════════════════════════════════════════════════════════════════ */
function EqualizerBars({ isAudioOn, accentColor, shouldReduceMotion }) {
  const bars = [1, 2, 3, 4];

  return (
    <div className="flex items-center gap-[2.5px] h-3.5 px-0.5 flex-shrink-0" aria-hidden="true">
      {bars.map((bar, i) => {
        return (
          <span
            key={bar}
            className={`w-[2.5px] rounded-full transition-all duration-300 ${
              isAudioOn
                ? shouldReduceMotion
                  ? 'h-3 opacity-100'
                  : 'animate-pulse opacity-100'
                : 'h-[3px] opacity-40'
            }`}
            style={{
              backgroundColor: isAudioOn ? accentColor : '#94A3B8',
              height: isAudioOn && !shouldReduceMotion ? `${8 + ((i * 4) % 10)}px` : undefined,
              animationDuration: `${0.4 + i * 0.15}s`,
            }}
          />
        );
      })}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT: Cybernetic HUD Console Dock
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

  // Keyboard navigation: 1, 2, 3 switches modes
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
      initial={shouldReduceMotion ? false : { opacity: 0, y: -15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative mb-8 w-full max-w-4xl lg:max-w-5xl rounded-2xl sm:rounded-full bg-[#08080E]/80 backdrop-blur-2xl border border-white/10 font-mono transition-shadow duration-500 p-2 sm:px-4 sm:py-2.5 select-none"
      style={{
        boxShadow: `0 0 35px -8px ${currentMode.glow}, 0 10px 40px -10px rgba(0, 0, 0, 0.9), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)`,
        borderColor: `${currentMode.accent}33`,
      }}
    >
      <div className="grid grid-cols-[1fr_auto] sm:flex sm:flex-row items-center justify-between gap-3 w-full">
        
        {/* ── 1. Telemetry Block ── */}
        <div className="col-start-1 row-start-1 flex items-center gap-2.5 sm:gap-3 flex-shrink-0 whitespace-nowrap pl-1 sm:pl-2">
          {/* Radar Scanner Beacon */}
          <div className="relative flex items-center justify-center w-4 h-4 flex-shrink-0">
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-60"
              style={{ backgroundColor: currentMode.accent }}
            />
            <span
              className="absolute w-3 h-3 rounded-full border opacity-80"
              style={{ borderColor: currentMode.accent }}
            />
            <span
              className="relative w-1.5 h-1.5 rounded-full shadow-sm"
              style={{
                backgroundColor: currentMode.accent,
                boxShadow: `0 0 8px ${currentMode.accent}`,
              }}
            />
          </div>

          {/* Location & Real-Time Clock */}
          <div className="flex flex-col justify-center leading-tight whitespace-nowrap">
            <div className="text-[11px] font-bold tracking-[0.15em] text-white flex items-center gap-1.5 whitespace-nowrap">
              <span>COIMBATORE</span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="text-slate-400 font-normal hidden sm:inline text-[10px]">
                11.02° N, 76.96° E
              </span>
            </div>

            <div className="text-[10px] tracking-[0.12em] text-slate-400 tabular-nums flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-slate-300">IST {clock.ist}</span>
              <span className="text-white/20 hidden lg:inline">·</span>
              <span className="text-purple-300/80 hidden lg:inline">
                LST {clock.lst}
              </span>
            </div>
          </div>

          {/* Core Synchronized Status Chip */}
          <div className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[10px] tracking-wider font-mono text-emerald-300 whitespace-nowrap flex-shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-bold">CORE:</span>
            <span>SYNCHRONIZED</span>
          </div>

          <div className="inline-flex xl:hidden items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[9px] tracking-wider font-mono text-emerald-300 whitespace-nowrap flex-shrink-0">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            <span>SYNC</span>
          </div>
        </div>

        {/* ── 2. Mode Switcher (Sliding Pill Tablist) ── */}
        <div
          role="tablist"
          aria-label="Horizon Vision Modes"
          className="col-span-2 row-start-2 sm:col-span-1 sm:row-start-auto relative flex items-center w-full sm:w-auto p-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl"
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
                tabIndex={isActive ? 0 : -1}
                onClick={() => setHorizonMode(mode.id)}
                className={`relative z-10 flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs tracking-[0.14em] uppercase transition-colors duration-200 outline-none whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {/* Sliding indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeHudTab"
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: mode.bgActive,
                      border: `1px solid ${mode.borderGlow}`,
                      boxShadow: `0 0 20px ${mode.glow}`,
                    }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 360, damping: 28 }
                    }
                  />
                )}

                <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                  <Icon
                    size={14}
                    style={{
                      color: isActive ? mode.accent : 'currentColor',
                      filter: isActive ? `drop-shadow(0 0 8px ${mode.accent})` : 'none',
                    }}
                  />
                  <span className="hidden lg:inline">{mode.label}</span>
                  <span className="hidden sm:inline lg:hidden">{mode.shortLabel}</span>
                  <span className="inline sm:hidden">{mode.microLabel}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* ── 3. Ambient Audio Toggle ── */}
        <div className="col-start-2 row-start-1 sm:col-start-auto sm:row-start-auto flex justify-end flex-shrink-0 whitespace-nowrap pr-1 sm:pr-2">
          <button
            type="button"
            onClick={onToggleAudio}
            aria-pressed={isAudioOn}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 text-[11px] uppercase tracking-[0.14em] select-none outline-none whitespace-nowrap cursor-pointer ${
              isAudioOn
                ? 'bg-white/10 text-white shadow-lg'
                : 'bg-black/40 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
            style={{
              borderColor: isAudioOn ? currentMode.accent : undefined,
              boxShadow: isAudioOn ? `0 0 16px ${currentMode.glow}` : undefined,
            }}
          >
            <EqualizerBars
              isAudioOn={isAudioOn}
              accentColor={currentMode.accent}
              shouldReduceMotion={shouldReduceMotion}
            />
            <span className="hidden sm:inline whitespace-nowrap font-semibold">
              AUDIO · {isAudioOn ? 'ON' : 'OFF'}
            </span>
            <span className="inline sm:hidden whitespace-nowrap font-semibold">
              {isAudioOn ? 'ON' : 'OFF'}
            </span>
          </button>
        </div>

      </div>
    </motion.div>
  );
}
