import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, LayoutGrid, Orbit } from 'lucide-react';
import NebulaSkillConstellation from './NebulaSkillConstellation';
import VisualSkillTree from './VisualSkillTree';
import { SKILLS_DATA } from '../../data/portfolioData';

export default function Skills() {
  const [viewMode, setViewMode] = useState('constellation'); // 'constellation', 'tree', 'grid'

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-10 md:px-16 bg-[#040507] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-neon/50" />
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-neon">
              Competencies & Architecture
            </span>
            <span className="h-px w-8 bg-neon/50" />
          </div>

          <h2 className="font-sans text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold tracking-tight text-white mb-3">
            Technical <span className="font-serif italic text-cream font-normal">Arsenal</span>
          </h2>

          <p className="font-sans text-xs md:text-sm text-muted mb-6">
            Interactive skill galaxy spanning deep learning, multi-modal GenAI, Java microservices, and full-stack systems.
          </p>

          {/* View Mode Toggle: Nebula Galaxy vs Interactive Skill Tree vs Matrix */}
          <div className="inline-flex items-center p-1 rounded-full bg-black/60 border border-white/10 shadow-xl flex-wrap justify-center gap-1">
            <button
              onClick={() => setViewMode('constellation')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                viewMode === 'constellation'
                  ? 'bg-neon/20 text-neon border border-neon/50 shadow-[0_0_20px_rgba(0,255,148,0.25)] font-semibold'
                  : 'text-muted hover:text-white'
              }`}
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>Nebula Galaxy</span>
            </button>

            <button
              onClick={() => setViewMode('tree')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                viewMode === 'tree'
                  ? 'bg-neon/20 text-neon border border-neon/50 shadow-[0_0_20px_rgba(0,255,148,0.25)] font-semibold'
                  : 'text-muted hover:text-white'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>Skill Tree</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                viewMode === 'grid'
                  ? 'bg-neon/20 text-neon border border-neon/50 shadow-[0_0_20px_rgba(0,255,148,0.25)] font-semibold'
                  : 'text-muted hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Matrix Grid</span>
            </button>
          </div>
        </div>

        {/* Dynamic View Display */}
        {viewMode === 'constellation' ? (
          <NebulaSkillConstellation />
        ) : viewMode === 'tree' ? (
          <VisualSkillTree />
        ) : (
          <div className="space-y-8 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SKILLS_DATA.map((cat, catIdx) => (
                <motion.div
                  key={catIdx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                  className="rounded-2xl bg-[#0c0c10] border border-white/10 p-6 space-y-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-sans font-bold text-base text-cream mb-6 pb-4 border-b border-white/5">
                      {cat.category}
                    </h3>

                    <div className="space-y-4">
                      {cat.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-sans font-medium text-slate-200">
                              {skill.name}
                            </span>
                            <span className="font-mono text-[11px] text-neon">
                              {skill.level}%
                            </span>
                          </div>

                          <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-neon via-[#00BBF9] to-neon"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>

                          <p className="text-[11px] text-muted font-sans leading-tight">
                            {skill.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
