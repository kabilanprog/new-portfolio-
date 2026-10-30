import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, Sparkles, ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import ProjectModal from '../common/ProjectModal';
import { PROJECTS_DATA } from '../../data/portfolioData';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [direction, setDirection] = useState(1);

  const currentProject = PROJECTS_DATA[currentIndex];
  const total = PROJECTS_DATA.length;

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Keyboard arrow navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-4 sm:px-8 md:px-14 bg-[#050505] overflow-hidden flex flex-col justify-center select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/3 top-1/3 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{
            background: `radial-gradient(circle, ${currentProject.accent}14 0%, transparent 70%)`,
            transition: 'background 0.8s ease',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* ── Top Section Eyebrow & Frame Counter ── */}
        <div className="flex items-center justify-between mb-8 px-2 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#00FF94]/60" />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#00FF94] font-semibold">
              Selected Works & Architectures
            </span>
          </div>

          {/* Right Frame Counter: e.g. "01 / 04" */}
          <div className="font-mono text-xs tracking-[0.25em] text-[#00FF94] font-semibold text-right">
            0{currentIndex + 1} <span className="text-white/30">/ 0{total}</span>
          </div>
        </div>

        {/* ── Main Cinematic Film Frame Stage ── */}
        <div className="relative rounded-3xl bg-[#08090d]/95 border border-white/10 shadow-[0_0_90px_rgba(0,0,0,0.95)] overflow-hidden">
          
          {/* Film Strip Perforation Notches on Left & Right Borders */}
          <div className="hidden md:flex flex-col justify-around absolute left-2 top-8 bottom-8 w-2 pointer-events-none z-20 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-3.5 rounded-[2px] bg-white/60" />
            ))}
          </div>
          <div className="hidden md:flex flex-col justify-around absolute right-2 top-8 bottom-8 w-2 pointer-events-none z-20 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-3.5 rounded-[2px] bg-white/60" />
            ))}
          </div>

          {/* Top Frame Tag */}
          <div className="p-6 sm:p-8 pb-0 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/15 bg-black/40">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/80 font-bold">
                {currentProject.frameTag || `FRAME 0${currentIndex + 1}`}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                {currentProject.category}
              </span>
            </div>
          </div>

          {/* Main Showcase Content: Left Preview Window + Right Editorial Details */}
          <div className="p-6 sm:p-8 md:p-12 pt-4 sm:pt-6">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentProject.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* ── Left Column: Interactive Project UI Mockup Browser ── */}
                <div className="lg:col-span-7 relative group">
                  
                  {/* Outer glowing reflection border */}
                  <div
                    className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#030406] shadow-2xl transition-all duration-500 group-hover:border-white/30"
                    style={{
                      boxShadow: `0 20px 60px -10px ${currentProject.accent}22`,
                    }}
                  >
                    {/* Browser Chrome Header Bar */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e1117] border-b border-white/10">
                      {/* Window traffic light buttons */}
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                      </div>

                      {/* Mockup Address Bar */}
                      <div className="px-3 py-0.5 rounded-md bg-black/60 border border-white/5 font-mono text-[9px] text-white/50 tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentProject.accent }} />
                        <span>https://{currentProject.id}.ai</span>
                      </div>

                      {/* Right indicator */}
                      <span className="font-mono text-[8px] uppercase tracking-widest text-white/30">
                        PREVIEW
                      </span>
                    </div>

                    {/* Screenshot Preview Image */}
                    <div
                      className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-black/80 flex items-center justify-center"
                      onClick={() => setSelectedProject(currentProject)}
                    >
                      <picture className="w-full h-full">
                        <source
                          type="image/avif"
                          srcSet={`${currentProject.image.replace(/\.(webp|jpg|png)$/, '')}.avif`}
                        />
                        <source
                          type="image/webp"
                          srcSet={`${currentProject.image.replace(/\.(webp|jpg|png)$/, '')}-800.webp 800w, ${currentProject.image} 1600w`}
                          sizes="(max-width: 1024px) 100vw, 800px"
                        />
                        <img
                          src={currentProject.image}
                          alt={currentProject.title}
                          width={1600}
                          height={1000}
                          loading={currentIndex === 0 ? "eager" : "lazy"}
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </picture>

                      {/* Overlay hover hint */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                        <span className="font-mono text-xs text-[#00FF94] flex items-center gap-1.5 font-semibold">
                          Open Interactive Deep Dive
                          <ArrowUpRight size={14} />
                        </span>
                        <span className="font-mono text-[10px] text-white/60 uppercase">
                          Click to View Architecture
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Left & Right Interactive Glowing Navigation Buttons */}
                  <button
                    onClick={prevProject}
                    aria-label="Previous Project"
                    className="project-nav-prev absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/90 border border-white/20 text-white/70 hover:text-black hover:bg-[#00FF94] hover:border-[#00FF94] transition-all flex items-center justify-center shadow-xl z-30 group/btn"
                  >
                    <ChevronLeft size={20} className="group-hover/btn:-translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={nextProject}
                    aria-label="Next Project"
                    className="project-nav-next absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/90 border border-white/20 text-white/70 hover:text-black hover:bg-[#00FF94] hover:border-[#00FF94] transition-all flex items-center justify-center shadow-xl z-30 group/btn"
                  >
                    <ChevronRight size={20} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* ── Right Column: Editorial Title & Story Narrative ── */}
                <div className="lg:col-span-5 relative">
                  
                  {/* Subtle Background Watermark Year (matches reference 2025 watermark) */}
                  <div
                    className="absolute -top-10 right-0 font-sans font-extrabold text-7xl sm:text-8xl select-none pointer-events-none opacity-5 tracking-tighter"
                    style={{ WebkitTextStroke: '2px #FFFFFF', color: 'transparent' }}
                  >
                    {currentProject.year}
                  </div>

                  {/* Category Eyebrow */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="h-px w-6 bg-[#00FF94]" />
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.3em] text-[#00FF94] font-semibold">
                      {currentProject.eyebrow}
                    </span>
                  </div>

                  {/* Massive Editorial Serif Title */}
                  <h3
                    className="font-serif font-bold text-white mb-4 tracking-tight leading-[1.05]"
                    style={{ fontSize: 'clamp(1.5rem, 4.5vw, 3.4rem)' }}
                  >
                    {currentProject.title.split('—')[0].trim()}
                  </h3>

                  {/* Decorative divider diamond */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: currentProject.accent }} />
                    <div className="h-px w-16 bg-white/10" />
                  </div>

                  {/* Narrative paragraph */}
                  <p className="font-body text-[14px] sm:text-[14.5px] leading-[1.8] text-slate-300 mb-6 font-normal">
                    {currentProject.tagline}
                  </p>

                  {/* Tech stack chips (Exact reference style) */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentProject.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-md font-mono text-[10px] tracking-wider uppercase bg-[#11141a] text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: Source Code & Case Study */}
                  <div className="flex items-center gap-4 pt-2">
                    <button
                      onClick={() => setSelectedProject(currentProject)}
                      className="inline-flex items-center gap-2 border border-[#00FF94]/60 hover:border-[#00FF94] rounded-md px-5 py-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-[#00FF94] hover:bg-[#00FF94] hover:text-black transition-all shadow-[0_0_20px_rgba(0,255,148,0.15)]"
                    >
                      <Sparkles size={13} />
                      <span>Case Study</span>
                    </button>

                    {currentProject.githubUrl && (
                      <a
                        href={currentProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border border-white/15 hover:border-white/40 rounded-md px-4 py-2.5 font-mono text-[11px] tracking-[0.15em] uppercase text-slate-300 hover:text-white transition-all bg-black/40"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Bottom HUD Footer Bar (Exact Reference layout) ── */}
          <div className="px-6 sm:px-10 py-5 bg-[#06070a] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Left Tag */}
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
              PORTFOLIO — 2026
            </span>

            {/* Center Segment Indicators */}
            <div className="flex items-center gap-2">
              {PROJECTS_DATA.map((_, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => {
                    setDirection(pIdx > currentIndex ? 1 : -1);
                    setCurrentIndex(pIdx);
                  }}
                  className="group py-2 px-1 focus:outline-none"
                  aria-label={`Go to project ${pIdx + 1}`}
                >
                  <div
                    className={`h-[2px] transition-all duration-300 rounded-full ${
                      pIdx === currentIndex
                        ? 'w-10 bg-[#00FF94] shadow-[0_0_10px_#00FF94]'
                        : 'w-4 bg-white/20 group-hover:bg-white/40'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Right Tag */}
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
              {currentProject.techStack.length} TECHNOLOGIES
            </span>
          </div>
        </div>

        {/* Bottom Keyboard / Navigation Sub-label */}
        <div className="text-center mt-6">
          <p className="font-mono text-[9px] tracking-[0.45em] uppercase text-white/25">
            ↓ SCROLL OR USE ARROW KEYS ✦ CLICK PREVIEW TO EXPLORE
          </p>
        </div>

      </div>

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
