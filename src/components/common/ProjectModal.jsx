import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, Layers, AlertCircle, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl bg-[#08080c] border border-white/10 p-6 sm:p-8 shadow-2xl z-10 text-slate-200"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-6 border-b border-white/5 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-px w-6 bg-neon/60" />
                  <span className="font-mono text-[10px] tracking-[0.25em] text-neon uppercase">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif italic text-cream tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-muted font-sans mt-1">
                  {project.subtitle}
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Project Preview Hero Image */}
            {project.image && (
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 mb-6 bg-black/60 shadow-lg">
                <picture className="w-full h-full">
                  <source
                    type="image/avif"
                    srcSet={`${project.image.replace(/\.(webp|jpg|png)$/, '')}.avif`}
                  />
                  <source
                    type="image/webp"
                    srcSet={`${project.image.replace(/\.(webp|jpg|png)$/, '')}-800.webp 800w, ${project.image} 1600w`}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            )}

            {/* Metrics */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="text-center p-2">
                    <span className="block text-xl font-mono font-bold text-neon tracking-tight">
                      {m.value}
                    </span>
                    <span className="block text-[10px] font-mono text-muted uppercase mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Content Highlights */}
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-neon" />
                  Key Highlights & Capabilities
                </h4>
                <div className="space-y-2">
                  {project.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neon shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture */}
              {project.architecture && (
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-neon flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5" />
                    Deep Technical Architecture
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    {Object.entries(project.architecture).map(([key, val]) => (
                      <div key={key} className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                        <span className="text-muted block text-[10px] uppercase mb-0.5">{key}</span>
                        <span className="text-slate-200 font-sans text-xs">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-neon-blue mb-2.5 flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-neon-blue" />
                    Engineering Challenges Overcome
                  </h4>
                  <ul className="space-y-2">
                    {project.challenges.map((ch, idx) => (
                      <li key={idx} className="text-xs text-slate-300 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-2">
                        <span className="font-mono text-neon-blue font-bold text-[11px] shrink-0">0{idx + 1}.</span>
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-widest text-muted mb-2.5">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/50 bg-neon/10 hover:bg-neon text-black hover:text-black font-mono text-xs uppercase tracking-wider transition-all"
                  >
                    <span>Launch Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-[11px] font-mono text-muted hover:text-white transition-colors"
              >
                [Esc] to close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
