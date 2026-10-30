import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Feather, Globe, RefreshCw } from 'lucide-react';

const MULTILINGUAL_WISDOM = [
  {
    language: 'Ancient Greek',
    script: 'γνῶθι σεαυτόν',
    phonetic: 'Gnōthi seauton',
    meaning: 'Know Thyself',
    philosopher: 'Socrates & The Oracle of Delphi',
    essence: 'The origin of all philosophical inquiry begins inside our own consciousness.',
  },
  {
    language: 'Tamil',
    script: 'யாதும் ஊரே யாவரும் கேளிர்',
    phonetic: 'Yaadhum Oore Yaavarum Kelir',
    meaning: 'To us all towns are one, all humans our kin',
    philosopher: 'Kaniyan Pungundranar (Purananuru, 6th Century BCE)',
    essence: 'The earliest declaration of universal human fraternity and cosmic oneness.',
  },
  {
    language: 'Latin',
    script: 'Amor Fati',
    phonetic: 'Ah-mor Fah-tee',
    meaning: 'Love of One’s Fate',
    philosopher: 'Marcus Aurelius & Friedrich Nietzsche',
    essence: 'Not merely enduring reality, but falling in love with whatever life brings.',
  },
  {
    language: 'Japanese',
    script: '物の哀れ',
    phonetic: 'Mono no aware',
    meaning: 'The gentle sorrow of impermanence',
    philosopher: 'Motoori Norinaga',
    essence: 'A deep empathy towards things, recognizing their poignant beauty because they fade.',
  },
];

export default function PhilosophyMatrix() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextWisdom = () => {
    setCurrentIndex((prev) => (prev + 1) % MULTILINGUAL_WISDOM.length);
  };

  const item = MULTILINGUAL_WISDOM[currentIndex];

  return (
    <div className="rounded-3xl bg-[#0d0914]/95 border border-amber-500/25 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_60px_rgba(245,208,122,0.08)] space-y-6">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
            <Feather size={22} />
          </div>
          <div>
            <h4 className="font-serif italic font-bold text-xl text-white tracking-wide">
              Multilingual Dialectics & Wisdom Matrix
            </h4>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400">
              Cross-Cultural Philosophical Epistemology
            </span>
          </div>
        </div>

        <button
          onClick={nextWisdom}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-wider transition-all"
        >
          <RefreshCw size={12} />
          <span>Next Perspective</span>
        </button>
      </div>

      {/* Main Dialectic Card */}
      <div className="relative rounded-2xl bg-black/60 border border-amber-500/20 p-6 sm:p-10 overflow-hidden text-center space-y-6">
        
        {/* Background Watermark Script */}
        <span className="absolute -bottom-6 right-4 font-serif text-8xl text-amber-500/5 select-none pointer-events-none">
          {item.script}
        </span>

        {/* Language Tag */}
        <div className="flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-amber-400/80">
          <Globe size={14} />
          <span>{item.language}</span>
        </div>

        {/* Script & Phonetic */}
        <AnimatePresence mode="wait">
          <motion.div
            key={item.script}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <h3 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#F5D07A] leading-tight">
              "{item.script}"
            </h3>
            <span className="font-mono text-xs text-slate-400 italic block">
              [{item.phonetic}] — "{item.meaning}"
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Essence Commentary */}
        <AnimatePresence mode="wait">
          <motion.div
            key={item.essence}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="max-w-xl mx-auto space-y-2 border-t border-white/10 pt-5"
          >
            <p className="font-serif italic text-sm sm:text-base text-slate-300 leading-relaxed">
              {item.essence}
            </p>
            <span className="font-mono text-[10px] text-amber-400/70 block uppercase tracking-widest pt-1">
              Source: {item.philosopher}
            </span>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Mini Philosophy Archetypes Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-[11px]">
        {MULTILINGUAL_WISDOM.map((w, idx) => (
          <button
            key={w.language}
            onClick={() => setCurrentIndex(idx)}
            className={`p-3 rounded-xl border text-left transition-all ${
              currentIndex === idx
                ? 'bg-amber-500/15 border-amber-500/60 text-amber-300'
                : 'bg-black/30 border-white/5 text-slate-400 hover:text-white'
            }`}
          >
            <span className="block font-bold text-xs">{w.language}</span>
            <span className="block text-[9px] text-slate-500 truncate mt-0.5">{w.script}</span>
          </button>
        ))}
      </div>

    </div>
  );
}
