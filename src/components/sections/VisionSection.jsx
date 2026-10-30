import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, ArrowLeft, X, Heart, Eye, Target, 
  Atom, Mail, ArrowUpRight, Globe, Grid, Play, 
  Layers as StackIcon, Moon
} from 'lucide-react';
import { 
  GithubIcon, YoutubeIcon, TwitterXIcon, 
  LinkedinIcon, LeetcodeIcon
} from '../common/Icons';
import VisionQuantumCanvas from '../vision/VisionQuantumCanvas';
import HudDock from '../vision/HudDock';
import CrisprBioSimulator from '../vision/CrisprBioSimulator';
import VectorMatrixPlayground from '../vision/VectorMatrixPlayground';
import PhilosophyMatrix from '../vision/PhilosophyMatrix';

/* ══════════════════════════════════════════════════════════════════════════════
   EXACT SVG CARD 1: SAGITTARIUS (The Celestial Archer / Psi Glyph)
   ══════════════════════════════════════════════════════════════════════════════ */
function CardSagittarius() {
  return (
    <svg width="252" height="358" viewBox="0 0 252 358" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sg-parch" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ddd5f5"/>
          <stop offset="50%" stopColor="#cec5e8"/>
          <stop offset="100%" stopColor="#bdb0dc"/>
        </linearGradient>
        <linearGradient id="sg-field" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#07041c"/>
          <stop offset="30%" stopColor="#0e0828"/>
          <stop offset="60%" stopColor="#130a38"/>
          <stop offset="100%" stopColor="#08041a"/>
        </linearGradient>
        <linearGradient id="sg-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5d07a"/>
          <stop offset="50%" stopColor="#c8922a"/>
          <stop offset="100%" stopColor="#f5d07a"/>
        </linearGradient>
        <radialGradient id="sg-neb-a" cx="30%" cy="38%" r="50%">
          <stop offset="0%" stopColor="#7040e0" stopOpacity=".30"/>
          <stop offset="100%" stopColor="#000" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="sg-neb-b" cx="72%" cy="65%" r="50%">
          <stop offset="0%" stopColor="#204080" stopOpacity=".30"/>
          <stop offset="100%" stopColor="#000" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="sg-neb-c" cx="50%" cy="48%" r="42%">
          <stop offset="0%" stopColor="#9030c0" stopOpacity=".14"/>
          <stop offset="100%" stopColor="#000" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="sg-halo" cx="50%" cy="41%" r="38%">
          <stop offset="0%" stopColor="rgba(210,170,255,0.18)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0)"/>
        </radialGradient>
        <filter id="sg-starglow">
          <feGaussianBlur stdDeviation="3.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="sg-psif">
          <feGaussianBlur stdDeviation="7" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <clipPath id="sg-clip"><rect x="14" y="14" width="224" height="330" rx="8"/></clipPath>
      </defs>

      <rect width="252" height="358" rx="14" fill="url(#sg-parch)"/>
      <rect x="2" y="2" width="248" height="354" rx="13" fill="none" stroke="url(#sg-gold)" strokeWidth="3"/>
      <rect x="5" y="5" width="242" height="348" rx="11" fill="none" stroke="rgba(200,146,42,.3)" strokeWidth=".8"/>
      <rect x="14" y="14" width="224" height="330" rx="8" fill="url(#sg-field)"/>
      <rect x="14" y="14" width="224" height="330" rx="8" fill="none" stroke="#20106a" strokeWidth="3"/>
      <rect x="18" y="18" width="216" height="322" rx="6" fill="none" stroke="rgba(140,100,255,.28)" strokeWidth=".8"/>

      {/* Gold Corners */}
      <g opacity=".95">
        <path d="M18,18 L44,18 L44,20 L20,20 L20,44 L18,44 Z" fill="url(#sg-gold)"/>
        <path d="M234,18 L208,18 L208,20 L232,20 L232,44 L234,44 Z" fill="url(#sg-gold)"/>
        <path d="M18,340 L44,340 L44,338 L20,338 L20,314 L18,314 Z" fill="url(#sg-gold)"/>
        <path d="M234,340 L208,340 L208,338 L232,338 L232,314 L234,314 Z" fill="url(#sg-gold)"/>
        <polygon fill="url(#sg-gold)" opacity=".85" points="24,20 25.6,22.4 28,24 25.6,25.6 24,28 22.4,25.6 20,24 22.4,22.4"/>
        <polygon fill="url(#sg-gold)" opacity=".85" points="228,20 229.6,22.4 232,24 229.6,25.6 228,28 226.4,25.6 224,24 226.4,22.4"/>
        <polygon fill="url(#sg-gold)" opacity=".85" points="24,330 25.6,332.4 28,334 25.6,335.6 24,338 22.4,335.6 20,334 22.4,332.4"/>
        <polygon fill="url(#sg-gold)" opacity=".85" points="228,330 229.6,332.4 232,334 229.6,335.6 228,338 226.4,335.6 224,334 226.4,332.4"/>
      </g>

      <g fill="none" stroke="url(#sg-gold)" strokeWidth=".7" opacity=".38">
        <line x1="50" y1="24" x2="202" y2="24"/>
        <line x1="50" y1="334" x2="202" y2="334"/>
      </g>

      <g clipPath="url(#sg-clip)">
        <ellipse cx="90" cy="130" rx="120" ry="100" fill="url(#sg-neb-a)" style={{ animation: 'vc-nebula 7s ease-in-out infinite' }}/>
        <ellipse cx="175" cy="190" rx="110" ry="90" fill="url(#sg-neb-b)" style={{ animation: 'vc-nebula 9s ease-in-out infinite 2s' }}/>
        <ellipse cx="126" cy="148" rx="80" ry="80" fill="url(#sg-neb-c)" style={{ animation: 'vc-nebula 5s ease-in-out infinite 1s' }}/>

        {/* Twinkling stars */}
        {[
          [30,42,0.8],[48,28,1],[68,38,0.7],[90,25,1.1],[112,35,0.8],[138,28,1],
          [160,38,0.7],[182,25,1.2],[205,40,0.9],[222,30,0.7],[28,65,0.6],[218,68,0.8]
        ].map(([x,y,r], i)=>(
          <circle key={i} cx={x} cy={y} r={r} fill="white" opacity="0.5" style={{ animation: `vc-twinkle ${3+i*0.4}s ease-in-out infinite ${i*0.3}s` }}/>
        ))}

        <ellipse cx="126" cy="148" rx="78" ry="78" fill="url(#sg-halo)"/>

        {/* Rotating Outer Ring */}
        <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'vc-ring-cw 22s linear infinite' }}>
          <circle cx="126" cy="148" r="90" fill="none" stroke="rgba(160,120,255,.16)" strokeWidth="1" strokeDasharray="5 7"/>
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, idx) => {
            const rad = deg * (Math.PI / 180);
            const cx = 126 + 90 * Math.sin(rad);
            const cy = 148 - 90 * Math.cos(rad);
            return <circle key={idx} cx={cx} cy={cy} r="2.2" fill="rgba(200,146,42,.5)" />;
          })}
        </g>

        {/* Counter Rotating Mid Ring */}
        <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'vc-ring-ccw 14s linear infinite' }}>
          <circle cx="126" cy="148" r="68" fill="none" stroke="rgba(200,146,42,.2)" strokeWidth=".8" strokeDasharray="3 5"/>
        </g>

        {/* Central Luminous Psi Glyph */}
        <g style={{ animation: 'vc-psi-glow 3.2s ease-in-out infinite' }}>
          <text x="126" y="190" fontFamily="'Cinzel',serif" fontWeight="700" fontSize="118" textAnchor="middle" fill="rgba(160,100,255,0.09)" filter="url(#sg-psif)">Ψ</text>
          <text x="126" y="190" fontFamily="'Cinzel',serif" fontWeight="700" fontSize="118" textAnchor="middle" fill="rgba(230,210,255,0.13)" filter="url(#sg-psif)">Ψ</text>
          <text x="126" y="190" fontFamily="'Cinzel',serif" fontWeight="700" fontSize="118" textAnchor="middle" fill="url(#sg-gold)" opacity=".95">Ψ</text>
        </g>

        {/* Constellation Network */}
        <g style={{ animation: 'vc-constell 5s ease-in-out infinite' }} opacity=".55">
          <g fill="none" stroke="rgba(160,190,255,.28)" strokeWidth=".9" strokeLinecap="round">
            <line x1="76" y1="205" x2="90" y2="188"/><line x1="90" y1="188" x2="103" y2="172"/>
            <line x1="103" y1="172" x2="116" y2="158"/><line x1="116" y1="158" x2="130" y2="168"/>
            <line x1="130" y1="168" x2="148" y2="152"/><line x1="148" y1="152" x2="162" y2="170"/>
            <line x1="162" y1="170" x2="170" y2="188"/><line x1="170" y1="188" x2="165" y2="208"/>
            <line x1="165" y1="208" x2="148" y2="218"/><line x1="148" y1="218" x2="130" y2="225"/>
          </g>
          {[[76,205,2.8],[90,188,2],[103,172,2.5],[116,158,2],[130,168,1.8],[148,152,3],[162,170,1.8],[170,188,1.8],[165,208,2.2]].map(([x,y,r], idx)=>(
            <circle key={idx} cx={x} cy={y} r={r} fill="#c8d8ff" filter="url(#sg-starglow)"/>
          ))}
        </g>

        <text x="126" y="245" fontFamily="'Cinzel',serif" fontSize="13" fill="rgba(200,146,42,.45)" textAnchor="middle" letterSpacing="8">♐</text>
      </g>

      {/* Bottom Text Banner */}
      <line x1="22" y1="270" x2="230" y2="270" stroke="#20106a" strokeWidth="2"/>
      <rect x="22" y="272" width="208" height="52" fill="#06040e"/>
      <text x="126" y="295" fontFamily="'Cinzel',serif" fontWeight="700" fontSize="16" fill="url(#sg-gold)" textAnchor="middle" letterSpacing="4">SAGITTARIUS</text>
      <text x="126" y="311" fontFamily="'Cormorant Garamond',serif" fontStyle="italic" fontSize="9.5" fill="rgba(200,146,42,.65)" textAnchor="middle" letterSpacing="1.5">The Celestial Archer</text>
      <text x="126" y="322" fontFamily="'Cinzel',serif" fontSize="7" fill="rgba(200,146,42,.38)" textAnchor="middle" letterSpacing="2.5">DE-EXTINCTION · BIOTECHNOLOGY</text>
      <circle cx="126" cy="14" r="8" fill="#06040e" stroke="url(#sg-gold)" strokeWidth="1.5"/>
      <text x="126" y="18" fontFamily="'Cinzel',serif" fontSize="8" fill="url(#sg-gold)" textAnchor="middle" fontWeight="700">✦</text>
      <circle cx="126" cy="344" r="8" fill="#06040e" stroke="url(#sg-gold)" strokeWidth="1.5"/>
      <text x="126" y="348" fontFamily="'Cinzel',serif" fontSize="8" fill="url(#sg-gold)" textAnchor="middle" fontWeight="700">✦</text>
      <text x="24" y="36" fontFamily="'Cinzel',serif" fontSize="11" fill="url(#sg-gold)" fontWeight="700">A</text>
      <text x="24" y="47" fontFamily="'Cinzel',serif" fontSize="10" fill="rgba(200,146,42,.6)" textAnchor="middle">Ψ</text>
      <text x="228" y="336" fontFamily="'Cinzel',serif" fontSize="11" fill="url(#sg-gold)" fontWeight="700" textAnchor="end" transform="rotate(180,228,331)">A</text>
      <text x="228" y="323" fontFamily="'Cinzel',serif" fontSize="10" fill="rgba(200,146,42,.6)" textAnchor="middle" transform="rotate(180,228,319)">Ψ</text>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   EXACT SVG CARD 2: SAM SCITECH (Torii Gate / Ocean Waves / Sakura Petals)
   ══════════════════════════════════════════════════════════════════════════════ */
function CardSciTech() {
  return (
    <svg width="252" height="358" viewBox="0 0 252 358" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sc-parch" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0e8f0"/><stop offset="50%" stopColor="#d0d8e8"/><stop offset="100%" stopColor="#c0ccdc"/>
        </linearGradient>
        <linearGradient id="sc-field" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0a0d18"/><stop offset="40%" stopColor="#0f1828"/><stop offset="70%" stopColor="#1a0818"/><stop offset="100%" stopColor="#0a0510"/>
        </linearGradient>
        <linearGradient id="sc-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5d07a"/><stop offset="50%" stopColor="#c8922a"/><stop offset="100%" stopColor="#f5d07a"/>
        </linearGradient>
        <linearGradient id="sc-torii" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9b2020"/><stop offset="50%" stopColor="#c0392b"/><stop offset="100%" stopColor="#9b2020"/>
        </linearGradient>
        <radialGradient id="sc-moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0ead8" stopOpacity=".95"/><stop offset="70%" stopColor="#d8d0b8" stopOpacity=".6"/><stop offset="100%" stopColor="#b8b0a0" stopOpacity="0"/>
        </radialGradient>
        <clipPath id="sc-clip"><rect x="14" y="14" width="224" height="330" rx="8"/></clipPath>
      </defs>

      <rect width="252" height="358" rx="14" fill="url(#sc-parch)"/>
      <rect x="2" y="2" width="248" height="354" rx="13" fill="none" stroke="url(#sc-gold)" strokeWidth="3"/>
      <rect x="5" y="5" width="242" height="348" rx="11" fill="none" stroke="rgba(200,146,42,.3)" strokeWidth=".8"/>
      <rect x="14" y="14" width="224" height="330" rx="8" fill="url(#sc-field)"/>
      <rect x="14" y="14" width="224" height="330" rx="8" fill="none" stroke="#1a1a3a" strokeWidth="3"/>
      <rect x="18" y="18" width="216" height="322" rx="6" fill="none" stroke="rgba(100,100,180,.3)" strokeWidth=".8"/>

      <g opacity=".95">
        <path d="M18,18 L44,18 L44,20 L20,20 L20,44 L18,44 Z" fill="url(#sc-gold)"/>
        <path d="M234,18 L208,18 L208,20 L232,20 L232,44 L234,44 Z" fill="url(#sc-gold)"/>
        <path d="M18,340 L44,340 L44,338 L20,338 L20,314 L18,314 Z" fill="url(#sc-gold)"/>
        <path d="M234,340 L208,340 L208,338 L232,338 L232,314 L234,314 Z" fill="url(#sc-gold)"/>
      </g>

      <circle cx="126" cy="110" r="55" fill="url(#sc-moon)" clipPath="url(#sc-clip)" opacity=".85"/>

      {/* Floating Torii Gate */}
      <g clipPath="url(#sc-clip)">
        <rect x="83" y="110" width="11" height="115" fill="url(#sc-torii)" rx="3"/>
        <rect x="158" y="110" width="11" height="115" fill="url(#sc-torii)" rx="3"/>
        <rect x="68" y="88" width="116" height="12" fill="url(#sc-torii)" rx="5"/>
        <rect x="75" y="104" width="102" height="8" fill="#9b2020" rx="3"/>
      </g>

      {/* Animated Waves */}
      <g clipPath="url(#sc-clip)" style={{ animation: 'vc-wave 5s ease-in-out infinite' }}>
        <path d="M22,215 Q50,200 80,215 Q110,230 140,215 Q170,200 200,215 Q220,223 230,220 L230,280 L22,280Z" fill="#1a3a6a" opacity=".9"/>
        <path d="M22,228 Q55,212 88,228 Q121,244 154,228 Q187,212 230,228 L230,280 L22,280Z" fill="#0f2550" opacity=".9"/>
      </g>

      {/* Sakura Petals */}
      <g clipPath="url(#sc-clip)">
        <line x1="205" y1="230" x2="205" y2="55" stroke="#3d1a10" strokeWidth="3.5" opacity=".9"/>
        <circle cx="224" cy="68" r="16" fill="rgba(255,170,195,.45)"/>
        <circle cx="214" cy="58" r="12" fill="rgba(255,155,185,.5)"/>
        <circle cx="186" cy="55" r="14" fill="rgba(255,170,195,.45)"/>
      </g>

      <line x1="22" y1="270" x2="230" y2="270" stroke="#1a1a3a" strokeWidth="2"/>
      <rect x="22" y="272" width="208" height="52" fill="#080810"/>
      <text x="126" y="295" fontFamily="'Cinzel',serif" fontWeight="700" fontSize="16" fill="url(#sc-gold)" textAnchor="middle" letterSpacing="3">Sam SciTech</text>
      <text x="126" y="310" fontFamily="'Noto Serif JP',serif" fontSize="9" fill="rgba(200,146,42,.55)" textAnchor="middle">科学教育</text>
      <text x="126" y="322" fontFamily="'Cinzel',serif" fontSize="7" fill="rgba(200,146,42,.45)" textAnchor="middle" letterSpacing="2.5">SCIENCE · EDUCATION</text>
      <circle cx="126" cy="14" r="8" fill="#080810" stroke="url(#sc-gold)" strokeWidth="1.5"/>
      <text x="126" y="18" fontFamily="'Cinzel',serif" fontSize="8" fill="url(#sc-gold)" textAnchor="middle" fontWeight="700">✦</text>
      <circle cx="126" cy="344" r="8" fill="#080810" stroke="url(#sc-gold)" strokeWidth="1.5"/>
      <text x="126" y="348" fontFamily="'Cinzel',serif" fontSize="8" fill="url(#sc-gold)" textAnchor="middle" fontWeight="700">✦</text>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   EXACT SVG CARD 3: WORDS & WORLDS (Luminous Lantern / Multilingual Mandalas)
   ══════════════════════════════════════════════════════════════════════════════ */
function CardWordsWorlds() {
  return (
    <svg width="252" height="358" viewBox="0 0 252 358" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ww-parch" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8e0d0"/><stop offset="50%" stopColor="#ddd4c0"/><stop offset="100%" stopColor="#d0c8b0"/>
        </linearGradient>
        <linearGradient id="ww-field" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d0820"/><stop offset="35%" stopColor="#180a30"/><stop offset="65%" stopColor="#1a0510"/><stop offset="100%" stopColor="#0a1020"/>
        </linearGradient>
        <linearGradient id="ww-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5d07a"/><stop offset="50%" stopColor="#c8922a"/><stop offset="100%" stopColor="#f5d07a"/>
        </linearGradient>
        <radialGradient id="ww-lamp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffcc50" stopOpacity=".9"/><stop offset="50%" stopColor="#ff8820" stopOpacity=".5"/><stop offset="100%" stopColor="#ff4400" stopOpacity="0"/>
        </radialGradient>
        <clipPath id="ww-clip"><rect x="14" y="14" width="224" height="330" rx="8"/></clipPath>
      </defs>

      <rect width="252" height="358" rx="14" fill="url(#ww-parch)"/>
      <rect x="2" y="2" width="248" height="354" rx="13" fill="none" stroke="url(#ww-gold)" strokeWidth="3"/>
      <rect x="5" y="5" width="242" height="348" rx="11" fill="none" stroke="rgba(200,146,42,.3)" strokeWidth=".8"/>
      <rect x="14" y="14" width="224" height="330" rx="8" fill="url(#ww-field)"/>
      <rect x="14" y="14" width="224" height="330" rx="8" fill="none" stroke="#2a1040" strokeWidth="3"/>
      <rect x="18" y="18" width="216" height="322" rx="6" fill="none" stroke="rgba(140,80,200,.25)" strokeWidth=".8"/>

      <g opacity=".95">
        <path d="M18,18 L44,18 L44,20 L20,20 L20,44 L18,44 Z" fill="url(#ww-gold)"/>
        <path d="M234,18 L208,18 L208,20 L232,20 L232,44 L234,44 Z" fill="url(#ww-gold)"/>
        <path d="M18,340 L44,340 L44,338 L20,338 L20,314 L18,314 Z" fill="url(#ww-gold)"/>
        <path d="M234,340 L208,340 L208,338 L232,338 L232,314 L234,314 Z" fill="url(#ww-gold)"/>
      </g>

      <g clipPath="url(#ww-clip)">
        <circle cx="126" cy="150" r="50" fill="url(#ww-lamp)" opacity=".6" style={{ animation: 'vc-lamp 3s ease-in-out infinite' }}/>
        <path d="M118,115 L108,155 Q108,170 126,172 Q144,170 144,155 L134,115 Z" fill="#4a3010" stroke="url(#ww-gold)" strokeWidth="1.2"/>
        <path d="M126,114 Q122,105 126,98 Q130,105 126,114Z" fill="#ffcc40" opacity=".9"/>
        <circle cx="126" cy="78" r="4" fill="url(#ww-gold)" opacity=".8"/>
      </g>

      <g clipPath="url(#ww-clip)" style={{ animation: 'vc-ink 5s ease-in-out infinite' }}>
        <circle cx="126" cy="150" r="72" fill="none" stroke="rgba(200,146,42,.2)" strokeWidth=".8" strokeDasharray="4,5"/>
        <text x="55" y="225" fontFamily="'Cormorant Garamond',serif" fontStyle="italic" fontSize="9" fill="rgba(200,146,42,.4)">شعر</text>
        <text x="178" y="215" fontFamily="'Cormorant Garamond',serif" fontStyle="italic" fontSize="8" fill="rgba(200,146,42,.35)">ποίηση</text>
        <text x="42" y="175" fontFamily="'Cormorant Garamond',serif" fontStyle="italic" fontSize="8" fill="rgba(200,146,42,.3)">كلمات</text>
        <text x="185" y="185" fontFamily="'Cormorant Garamond',serif" fontStyle="italic" fontSize="8" fill="rgba(200,146,42,.3)">வார்த்தை</text>
      </g>

      <line x1="22" y1="270" x2="230" y2="270" stroke="#2a1040" strokeWidth="2"/>
      <rect x="22" y="272" width="208" height="52" fill="#080510"/>
      <text x="126" y="293" fontFamily="'Cormorant Garamond',serif" fontStyle="italic" fontWeight="600" fontSize="17" fill="url(#ww-gold)" textAnchor="middle" letterSpacing="1">Words &amp; Worlds</text>
      <text x="126" y="310" fontFamily="'Cormorant Garamond',serif" fontStyle="italic" fontSize="9.5" fill="rgba(200,146,42,.6)" textAnchor="middle" letterSpacing="1">Poetry · Philosophy · Language</text>
      <text x="126" y="322" fontFamily="'Cinzel',serif" fontSize="7" fill="rgba(200,146,42,.4)" textAnchor="middle" letterSpacing="2.5">MULTILINGUAL LITERARY ARTS</text>
      <circle cx="126" cy="14" r="8" fill="#080510" stroke="url(#ww-gold)" strokeWidth="1.5"/>
      <text x="126" y="18" fontFamily="'Cinzel',serif" fontSize="8" fill="url(#ww-gold)" textAnchor="middle" fontWeight="700">✦</text>
      <circle cx="126" cy="344" r="8" fill="#080510" stroke="url(#ww-gold)" strokeWidth="1.5"/>
      <text x="126" y="348" fontFamily="'Cinzel',serif" fontSize="8" fill="url(#ww-gold)" textAnchor="middle" fontWeight="700">✦</text>
    </svg>
  );
}

const ARCANA_CARDS = [
  {
    id: "sagittarius",
    Component: CardSagittarius,
    cardClass: "vc-card-sag",
    title: "SAGITTARIUS",
  },
  {
    id: "scitech",
    Component: CardSciTech,
    cardClass: "vc-card-sci",
    title: "Sam SciTech",
  },
  {
    id: "words-worlds",
    Component: CardWordsWorlds,
    cardClass: "vc-card-ww",
    title: "Words & Worlds",
  },
];

/* ══════════════════════════════════════════════════════════════════════════════
   CARD 1 & 2 DATA
   ══════════════════════════════════════════════════════════════════════════════ */
const MISSION_PILLARS = [
  {
    number: "01",
    icon: Target,
    title: "Gene Editing & Disease Prevention",
    desc: "Identify the specific gene sequences that cause inherited diseases through generational transmission. Our AI models analyze genomic data to pinpoint mutations, enabling targeted gene editing interventions that can stop hereditary diseases before they manifest.",
    tags: ["CRISPR", "Genomics", "Hereditary Diseases"],
  },
  {
    number: "02",
    icon: Heart,
    title: "Regenerative Medicine Research",
    desc: "Pioneering AI-driven research in tissue regeneration and cellular reprogramming. Our algorithms model complex biological processes to accelerate discoveries in stem cell therapy, organ regeneration, and age-related disease reversal.",
    tags: ["Stem Cells", "Tissue Engineering", "Longevity"],
  },
  {
    number: "03",
    icon: Eye,
    title: "Marine Species eDNA Analysis",
    desc: "Environmental DNA (eDNA) analysis of marine ecosystems using machine learning. Track biodiversity, detect invasive species, and monitor ocean health through water sample analysis — preserving our planet's most mysterious frontier.",
    tags: ["eDNA", "Marine Biology", "Conservation"],
  },
  {
    number: "04",
    icon: Atom,
    title: "Quantum Wave Mechanics & Cancer",
    desc: "Exploring the intersection of quantum physics and oncology. Using AI to model quantum wave mechanics at the molecular level, we're investigating novel approaches to cancer treatment that operate at the fundamental physics of cellular behavior.",
    tags: ["Quantum Biology", "Oncology", "Molecular Modeling"],
  },
];

const TECH_STACK_COLUMNS = [
  {
    category: "Machine Learning",
    items: ["PyTorch / TensorFlow", "Transformers (BioBERT, ESM)", "Graph Neural Networks", "Reinforcement Learning"],
  },
  {
    category: "Bioinformatics",
    items: ["Biopython", "BLAST / HMMER", "AlphaFold Integration", "Genome Analysis Tools"],
  },
  {
    category: "Data Infrastructure",
    items: ["Apache Spark", "PostgreSQL / MongoDB", "AWS / GCP Cloud", "Docker / Kubernetes"],
  },
  {
    category: "Visualization",
    items: ["PyMOL / ChimeraX", "D3.js / Plotly", "Three.js (3D Models)", "Jupyter Notebooks"],
  },
];

const SCITECH_TOPICS = [
  {
    title: "Astrophysics & Cosmology",
    icon: Globe,
    desc: "From black holes to the expanding universe, exploring the grandest structures and phenomena in existence.",
  },
  {
    title: "Quantum Mechanics",
    icon: Atom,
    desc: "Diving into the bizarre world of the very small, where particles exist in superposition and reality defies intuition.",
  },
  {
    title: "Mathematics for ML",
    icon: Grid,
    hasGlowBorder: true,
    desc: "Linear algebra, calculus, probability, and statistics — the essential mathematics powering artificial intelligence.",
  },
  {
    title: "Classical Physics",
    icon: StackIcon,
    desc: "Newtonian mechanics, electromagnetism, and thermodynamics — the foundations upon which modern physics is built.",
  },
];

const FEATURED_VIDEOS = [
  {
    title: "The Big Bang Theory",
    desc: "Journey to the beginning of time itself. Exploring the cosmic origin story — from the initial singularity to the formation of the first atoms.",
    tags: ["COSMOLOGY", "PHYSICS", "ORIGIN"],
    badge: "தமிழ் - fully explained",
    isTamil: true,
    visualType: "big_bang",
    url: "https://www.youtube.com/@GODGAMER_RA",
  },
  {
    title: "Linear Algebra Fundamentals",
    desc: "The mathematical foundation that powers machine learning. Understanding vectors, matrices, and transformations that shape modern AI.",
    tags: ["MATHEMATICS", "ML FOUNDATIONS", "LINEAR ALGEBRA"],
    badge: "Module - 1 · What is a Vector?",
    isTamil: false,
    visualType: "linear_algebra",
    url: "https://www.youtube.com/@GODGAMER_RA",
  },
];

const SOCIAL_PLATFORMS = [
  {
    name: "YouTube",
    handle: "@GODGAMER_RA",
    icon: YoutubeIcon,
    url: "https://www.youtube.com/@GODGAMER_RA",
    glow: "hover:border-red-500/40 group-hover:text-red-400 group-hover:bg-red-500/10",
  },
  {
    name: "LinkedIn",
    handle: "in/kabilanprog",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/kabilanprog",
    glow: "hover:border-blue-500/40 group-hover:text-blue-400 group-hover:bg-blue-500/10",
  },
  {
    name: "X / Twitter",
    handle: "@Kabilan_prog",
    icon: TwitterXIcon,
    url: "https://x.com/Kabilan_prog",
    glow: "hover:border-sky-500/40 group-hover:text-sky-400 group-hover:bg-sky-500/10",
  },
  {
    name: "GitHub",
    handle: "kabilanprog",
    icon: GithubIcon,
    url: "https://github.com/kabilanprog",
    glow: "hover:border-emerald-500/40 group-hover:text-emerald-400 group-hover:bg-emerald-500/10",
  },
  {
    name: "LeetCode",
    handle: "/kabilanprog",
    icon: LeetcodeIcon,
    url: "https://leetcode.com/u/kabilanprog/",
    glow: "hover:border-amber-500/40 group-hover:text-amber-400 group-hover:bg-amber-500/10",
  },
];

/* ══════════════════════════════════════════════════════════════════════════════
   CARD 3: WORDS & WORLDS / WRITING DATA (Matching exact screenshots)
   ══════════════════════════════════════════════════════════════════════════════ */
const ARCHETYPES_DATA = [
  {
    id: "01",
    eyebrow: "01 · THE MIND",
    eyebrowColor: "#38BDF8",
    title: "The Philosopher",
    image: "/vision/philosopher.jpg",
    quoteHtml: "Meaning is not discovered — it is <span style='color:#38BDF8'>created.</span>",
    body: "The universe is fundamentally indifferent, neither kind nor cruel. We are meaning-making machines in a meaning-absent cosmos, and therein lies our tragedy and our power.",
  },
  {
    id: "02",
    eyebrow: "02 · THE HEART",
    eyebrowColor: "#FBBF24",
    title: "The Poet",
    image: "/vision/poet.jpg",
    quoteHtml: "We are stardust learning to contemplate <span style='color:#FBBF24'>stars.</span>",
    body: "Atoms arranged in patterns that ask why they're arranged. The universe looking at itself through human eyes, wondering if what it sees is beautiful or broken.",
  },
  {
    id: "03",
    eyebrow: "03 · THE WILL",
    eyebrowColor: "#00FF94",
    title: "The Stoic",
    isStagSvg: true,
    quoteHtml: "Control what you can. Accept what you <span style='color:#00FF94'>cannot.</span>",
    body: "The distinction between the two is the beginning of wisdom. Emotions are data, not directives. They inform but should not command. The Stoics understood this: feel everything, attach to nothing, endure.",
  },
];

export default function VisionSection() {
  const [activePortal, setActivePortal] = useState(null); // 'sagittarius' | 'scitech' | 'words-worlds'
  const [horizonMode, setHorizonMode] = useState('bio'); // 'bio' | 'astro' | 'philosophy'
  const [isAudioOn, setIsAudioOn] = useState(false);
  const audioCtxRef = useRef(null);
  const oscNodesRef = useRef([]);

  // Audio Synthesizer Toggle
  const toggleAmbientAudio = () => {
    if (isAudioOn) {
      // Stop audio
      oscNodesRef.current.forEach((n) => {
        try { n.stop(); n.disconnect(); } catch (e) {}
      });
      oscNodesRef.current = [];
      setIsAudioOn(false);
    } else {
      // Start ethereal space drone
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        const freqs = [108, 162, 216, 324]; // Harmonic sacred tuning
        const nodes = [];

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(350, ctx.currentTime);

          gain.gain.setValueAtTime(0.015, ctx.currentTime);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          osc.start();
          nodes.push(osc);
        });

        oscNodesRef.current = nodes;
        setIsAudioOn(true);
      } catch {
        // Audio Context blocked or unsupported
      }
    }
  };

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      oscNodesRef.current.forEach((n) => {
        try { n.stop(); n.disconnect(); } catch (e) {}
      });
    };
  }, []);

  // Press ESC to close portal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActivePortal(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="vision"
      className="relative min-h-screen bg-[#080808] py-24 px-4 sm:px-8 overflow-hidden flex flex-col items-center justify-center select-none"
    >
      {/* Dynamic 3D Quantum Interactive Canvas Background */}
      <VisionQuantumCanvas mode={horizonMode} />

      {/* Background Ambient Radial Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] rounded-full blur-[140px] bg-[radial-gradient(circle,rgba(200,146,42,0.06)_0%,transparent_70%)]" />
        <div className="absolute right-1/4 bottom-1/4 w-[600px] h-[600px] rounded-full blur-[140px] bg-[radial-gradient(circle,rgba(160,100,255,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* ── Top Futuristic Celestial Astrolabe HUD Dock ── */}
        <HudDock
          horizonMode={horizonMode}
          setHorizonMode={setHorizonMode}
          isAudioOn={isAudioOn}
          onToggleAudio={toggleAmbientAudio}
        />

        {/* ── Eyebrow Tag: "✦   Portfolio Arcana   ✦" ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif italic text-center uppercase tracking-[0.55em] text-[12px] mb-3"
          style={{ color: 'rgba(200,146,42,0.6)' }}
        >
          ✦ &nbsp; Portfolio Arcana &nbsp; ✦
        </motion.p>

        {/* ── Main Heading: "My Vision" ── */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-serif text-white tracking-[-0.02em] mb-14"
          style={{
            fontSize: 'clamp(2.8rem, 6.5vw, 4.5rem)',
            fontFamily: "'DM Serif Display', 'Cormorant Garamond', serif",
          }}
        >
          My Vision
        </motion.h2>

        {/* ── 3-Card Portfolio Arcana Grid ── */}
        <div className="vision-portal-cards flex flex-nowrap gap-8 sm:gap-10 sm:flex-wrap items-center justify-start sm:justify-center mb-12 w-full px-4 sm:px-0">
          {ARCANA_CARDS.map(({ id, Component, cardClass }, idx) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                onClick={() => setActivePortal(id)}
                className={`vc-card ${cardClass} relative cursor-pointer group`}
                style={{
                  width: 'clamp(200px, 40vw, 252px)',
                  height: 'clamp(280px, 56vw, 358px)',
                  flexShrink: 0,
                }}
              >
                <Component />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Prompt: "✦   Click a card to enter   ✦" ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-serif italic text-center text-[11px] tracking-[0.45em]"
          style={{ color: 'rgba(255,255,255,0.22)' }}
        >
          ✦ &nbsp; Click a card to enter &nbsp; ✦
        </motion.p>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════════
          CARD 1: SAGITTARIUS FULL RESEARCH PORTAL
         ══════════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {activePortal === 'sagittarius' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-[#050508] text-[#F0EDE8] overflow-y-auto overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-300"
          >
            <header className="sticky top-0 z-40 bg-[#050508]/90 backdrop-blur-xl border-b border-white/5 px-6 sm:px-12 py-5">
              <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="font-display font-extrabold text-xl text-white tracking-widest">
                  KABILAN <span className="text-purple-400 font-normal text-xs font-mono tracking-normal ml-2">/ SAGITTARIUS</span>
                </div>
                <button
                  onClick={() => setActivePortal(null)}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all font-mono text-xs tracking-wider uppercase"
                >
                  <ArrowLeft size={14} />
                  <span>Back</span>
                </button>
              </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-24 space-y-28 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-3xl mx-auto text-center py-10 sm:py-16 px-6 sm:px-12 relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />
                <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-slate-200 leading-[1.6] font-normal mb-8">
                  "The code of life is the most elegant program ever written. Our mission is to learn its syntax, understand its logic, and when necessary — debug its errors."
                </h2>
                <p className="font-mono text-xs tracking-[0.25em] uppercase text-purple-400 font-semibold">
                  — Kabilan, Founder & AI Engineer
                </p>
              </motion.div>

              <div className="space-y-12">
                <div className="text-center">
                  <h3 className="font-serif italic text-white tracking-tight mb-2" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)' }}>
                    Mission Pillars
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {MISSION_PILLARS.slice(0, 3).map((pillar, pIdx) => {
                    const Icon = pillar.icon;
                    return (
                      <motion.div
                        key={pillar.number}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: pIdx * 0.1 }}
                        className="rounded-2xl bg-[#090a12]/90 border border-purple-500/15 p-7 flex flex-col justify-between space-y-6 shadow-2xl hover:border-purple-500/40 transition-colors"
                      >
                        <div className="space-y-4">
                          <span className="font-mono text-[11px] text-purple-400 font-bold block">{pillar.number}</span>
                          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                            <Icon size={20} />
                          </div>
                          <h4 className="font-display font-bold text-lg text-white leading-snug">{pillar.title}</h4>
                          <p className="font-body text-xs sm:text-[13px] leading-[1.75] text-slate-300 font-normal">{pillar.desc}</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {pillar.tags.map((tg, tIdx) => (
                            <span key={tIdx} className="px-2.5 py-1 rounded-md font-mono text-[9px] uppercase tracking-wider bg-purple-950/40 text-purple-300 border border-purple-500/20">
                              {tg}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="max-w-md rounded-2xl bg-[#090a12]/90 border border-purple-500/15 p-7 flex flex-col justify-between space-y-6 shadow-2xl hover:border-purple-500/40 transition-colors"
                >
                  <div className="space-y-4">
                    <span className="font-mono text-[11px] text-purple-400 font-bold block">{MISSION_PILLARS[3].number}</span>
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Atom size={20} />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white leading-snug">{MISSION_PILLARS[3].title}</h4>
                    <p className="font-body text-xs sm:text-[13px] leading-[1.75] text-slate-300 font-normal">{MISSION_PILLARS[3].desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {MISSION_PILLARS[3].tags.map((tg, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-md font-mono text-[9px] uppercase tracking-wider bg-purple-950/40 text-purple-300 border border-purple-500/20">
                        {tg}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* ── Interactive CRISPR Neural Genomics Simulator ── */}
              <div className="space-y-6 pt-4">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="h-px w-6 bg-purple-500/50" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-purple-400 font-bold">
                      Interactive Research Tool
                    </span>
                    <span className="h-px w-6 bg-purple-500/50" />
                  </div>
                  <h3 className="font-serif italic text-white tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                    Test Gene Splicing & Mutation Dynamics
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
                    Simulate deep learning model predictions across cardiovascular targets and marine eDNA sequences in real-time.
                  </p>
                </div>
                <CrisprBioSimulator />
              </div>

              <div className="space-y-10 pt-8">
                <div className="text-center space-y-2">
                  <h3 className="font-serif italic text-white tracking-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)' }}>
                    Technology Stack
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-400">The tools and frameworks powering our research</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
                  {TECH_STACK_COLUMNS.map((col, cIdx) => (
                    <motion.div key={col.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: cIdx * 0.08 }} className="space-y-4">
                      <h4 className="font-display font-bold text-sm text-white border-b border-white/10 pb-3">{col.category}</h4>
                      <ul className="space-y-2.5 font-body text-xs text-slate-300">
                        {col.items.map((item, iIdx) => (
                          <li key={iIdx} className="text-slate-400 hover:text-white transition-colors">{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-10 pt-8">
                <div className="text-center space-y-2">
                  <h3 className="font-serif italic text-white tracking-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)' }}>Get Involved</h3>
                  <p className="font-body text-xs sm:text-sm text-slate-400">Interested in our mission? Let's connect.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <a href="https://github.com/kabilanprog" target="_blank" rel="noreferrer" className="p-6 rounded-2xl bg-[#090a12]/90 border border-white/10 hover:border-purple-500/40 transition-all flex items-center gap-4 group">
                    <div className="p-3 rounded-xl bg-white/5 text-white/80 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition-colors">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 block font-semibold">GITHUB ORGANIZATION</span>
                      <span className="font-sans font-bold text-sm text-white group-hover:text-purple-300 transition-colors">github.com/kabilanprog</span>
                    </div>
                  </a>
                  <a href="mailto:kabilan.officialid@gmail.com" className="p-6 rounded-2xl bg-[#090a12]/90 border border-white/10 hover:border-purple-500/40 transition-all flex items-center gap-4 group">
                    <div className="p-3 rounded-xl bg-white/5 text-white/80 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition-colors">
                      <Mail size={22} />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 block font-semibold">CONTACT</span>
                      <span className="font-sans font-bold text-sm text-white group-hover:text-purple-300 transition-colors">kabilan.officialid@gmail.com</span>
                    </div>
                  </a>
                </div>
                <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-[#090a12]/80 border border-purple-500/20 text-center space-y-3">
                  <div className="flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    CURRENTLY IN RESEARCH PHASE
                  </div>
                  <p className="font-body text-xs sm:text-[13px] leading-relaxed text-slate-300 max-w-lg mx-auto">
                    Sagittarius is currently in the research and development phase. We're building foundational AI models and establishing partnerships with research institutions. Stay tuned for updates.
                  </p>
                </div>
              </div>

              <div className="pt-12 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/40">
                <button onClick={() => setActivePortal(null)} className="inline-flex items-center gap-2 hover:text-purple-400 transition-colors">
                  <ArrowLeft size={14} />
                  <span>Back to Vision Arcana</span>
                </button>
                <span>© 2026 Kabilan · Sagittarius</span>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════════════════════════
          CARD 2: SAM SCITECH FULL YOUTUBE & SCIENCE PORTAL
         ══════════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {activePortal === 'scitech' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-[#05060b] text-[#F0EDE8] overflow-y-auto overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-300"
          >
            <header className="sticky top-0 z-40 bg-[#05060b]/90 backdrop-blur-xl border-b border-white/5 px-6 sm:px-12 py-5">
              <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-cyan-400/40 bg-cyan-950/30 flex items-center justify-center">
                    <span className="font-serif italic font-bold text-lg text-cyan-300">K</span>
                  </div>
                  <div>
                    <span className="font-serif tracking-wider font-bold text-sm text-white uppercase block">KABILAN</span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 block">/ SAM SCITECH</span>
                  </div>
                </div>
                <button
                  onClick={() => setActivePortal(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 font-mono text-xs transition-all cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Back</span>
                </button>
              </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 sm:px-10 py-12 sm:py-20 space-y-28 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-3xl overflow-hidden aspect-[16/8] sm:aspect-[16/7] border border-cyan-500/30 shadow-[0_0_80px_rgba(6,182,212,0.18)] flex items-center justify-center"
                style={{
                  background: 'radial-gradient(ellipse at center, #082f49 0%, #0c1a30 40%, #030712 100%)',
                }}
              >
                <div className="absolute inset-0 pointer-events-none opacity-60">
                  <svg viewBox="0 0 900 500" className="w-full h-full">
                    <circle cx="450" cy="250" r="180" stroke="rgba(56,189,248,0.25)" strokeWidth="1" strokeDasharray="6 6" />
                    <circle cx="450" cy="250" r="280" stroke="rgba(147,51,234,0.18)" strokeWidth="1" strokeDasharray="4 10" />
                    <ellipse cx="450" cy="250" rx="360" ry="200" stroke="rgba(56,189,248,0.15)" strokeWidth="1" transform="rotate(-20, 450, 250)" />
                    <line x1="100" y1="50" x2="850" y2="420" stroke="rgba(56,189,248,0.12)" strokeWidth="0.8" />
                    <line x1="250" y1="450" x2="700" y2="60" stroke="rgba(147,51,234,0.12)" strokeWidth="0.8" />
                  </svg>
                  <div className="absolute right-12 bottom-6 w-48 h-36 opacity-75">
                    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0,150 Q60,110 200,120 L200,150 Z" fill="#080c14" stroke="rgba(56,189,248,0.2)" strokeWidth="1" />
                      <path d="M80,115 A40,40 0 0,1 160,115 Z" fill="#0f1926" stroke="#38BDF8" strokeWidth="1.5" />
                      <line x1="90" y1="95" x2="55" y2="60" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="55" cy="60" r="4" fill="#38BDF8" />
                    </svg>
                  </div>
                </div>
                <a
                  href="https://youtube.com/@SamSciTech"
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-10 inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-black/60 border border-white/20 hover:border-cyan-400/60 shadow-2xl backdrop-blur-xl text-white hover:text-cyan-300 font-sans font-semibold text-sm transition-all group hover:scale-105"
                >
                  <YoutubeIcon className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                  <span>Visit Channel</span>
                  <ArrowUpRight size={16} className="text-white/60 group-hover:text-cyan-300 transition-colors" />
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8 text-center max-w-4xl mx-auto">
                <h3 className="font-serif italic text-cyan-300 tracking-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}>
                  The Pursuit of Understanding
                </h3>
                <div className="space-y-6 font-body text-sm sm:text-[15.5px] leading-[1.9] text-slate-300 font-light text-left sm:text-justify max-w-3xl mx-auto">
                  <p>
                    From the infinitesimal dance of subatomic particles to the majestic spiral of galaxies billions of light-years away, the universe speaks in the language of mathematics. <span className="text-cyan-400 font-medium">Sam SciTech</span> is my endeavour to decode that language and share it with the world.
                  </p>
                  <p>
                    Physics isn’t just equations on a blackboard — it’s the poetry of reality. Mathematics isn’t mere abstraction — it’s the architecture of the cosmos. And when these disciplines converge with the power of machine learning, we unlock unprecedented capabilities to understand, predict, and shape our world.
                  </p>
                  <p>
                    Through this channel, I break down complex scientific concepts into digestible content, from the mysteries of quantum mechanics to the linear algebra that powers neural networks. Whether you’re a student, a curious mind, or a professional seeking deeper understanding, there’s something here for you.
                  </p>
                </div>
              </motion.div>

              <div className="space-y-12">
                <div className="text-center">
                  <h3 className="font-serif italic text-cyan-300 tracking-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}>
                    What I Cover
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {SCITECH_TOPICS.map((topic, tIdx) => {
                    const Icon = topic.icon;
                    return (
                      <motion.div
                        key={topic.title}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: tIdx * 0.1 }}
                        className={`rounded-2xl bg-[#090c14]/90 border p-7 flex flex-col space-y-5 shadow-2xl transition-all relative overflow-hidden group ${
                          topic.hasGlowBorder
                            ? 'border-cyan-500/40 shadow-[0_0_30px_rgba(56,189,248,0.15)]'
                            : 'border-white/10 hover:border-cyan-500/30'
                        }`}
                      >
                        {topic.hasGlowBorder && (
                          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500" />
                        )}
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                          <Icon size={22} />
                        </div>
                        <h4 className="font-display font-bold text-base sm:text-lg text-white leading-snug">{topic.title}</h4>
                        <p className="font-body text-xs sm:text-[13px] leading-[1.75] text-slate-300 font-normal">{topic.desc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* ── Interactive Vector Space & Linear Algebra Playground ── */}
              <div className="space-y-6 pt-4">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="h-px w-6 bg-cyan-500/50" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold">
                      Interactive Math Laboratory
                    </span>
                    <span className="h-px w-6 bg-cyan-500/50" />
                  </div>
                  <h3 className="font-serif italic text-cyan-300 tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                    Vector Transformations & Cosine Similarity
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
                    Manipulate 2D coordinate vectors in real-time to compute dot products, spatial angles, and neural embedding similarities.
                  </p>
                </div>
                <VectorMatrixPlayground />
              </div>

              <div className="space-y-12 pt-6">
                <div className="text-center space-y-2">
                  <h3 className="font-serif italic text-cyan-300 tracking-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}>
                    Featured Videos
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-400">Explore the cosmos and the mathematics that governs it</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {FEATURED_VIDEOS.map((vid, vIdx) => (
                    <motion.a
                      key={vid.title}
                      href={vid.url}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: vIdx * 0.15 }}
                      className="rounded-3xl bg-[#090c14]/90 border border-white/10 hover:border-cyan-500/40 p-5 space-y-6 shadow-2xl transition-all group flex flex-col justify-between"
                    >
                      <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#050810] border border-white/10 flex items-center justify-center">
                        {vid.visualType === 'big_bang' ? (
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 relative bg-[radial-gradient(circle_at_center,#1e1b4b_0%,#090a14_70%)]">
                            <span className="font-serif italic text-white text-lg sm:text-xl font-medium tracking-wide">The Beginning of Everything</span>
                            <div className="my-2 p-3 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
                              <Sparkles size={24} />
                            </div>
                            <span className="font-display font-extrabold text-white text-xl sm:text-2xl tracking-wider">BIG BANG</span>
                            <span className="font-sans text-xs text-amber-400 font-medium mt-1">{vid.badge}</span>
                          </div>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 relative bg-[#070b14]">
                            <span className="font-serif italic text-white text-lg sm:text-xl font-medium tracking-wide">Linear Algebra</span>
                            <span className="font-mono text-[10px] text-slate-400 mt-0.5">Part 1: Vectors, Intuition, and Operations</span>
                            <div className="my-3 w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                              <Play size={20} className="fill-white translate-x-0.5" />
                            </div>
                            <span className="font-display font-bold text-white text-sm sm:text-base">{vid.badge}</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none" />
                      </div>
                      <div className="space-y-4 px-2">
                        <h4 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">{vid.title}</h4>
                        <p className="font-body text-xs sm:text-[13px] leading-[1.7] text-slate-300">{vid.desc}</p>
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {vid.tags.map((tg, tIdx) => (
                            <span key={tIdx} className="px-2.5 py-1 rounded-md font-mono text-[9px] uppercase tracking-wider bg-cyan-950/40 text-cyan-300 border border-cyan-500/20">
                              {tg}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="space-y-10 pt-8">
                <div className="text-center space-y-2">
                  <h3 className="font-serif italic text-cyan-300 tracking-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}>Join the Journey</h3>
                  <p className="font-body text-xs sm:text-sm text-slate-400">Connect across platforms and be part of the scientific exploration</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {SOCIAL_PLATFORMS.map((platform, sIdx) => {
                    const Icon = platform.icon;
                    return (
                      <motion.a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: sIdx * 0.06 }}
                        className={`p-6 rounded-2xl bg-[#090c14]/90 border border-white/10 transition-all flex flex-col items-center justify-center text-center space-y-3 group ${platform.glow}`}
                      >
                        <div className="p-3.5 rounded-xl bg-white/5 text-white/80 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="font-sans font-bold text-sm text-white block">{platform.name}</span>
                          <span className="font-mono text-[11px] text-slate-400">{platform.handle}</span>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="pt-12 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/40">
                <button onClick={() => setActivePortal(null)} className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <ArrowLeft size={14} />
                  <span>Back to Vision Arcana</span>
                </button>
                <span>© 2026 Kabilan · Sam SciTech</span>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════════════════════════
          CARD 3: WORDS & WORLDS FULL WRITING & PHILOSOPHY PORTAL (EXACT MATCH)
         ══════════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {activePortal === 'words-worlds' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-[#050508] text-[#F0EDE8] overflow-y-auto overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-300"
          >
            {/* Top Navigation Header Bar */}
            <header className="sticky top-0 z-40 bg-[#050508]/90 backdrop-blur-xl border-b border-white/5 px-6 sm:px-12 py-5">
              <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="font-display font-extrabold text-xl text-white tracking-widest">
                  KABILAN <span className="text-amber-400 font-normal text-xs font-mono tracking-normal ml-2">/ WORDS & WORLDS</span>
                </div>
                <button
                  onClick={() => setActivePortal(null)}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all font-mono text-xs tracking-wider uppercase"
                >
                  <ArrowLeft size={14} />
                  <span>Back</span>
                </button>
              </div>
            </header>

            {/* Portal Main Scroll Container */}
            <main className="max-w-5xl mx-auto px-6 sm:px-10 py-12 sm:py-20 space-y-28 relative">
              
              {/* ── 1. Perspectives / Neutral Grounds (Exact Screenshots 4 & 5) ── */}
              <div className="space-y-12">
                <div className="text-center space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-amber-400/90 font-bold">
                    PERSPECTIVES
                  </span>
                  <h3
                    className="font-serif italic text-white tracking-tight"
                    style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)' }}
                  >
                    Neutral Grounds
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-400">
                    Neither dark nor light — just observation
                  </p>
                </div>

                {/* 3 Archetype Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {ARCHETYPES_DATA.map((arc, aIdx) => (
                    <motion.div
                      key={arc.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: aIdx * 0.15 }}
                      className="rounded-3xl bg-[#090a12]/95 border border-white/10 p-6 space-y-6 shadow-2xl flex flex-col justify-between"
                    >
                      {/* Artwork Box */}
                      <div className="rounded-2xl overflow-hidden aspect-[16/11] bg-[#060810] border border-white/10 relative flex items-center justify-center">
                        {arc.isStagSvg ? (
                          /* Stoic Constellation Stag SVG */
                          <div className="w-full h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,#051510_0%,#040608_100%)]">
                            <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 opacity-80" fill="none">
                              {/* Glowing Constellation Stag Line Art */}
                              <path d="M100,160 L100,110 L80,95 L65,70 L45,65 M65,70 L55,45 M65,70 L80,50 L75,30 M100,110 L120,95 L135,70 L155,65 M135,70 L145,45 M135,70 L120,50 L125,30" stroke="#00FF94" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
                              <circle cx="100" cy="160" r="3" fill="#00FF94" />
                              <circle cx="100" cy="110" r="2.5" fill="#00FF94" />
                              <circle cx="80" cy="95" r="2" fill="#00FF94" />
                              <circle cx="65" cy="70" r="2.5" fill="#00FF94" />
                              <circle cx="120" cy="95" r="2" fill="#00FF94" />
                              <circle cx="135" cy="70" r="2.5" fill="#00FF94" />
                              <circle cx="55" cy="45" r="2" fill="#00FF94" />
                              <circle cx="75" cy="30" r="2" fill="#00FF94" />
                              <circle cx="145" cy="45" r="2" fill="#00FF94" />
                              <circle cx="125" cy="30" r="2" fill="#00FF94" />
                            </svg>
                          </div>
                        ) : (
                          <img
                            src={arc.image}
                            alt={arc.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <span
                          className="font-mono text-[10px] tracking-[0.25em] uppercase font-bold block"
                          style={{ color: arc.eyebrowColor }}
                        >
                          {arc.eyebrow}
                        </span>

                        <h4 className="font-serif italic text-2xl text-white">
                          {arc.title}
                        </h4>

                        <p
                          className="font-serif italic text-sm sm:text-[15px] leading-snug"
                          dangerouslySetInnerHTML={{ __html: arc.quoteHtml }}
                        />

                        <p className="font-body text-xs sm:text-[13px] leading-[1.8] text-slate-300 font-light">
                          {arc.body}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── Interactive Multilingual Epistemology Matrix ── */}
              <div className="space-y-6 pt-4">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="h-px w-6 bg-amber-500/50" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold">
                      Interactive Epistemology Engine
                    </span>
                    <span className="h-px w-6 bg-amber-500/50" />
                  </div>
                  <h3 className="font-serif italic text-white tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                    Cross-Cultural Dialectics & Philosophical Maxims
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
                    Explore ancient classical thought across Greek, Tamil, Latin, and Japanese philosophies in an interactive generative reader.
                  </p>
                </div>
                <PhilosophyMatrix />
              </div>

              {/* ── 2. The Melancholic Essay (Exact Screenshots 2 & 3) ── */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto rounded-3xl bg-[#090a12]/95 border border-white/10 p-7 sm:p-12 space-y-8 shadow-2xl"
              >
                {/* Artwork Container: Sunset Beach Ocean in Bottle */}
                <div
                  className="rounded-2xl overflow-hidden aspect-[16/8] border border-white/10 relative flex items-center justify-center shadow-inner"
                  style={{
                    background: 'radial-gradient(ellipse at 40% 60%, #c2410c 0%, #7c2d12 30%, #1e1b4b 70%, #080912 100%)',
                  }}
                >
                  <div className="text-center p-6 space-y-2 relative z-10">
                    <span className="font-serif italic text-amber-200 text-lg sm:text-xl font-medium block">
                      The Bottle in the Twilight Sands
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 block">
                      Memory · Solitude · Ocean Waves
                    </span>
                  </div>
                </div>

                {/* Eyebrow */}
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400 font-semibold">
                  <Moon size={14} className="text-amber-400" />
                  <span>THE MELANCHOLIC</span>
                </div>

                {/* Essay Title */}
                <h4
                  className="font-serif italic text-white text-2xl sm:text-3xl md:text-4xl leading-[1.3] font-normal"
                >
                  How come life is to enjoy when all it has to offer is just sufferings?
                </h4>

                {/* Essay Body */}
                <div className="space-y-6 font-serif text-sm sm:text-[16px] leading-[1.9] text-slate-300 font-light">
                  <p>
                    We enter this world screaming, and we spend the rest of our time trying to understand why. Love leads to loss. Dreams dissolve into disappointments. We build sandcastles knowing the tide is coming.
                  </p>
                  <p>
                    Perhaps the ancient pessimists were right — to exist is to suffer. Buddha saw it. Schopenhauer wrote about it. Every human heart eventually learns it. We chase happiness like shadows, only to find that the closer we get, the more it recedes.
                  </p>
                  <p className="text-white font-medium italic">
                    And yet... we persist. Maybe that's the tragedy. Or maybe that's the point. I haven't decided which.
                  </p>
                </div>
              </motion.div>

              {/* ── 3. A Final Word (Exact Screenshot 1) ── */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center space-y-8 py-8"
              >
                <h3
                  className="font-serif text-white tracking-tight"
                  style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
                >
                  A Final Word
                </h3>

                <div className="space-y-6 font-serif text-sm sm:text-[16.5px] leading-[1.9] text-slate-300 font-light max-w-2xl mx-auto">
                  <p>
                    If these words seem contradictory, that's because they are. I am optimist and pessimist, poet and analyst, dreamer and skeptic — all coexisting in a single mind.
                  </p>
                  <p className="text-amber-200/90 italic">
                    Perhaps you're the same. Perhaps we all are.
                  </p>
                  <p>
                    And perhaps that's not a flaw to fix but a complexity to embrace. We are not monoliths but mosaics — beautiful precisely because we contain multitudes.
                  </p>
                </div>

                <div className="pt-6 font-serif italic text-lg text-slate-400">
                  — Kabilan
                </div>
              </motion.div>

              {/* Sub-Footer Return */}
              <div className="pt-12 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/40">
                <button
                  onClick={() => setActivePortal(null)}
                  className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Vision Arcana</span>
                </button>
                <span>© 2026 Kabilan · Words & Worlds</span>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
