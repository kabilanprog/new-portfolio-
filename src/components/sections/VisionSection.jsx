import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, ArrowLeft, X, Heart, Eye, Target, 
  Atom, Mail, ArrowUpRight, Globe, Grid, Play, 
  Layers as StackIcon, Moon, Dna, Feather, Compass,
  Cpu, Activity, Radio
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
import HolographicVisionCard from '../vision/HolographicVisionCard';

/* ══════════════════════════════════════════════════════════════════════════════
   HOLOGRAPHIC 3D VISION CARDS CONFIGURATION
   ══════════════════════════════════════════════════════════════════════════════ */
const HOLOGRAPHIC_CARDS = [
  {
    id: "sagittarius",
    sectorCode: "SEC-01 // BIO-AI",
    title: "SAGITTARIUS",
    subtitle: "De-extinction biotechnology & deep learning genomics pipeline.",
    category: "BIOTECHNOLOGY · GENOMICS",
    accentColor: "#A855F7",
    glowColor: "rgba(168, 85, 247, 0.45)",
    borderColor: "rgba(168, 85, 247, 0.4)",
    icon: Dna,
    tags: ["CRISPR-Cas9", "Mammuthus", "eDNA", "BioBERT"],
  },
  {
    id: "scitech",
    sectorCode: "SEC-02 // ASTRO-SIM",
    title: "Sam SciTech",
    subtitle: "Cosmological astrophysics, quantum mechanics & YouTube education.",
    category: "ASTROPHYSICS · EDUCATION",
    accentColor: "#22D3EE",
    glowColor: "rgba(34, 211, 238, 0.45)",
    borderColor: "rgba(34, 211, 238, 0.4)",
    icon: Atom,
    tags: ["Singularity", "Relativity", "Tensors", "YouTube"],
  },
  {
    id: "words-worlds",
    sectorCode: "SEC-03 // LIT-PHIL",
    title: "Words & Worlds",
    subtitle: "Multilingual literary arts, Stoicism & existential epistemology.",
    category: "LITERATURE · PHILOSOPHY",
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.45)",
    borderColor: "rgba(245, 158, 11, 0.4)",
    icon: Feather,
    tags: ["Greek νοῦς", "Tamil", "Stoicism", "Dialectics"],
  },
];

/* ══════════════════════════════════════════════════════════════════════════════
   PORTAL 1: SAGITTARIUS DATA
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

/* ══════════════════════════════════════════════════════════════════════════════
   PORTAL 2: SAM SCITECH DATA
   ══════════════════════════════════════════════════════════════════════════════ */
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
   PORTAL 3: WORDS & WORLDS DATA
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
      oscNodesRef.current.forEach((n) => {
        try { n.stop(); n.disconnect(); } catch (e) {}
      });
      oscNodesRef.current = [];
      setIsAudioOn(false);
    } else {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        const freqs = [108, 162, 216, 324];
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

  // ESC to close portal
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
      className="relative min-h-screen bg-[#05050A] py-24 sm:py-32 px-4 sm:px-8 overflow-hidden flex flex-col items-center justify-center select-none"
    >
      {/* Dynamic 3D Quantum Interactive Canvas Background */}
      <VisionQuantumCanvas mode={horizonMode} />

      {/* Futuristic Deep Space Nebula Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/3 top-1/4 w-[700px] h-[700px] rounded-full blur-[160px] bg-[radial-gradient(circle,rgba(168,85,247,0.08)_0%,transparent_70%)]" />
        <div className="absolute right-1/4 bottom-1/3 w-[600px] h-[600px] rounded-full blur-[150px] bg-[radial-gradient(circle,rgba(34,211,238,0.07)_0%,transparent_70%)]" />
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[140px] bg-[radial-gradient(circle,rgba(245,158,11,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* ── Top Futuristic Cyber HUD Console Dock ── */}
        <HudDock
          horizonMode={horizonMode}
          setHorizonMode={setHorizonMode}
          isAudioOn={isAudioOn}
          onToggleAudio={toggleAmbientAudio}
        />

        {/* ── Modern Cyber-Fantasy Header ── */}
        <div className="text-center space-y-4 max-w-3xl mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Sparkles size={12} className="text-purple-400" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase font-bold bg-gradient-to-r from-purple-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
              QUANTUM NEXUS & PHILOSOPHICAL HORIZONS
            </span>
            <Sparkles size={12} className="text-cyan-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black tracking-tight text-white"
            style={{
              fontSize: 'clamp(3rem, 7vw, 5.2rem)',
              lineHeight: 1.05,
              textShadow: '0 0 40px rgba(168, 85, 247, 0.35)',
            }}
          >
            My Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed"
          >
            Where artificial intelligence converges with biological evolution, astrophysics inquiry, and existential philosophy.
          </motion.p>
        </div>

        {/* ── 3-Card Holographic Cyber Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch justify-items-center w-full max-w-6xl mb-12 px-2 sm:px-4">
          {HOLOGRAPHIC_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex justify-center"
            >
              <HolographicVisionCard
                {...card}
                onClick={() => setActivePortal(card.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Prompt ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-mono text-[10.5px] uppercase tracking-[0.35em] text-slate-500 text-center flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500/60 animate-ping" />
          Click any dimensional card to initialize research portal
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60 animate-ping" />
        </motion.p>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════════
          PORTAL 1: SAGITTARIUS (Bio-AI Research Portal)
         ══════════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {activePortal === 'sagittarius' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-[#05050A] text-[#F0EDE8] overflow-y-auto overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-300"
          >
            {/* Glass Navigation Header */}
            <header className="sticky top-0 z-40 bg-[#080711]/90 backdrop-blur-2xl border-b border-purple-500/20 px-6 sm:px-12 py-4">
              <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Dna size={18} />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-base text-white tracking-wider block">
                      SAGITTARIUS
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-purple-400 block">
                      DE-EXTINCTION · AI GENOMICS
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActivePortal(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-950/30 hover:bg-purple-900/50 hover:border-purple-400 text-purple-200 hover:text-white transition-all font-mono text-xs tracking-wider uppercase cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                >
                  <ArrowLeft size={14} />
                  <span>Return to Vision</span>
                </button>
              </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-24 space-y-24 relative">
              {/* Vision Statement Quote */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center py-10 px-6 sm:px-12 relative rounded-3xl bg-gradient-to-b from-purple-950/20 to-transparent border border-purple-500/20 shadow-2xl"
              >
                <div className="w-12 h-12 mx-auto mb-6 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <Sparkles size={24} />
                </div>
                <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-slate-100 leading-[1.6] font-normal mb-6">
                  "The code of life is the most elegant program ever written. Our mission is to learn its syntax, understand its logic, and when necessary — debug its errors."
                </h2>
                <p className="font-mono text-xs tracking-[0.25em] uppercase text-purple-400 font-bold">
                  — Kabilan, Founder & AI Engineer
                </p>
              </motion.div>

              {/* Mission Pillars Grid */}
              <div className="space-y-10">
                <div className="text-center space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-purple-400 font-bold">
                    CORE RESEARCH
                  </span>
                  <h3 className="font-display font-extrabold text-white tracking-tight text-3xl sm:text-4xl">
                    Mission Pillars
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {MISSION_PILLARS.map((pillar, pIdx) => {
                    const Icon = pillar.icon;
                    return (
                      <motion.div
                        key={pillar.number}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: pIdx * 0.1 }}
                        className="rounded-2xl bg-[#090814]/90 border border-purple-500/20 p-7 flex flex-col justify-between space-y-6 shadow-2xl hover:border-purple-500/50 transition-all group"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs text-purple-400 font-bold">
                              {pillar.number}
                            </span>
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                              <Icon size={20} />
                            </div>
                          </div>
                          <h4 className="font-display font-bold text-xl text-white group-hover:text-purple-300 transition-colors">
                            {pillar.title}
                          </h4>
                          <p className="font-body text-xs sm:text-[13px] leading-[1.8] text-slate-300">
                            {pillar.desc}
                          </p>
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
              </div>

              {/* CRISPR Neural Simulator */}
              <div className="space-y-6 pt-4">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-[10px] font-mono font-bold tracking-widest uppercase">
                    <Activity size={12} className="text-purple-400" />
                    Interactive Lab Simulator
                  </div>
                  <h3 className="font-display font-extrabold text-white tracking-tight text-3xl sm:text-4xl">
                    CRISPR Neural Genomics Simulator
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
                    Simulate deep learning model predictions across cardiovascular targets and marine eDNA sequences in real-time.
                  </p>
                </div>
                <CrisprBioSimulator />
              </div>

              {/* Tech Stack */}
              <div className="space-y-8 pt-6">
                <div className="text-center space-y-2">
                  <h3 className="font-display font-extrabold text-white tracking-tight text-3xl sm:text-4xl">
                    Technology Stack
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-400">The frameworks and architectures powering our pipeline</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {TECH_STACK_COLUMNS.map((col, cIdx) => (
                    <motion.div
                      key={col.category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: cIdx * 0.08 }}
                      className="p-6 rounded-2xl bg-[#090814]/90 border border-white/10 space-y-4"
                    >
                      <h4 className="font-display font-bold text-sm text-purple-300 border-b border-purple-500/20 pb-3">
                        {col.category}
                      </h4>
                      <ul className="space-y-2 font-body text-xs text-slate-300">
                        {col.items.map((item, iIdx) => (
                          <li key={iIdx} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-purple-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Get Involved Links */}
              <div className="space-y-8 pt-6">
                <div className="text-center space-y-2">
                  <h3 className="font-display font-extrabold text-white tracking-tight text-3xl sm:text-4xl">
                    Get Involved
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-400">Collaborate with our research team</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <a
                    href="https://github.com/kabilanprog"
                    target="_blank"
                    rel="noreferrer"
                    className="p-6 rounded-2xl bg-[#090814]/90 border border-white/10 hover:border-purple-500/40 transition-all flex items-center gap-4 group cursor-pointer shadow-lg"
                  >
                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 block font-semibold">GITHUB REPOSITORY</span>
                      <span className="font-sans font-bold text-sm text-white group-hover:text-purple-300 transition-colors">github.com/kabilanprog</span>
                    </div>
                  </a>

                  <a
                    href="mailto:kabilan.officialid@gmail.com"
                    className="p-6 rounded-2xl bg-[#090814]/90 border border-white/10 hover:border-purple-500/40 transition-all flex items-center gap-4 group cursor-pointer shadow-lg"
                  >
                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                      <Mail size={22} />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 block font-semibold">DIRECT INQUIRY</span>
                      <span className="font-sans font-bold text-sm text-white group-hover:text-purple-300 transition-colors">kabilan.officialid@gmail.com</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Portal Footer */}
              <div className="pt-12 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/40">
                <button
                  onClick={() => setActivePortal(null)}
                  className="inline-flex items-center gap-2 hover:text-purple-400 transition-colors cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Vision Nexus</span>
                </button>
                <span>© 2026 Kabilan · Sagittarius</span>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════════════════════════
          PORTAL 2: SAM SCITECH (Cosmic Astrophysics & YouTube Portal)
         ══════════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {activePortal === 'scitech' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-[#03060C] text-[#F0EDE8] overflow-y-auto overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-300"
          >
            {/* Header */}
            <header className="sticky top-0 z-40 bg-[#060B14]/90 backdrop-blur-2xl border-b border-cyan-500/20 px-6 sm:px-12 py-4">
              <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Atom size={18} />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-base text-white tracking-wider block">
                      SAM SCITECH
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 block">
                      ASTROPHYSICS · QUANTUM MECHANICS
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActivePortal(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 hover:bg-cyan-900/50 hover:border-cyan-400 text-cyan-200 hover:text-white transition-all font-mono text-xs tracking-wider uppercase cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                >
                  <ArrowLeft size={14} />
                  <span>Return to Vision</span>
                </button>
              </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-24 space-y-24 relative">
              {/* YouTube Channel Hero Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden aspect-[16/8] sm:aspect-[16/7] border border-cyan-500/30 shadow-[0_0_80px_rgba(6,182,212,0.25)] flex items-center justify-center"
                style={{
                  background: 'radial-gradient(ellipse at center, #082f49 0%, #0c1a30 45%, #030712 100%)',
                }}
              >
                <div className="absolute inset-0 pointer-events-none opacity-60">
                  <svg viewBox="0 0 900 500" className="w-full h-full">
                    <circle cx="450" cy="250" r="180" stroke="rgba(56,189,248,0.25)" strokeWidth="1" strokeDasharray="6 6" />
                    <circle cx="450" cy="250" r="280" stroke="rgba(147,51,234,0.18)" strokeWidth="1" strokeDasharray="4 10" />
                    <ellipse cx="450" cy="250" rx="360" ry="200" stroke="rgba(56,189,248,0.15)" strokeWidth="1" transform="rotate(-20, 450, 250)" />
                  </svg>
                </div>

                <div className="text-center space-y-4 relative z-10 p-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-cyan-400/40 text-cyan-300 font-mono text-[10px] tracking-widest uppercase">
                    <Radio size={12} className="text-red-500 animate-pulse" />
                    OFFICIAL BROADCAST // YOUTUBE
                  </div>

                  <h3 className="font-display font-extrabold text-white text-3xl sm:text-5xl">
                    Sam SciTech
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-cyan-100/80 max-w-lg mx-auto">
                    Decoding astrophysics, tensor calculus, and quantum physics into deep intuitive knowledge.
                  </p>

                  <a
                    href="https://youtube.com/@SamSciTech"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400 text-white font-sans font-semibold text-sm transition-all shadow-[0_0_25px_rgba(34,211,238,0.35)] cursor-pointer group hover:scale-105"
                  >
                    <YoutubeIcon className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                    <span>Visit YouTube Channel</span>
                    <ArrowUpRight size={16} className="text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>

              {/* The Pursuit of Understanding */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6 text-center max-w-3xl mx-auto">
                <h3 className="font-display font-extrabold text-cyan-300 tracking-tight text-3xl sm:text-4xl">
                  The Pursuit of Understanding
                </h3>
                <div className="space-y-4 font-body text-sm sm:text-base leading-relaxed text-slate-300 font-light text-left sm:text-justify">
                  <p>
                    From the infinitesimal dance of subatomic particles to the majestic spiral of galaxies billions of light-years away, the universe speaks in the language of mathematics. <span className="text-cyan-400 font-semibold">Sam SciTech</span> is my endeavour to decode that language and share it with the world.
                  </p>
                  <p>
                    Physics isn’t just equations on a blackboard — it’s the poetry of reality. Mathematics isn’t mere abstraction — it’s the architecture of the cosmos. And when these disciplines converge with machine learning, we unlock unprecedented tools to model and understand the physical universe.
                  </p>
                </div>
              </motion.div>

              {/* What I Cover Grid */}
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <h3 className="font-display font-extrabold text-white tracking-tight text-3xl sm:text-4xl">
                    Core Disciplines
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
                        className="rounded-2xl bg-[#070D18]/90 border border-cyan-500/20 p-6 flex flex-col space-y-4 shadow-xl hover:border-cyan-500/50 transition-all group"
                      >
                        <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                          <Icon size={22} />
                        </div>
                        <h4 className="font-display font-bold text-base text-white">{topic.title}</h4>
                        <p className="font-body text-xs leading-relaxed text-slate-300">{topic.desc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Vector Matrix Playground */}
              <div className="space-y-6 pt-4">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-bold tracking-widest uppercase">
                    <Grid size={12} className="text-cyan-400" />
                    Interactive Math Laboratory
                  </div>
                  <h3 className="font-display font-extrabold text-white tracking-tight text-3xl sm:text-4xl">
                    Vector Transformations & Cosine Similarity
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
                    Manipulate 2D coordinate vectors in real-time to compute dot products, spatial angles, and neural embedding similarities.
                  </p>
                </div>
                <VectorMatrixPlayground />
              </div>

              {/* Featured Videos */}
              <div className="space-y-8 pt-6">
                <div className="text-center space-y-2">
                  <h3 className="font-display font-extrabold text-white tracking-tight text-3xl sm:text-4xl">
                    Featured Video Productions
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
                      className="rounded-3xl bg-[#060D18]/90 border border-white/10 hover:border-cyan-500/40 p-5 space-y-6 shadow-2xl transition-all group flex flex-col justify-between cursor-pointer"
                    >
                      <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#040810] border border-white/10 flex items-center justify-center">
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
                      </div>
                      <div className="space-y-3 px-2">
                        <h4 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">{vid.title}</h4>
                        <p className="font-body text-xs leading-relaxed text-slate-300">{vid.desc}</p>
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

              {/* Social Channels */}
              <div className="space-y-8 pt-6">
                <div className="text-center space-y-2">
                  <h3 className="font-display font-extrabold text-white tracking-tight text-3xl sm:text-4xl">Join the Journey</h3>
                  <p className="font-body text-xs sm:text-sm text-slate-400">Connect across platforms</p>
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
                        className={`p-6 rounded-2xl bg-[#070D18]/90 border border-white/10 transition-all flex flex-col items-center justify-center text-center space-y-3 group cursor-pointer ${platform.glow}`}
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

              {/* Footer */}
              <div className="pt-12 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/40">
                <button onClick={() => setActivePortal(null)} className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer">
                  <ArrowLeft size={14} />
                  <span>Back to Vision Nexus</span>
                </button>
                <span>© 2026 Kabilan · Sam SciTech</span>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════════════════════════
          PORTAL 3: WORDS & WORLDS (Literature & Epistemology Portal)
         ══════════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {activePortal === 'words-worlds' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-[#070509] text-[#F0EDE8] overflow-y-auto overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-300"
          >
            {/* Header */}
            <header className="sticky top-0 z-40 bg-[#0B0810]/90 backdrop-blur-2xl border-b border-amber-500/20 px-6 sm:px-12 py-4">
              <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Feather size={18} />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-base text-white tracking-wider block">
                      WORDS & WORLDS
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-amber-400 block">
                      LITERATURE · STOICISM · DIALECTICS
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActivePortal(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-950/30 hover:bg-amber-900/50 hover:border-amber-400 text-amber-200 hover:text-white transition-all font-mono text-xs tracking-wider uppercase cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                >
                  <ArrowLeft size={14} />
                  <span>Return to Vision</span>
                </button>
              </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-24 space-y-24 relative">
              {/* Perspectives Grid */}
              <div className="space-y-10">
                <div className="text-center space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold">
                    EPISTEMIC ARCHETYPES
                  </span>
                  <h3 className="font-display font-extrabold text-white tracking-tight text-3xl sm:text-4xl">
                    The Mind, The Heart, The Will
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {ARCHETYPES_DATA.map((arc, aIdx) => (
                    <motion.div
                      key={arc.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: aIdx * 0.15 }}
                      className="rounded-3xl bg-[#0D0A14]/90 border border-white/10 hover:border-amber-500/30 p-6 space-y-6 shadow-2xl flex flex-col justify-between transition-colors"
                    >
                      <div className="rounded-2xl overflow-hidden aspect-[16/11] bg-[#07050C] border border-white/10 relative flex items-center justify-center">
                        {arc.isStagSvg ? (
                          <div className="w-full h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,#051510_0%,#040608_100%)]">
                            <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 opacity-80" fill="none">
                              <path d="M100,160 L100,110 L80,95 L65,70 L45,65 M65,70 L55,45 M65,70 L80,50 L75,30 M100,110 L120,95 L135,70 L155,65 M135,70 L145,45 M135,70 L120,50 L125,30" stroke="#00FF94" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
                              <circle cx="100" cy="160" r="3" fill="#00FF94" />
                              <circle cx="100" cy="110" r="2.5" fill="#00FF94" />
                              <circle cx="80" cy="95" r="2" fill="#00FF94" />
                              <circle cx="65" cy="70" r="2.5" fill="#00FF94" />
                              <circle cx="120" cy="95" r="2" fill="#00FF94" />
                              <circle cx="135" cy="70" r="2.5" fill="#00FF94" />
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

              {/* Epistemology Matrix */}
              <div className="space-y-6 pt-4">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-bold tracking-widest uppercase">
                    <Feather size={12} className="text-amber-400" />
                    Interactive Epistemology Engine
                  </div>
                  <h3 className="font-display font-extrabold text-white tracking-tight text-3xl sm:text-4xl">
                    Cross-Cultural Dialectics & Maxims
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
                    Explore ancient classical thought across Greek, Tamil, Latin, and Japanese philosophies in an interactive reader.
                  </p>
                </div>
                <PhilosophyMatrix />
              </div>

              {/* The Melancholic Essay */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto rounded-3xl bg-[#0D0A14]/90 border border-white/10 p-7 sm:p-12 space-y-8 shadow-2xl"
              >
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

                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400 font-semibold">
                  <Moon size={14} className="text-amber-400" />
                  <span>THE MELANCHOLIC</span>
                </div>

                <h4 className="font-serif italic text-white text-2xl sm:text-3xl md:text-4xl leading-[1.3] font-normal">
                  How come life is to enjoy when all it has to offer is just sufferings?
                </h4>

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

              {/* A Final Word */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center space-y-6 py-6"
              >
                <h3 className="font-display font-extrabold text-white tracking-tight text-3xl sm:text-4xl">
                  A Final Word
                </h3>

                <div className="space-y-4 font-serif text-sm sm:text-[16px] leading-[1.9] text-slate-300 font-light max-w-2xl mx-auto">
                  <p>
                    If these words seem contradictory, that's because they are. I am optimist and pessimist, poet and analyst, dreamer and skeptic — all coexisting in a single mind.
                  </p>
                  <p className="text-amber-200/90 italic">
                    Perhaps you're the same. Perhaps we all are.
                  </p>
                  <p>
                    We are not monoliths but mosaics — beautiful precisely because we contain multitudes.
                  </p>
                </div>

                <div className="pt-4 font-serif italic text-lg text-slate-400">
                  — Kabilan
                </div>
              </motion.div>

              {/* Return */}
              <div className="pt-12 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/40">
                <button
                  onClick={() => setActivePortal(null)}
                  className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Vision Nexus</span>
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
