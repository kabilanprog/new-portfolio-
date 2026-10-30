import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, ExternalLink, Terminal as TermIcon } from 'lucide-react';
import { 
  GithubIcon, LinkedinIcon, YoutubeIcon as YtIcon, 
  LeetcodeIcon, TwitterXIcon 
} from '../common/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      // Formatted Date: August 29, 2026
      setDateStr(
        now.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
      );

      // Formatted Time: 10:17 AM IST
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }) + ' IST'
      );
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07080b] text-[#F0EDE8] overflow-hidden select-none border-t border-white/5">
      
      {/* ══════════════════════════════════════════════════════════════════════════
          TOP EMERALD GREEN SLANTED BANNER STRIP (Exact Reference Match)
         ══════════════════════════════════════════════════════════════════════════ */}
      <div className="w-full footer-green-banner footer-green-stripes py-6 px-6 sm:px-12 md:px-20 border-b border-emerald-400/30 shadow-lg relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Left: Avatar Monogram & Brand Title */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-emerald-200/60 bg-emerald-950/40 flex items-center justify-center shadow-md">
              <span className="font-serif italic font-bold text-xl text-emerald-100">K</span>
            </div>
            <div>
              <h3 className="font-serif tracking-wider font-bold text-lg sm:text-xl text-white uppercase">
                {PERSONAL_INFO.name}
              </h3>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-emerald-100/80">
                AI · DEEP LEARNING · FULL STACK
              </p>
            </div>
          </div>

          {/* Right: Date, Location & Live IST Clock */}
          <div className="flex flex-col md:items-end text-left md:text-right font-mono text-xs text-emerald-100 space-y-0.5">
            <div className="font-medium tracking-wide">
              {dateStr || 'August 29, 2026'}
            </div>
            <div className="text-[11px] text-emerald-200/90">
              @ Tamil Nadu, India
            </div>
            <div className="text-[11px] font-bold text-white flex items-center gap-1.5 justify-start md:justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
              <span>{timeStr || '10:17 AM IST'}</span>
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════════
          MAIN FOOTER LETTER & 3-COLUMN DIRECTORY
         ══════════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 pt-16 pb-14 relative z-10 space-y-12">
        
        {/* Letter Salutation & Prose */}
        <div className="space-y-4 max-w-4xl">
          <h4 className="font-serif italic text-2xl sm:text-3xl text-white font-normal">
            Dear Visitor,
          </h4>
          <p className="font-sans text-xs sm:text-sm text-slate-300 leading-[1.8] font-light">
            I'm building at the intersection of AI, deep learning, and scalable web systems — engineering a future where intelligent software solves real-world challenges. If any of this resonates, I'd love to hear from you.
          </p>
        </div>

        {/* Central Pulsing Emerald Indicator Orb */}
        <div className="flex items-center justify-center py-2">
          <div className="relative flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#00FF94]/15 animate-ping absolute" />
            <div className="w-8 h-8 rounded-full border border-[#00FF94]/40 bg-[#00FF94]/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,148,0.4)]">
              <div className="w-3 h-3 rounded-full bg-[#00FF94]" />
            </div>
          </div>
        </div>

        {/* ── 3-Column Directory ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pt-4 border-t border-white/5">
          
          {/* ── Col 1: NAVIGATE ── */}
          <div className="space-y-4">
            <h5 className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-400 font-bold">
              — NAVIGATE
            </h5>
            <ul className="space-y-2 font-mono text-xs text-slate-300">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Experience', href: '#experience' },
                { label: 'Vision', href: '#vision' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#00FF94] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#00FF94]/60 group-hover:text-[#00FF94] transition-colors">•</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Email Contact Pills */}
            <div className="pt-2 space-y-1.5">
              <a
                href={PERSONAL_INFO.socials.officialEmail}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FF94]/5 hover:bg-[#00FF94]/15 border border-[#00FF94]/30 hover:border-[#00FF94] text-[#00FF94] font-mono text-[11px] transition-all shadow-sm group"
                title="Official Email"
              >
                <Mail className="w-3 h-3" />
                <span>{PERSONAL_INFO.email}</span>
                <ExternalLink className="w-2.5 h-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {PERSONAL_INFO.freelanceEmail && (
                <a
                  href={PERSONAL_INFO.socials.freelanceEmail}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] hover:bg-[#00BBF9]/10 border border-white/10 hover:border-[#00BBF9]/40 text-slate-300 hover:text-[#00BBF9] font-mono text-[11px] transition-all shadow-sm group block w-fit"
                  title="Freelance Email"
                >
                  <Mail className="w-3 h-3 text-[#00BBF9]" />
                  <span>{PERSONAL_INFO.freelanceEmail}</span>
                  <ExternalLink className="w-2.5 h-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>

          {/* ── Col 2: VENTURES / VISION ── */}
          <div className="space-y-4">
            <h5 className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-400 font-bold">
              — VENTURES
            </h5>
            <div className="space-y-4 font-sans text-xs">
              <a href="#vision" className="block group">
                <span className="font-bold text-white group-hover:text-[#00FF94] transition-colors block text-sm">
                  Sagittarius
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  AI Research Startup · Biotech
                </span>
              </a>

              <a href="#vision" className="block group">
                <span className="font-bold text-white group-hover:text-[#00FF94] transition-colors block text-sm">
                  Sam SciTech
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  Science YouTube · Astrophysics
                </span>
              </a>

              <a href="#vision" className="block group">
                <span className="font-bold text-white group-hover:text-[#00FF94] transition-colors block text-sm">
                  Words & Worlds
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  Writing & Essays · Philosophy
                </span>
              </a>
            </div>
          </div>

          {/* ── Col 3: NETWORK ── */}
          <div className="space-y-4">
            <h5 className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-400 font-bold">
              — NETWORK
            </h5>
            <div className="space-y-2.5 font-mono text-xs text-slate-300">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-[#00FF94] transition-colors group"
              >
                <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-[#00FF94]" />
                <span>GitHub · /kabilanprog</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-[#00FF94] transition-colors group"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-400 group-hover:text-[#00FF94]" />
                <span>LinkedIn · /in/kabilanprog</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-[#00FF94] transition-colors group"
              >
                <YtIcon className="w-4 h-4 text-slate-400 group-hover:text-[#00FF94]" />
                <span>YouTube · @GODGAMER_RA</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-[#00FF94] transition-colors group"
              >
                <TwitterXIcon className="w-4 h-4 text-slate-400 group-hover:text-[#00FF94]" />
                <span>X / Twitter · @Kabilan_prog</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-[#00FF94] transition-colors group"
              >
                <LeetcodeIcon className="w-4 h-4 text-slate-400 group-hover:text-[#00FF94]" />
                <span>LeetCode · /kabilanprog</span>
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2.5 hover:text-[#00FF94] transition-colors group text-left cursor-pointer pt-1"
                >
                  <TermIcon className="w-4 h-4 text-[#00FF94]" />
                  <span className="text-[#00FF94] underline">Interactive Resume / CV</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════════════════
            BOTTOM SIGNATURE & SCROLL TO TOP
           ══════════════════════════════════════════════════════════════════════ */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          
          {/* Signature & Copyright */}
          <div className="space-y-2">
            <p className="font-serif italic text-xs sm:text-sm text-slate-400">
              Yours sincerely,
            </p>
            {/* Signature Script in Emerald Calligraphy */}
            <div className="font-signature text-3xl sm:text-4xl text-[#00FF94] font-bold tracking-wide -mt-1 drop-shadow-[0_0_15px_rgba(0,255,148,0.35)]">
              Kabilan
            </div>
            <p className="font-mono text-[10px] text-slate-500 pt-1">
              © 2026 Kabilan · Matrix Initialized.
            </p>
          </div>

          {/* Floating Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-full border border-[#00FF94]/40 hover:border-[#00FF94] bg-[#00FF94]/5 hover:bg-[#00FF94]/20 flex items-center justify-center text-[#00FF94] transition-all shadow-[0_0_20px_rgba(0,255,148,0.2)] group cursor-pointer shrink-0"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

      </div>

    </footer>
  );
}
