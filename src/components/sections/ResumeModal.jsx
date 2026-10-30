import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Printer, GraduationCap, Award, Briefcase, 
  MapPin, Mail, ArrowLeft, CheckCircle2, Cpu, Compass
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, TwitterXIcon } from '../common/Icons';

export default function ResumeModal({ isOpen, onClose }) {

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

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 25 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#090a10] border border-white/15 p-5 sm:p-8 md:p-10 shadow-2xl z-10 text-slate-200 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none custom-scrollbar"
        >
          {/* Ambient Background Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#00FF94]/5 blur-[120px] pointer-events-none print:hidden" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00BBF9]/5 blur-[120px] pointer-events-none print:hidden" />

          {/* ══════════════════════════════════════════════════════════════════════
              TOP STICKY ACTION BAR & BACK BUTTON
             ══════════════════════════════════════════════════════════════════════ */}
          <div className="sticky -top-5 sm:-top-8 md:-top-10 -mx-5 sm:-mx-8 md:-mx-10 px-5 sm:px-8 md:px-10 py-4 mb-8 bg-[#090a10]/95 backdrop-blur-xl border-b border-white/10 flex items-center justify-between gap-3 z-30 print:hidden">
            {/* Primary Back Button */}
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-[#00FF94]/10 hover:border-[#00FF94]/30 hover:text-[#00FF94] text-white/90 text-xs font-mono transition-all group shadow-sm"
              title="Return to portfolio"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Back to Portfolio</span>
            </button>

            {/* Middle Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse" />
              <span className="font-mono text-[11px] text-white/80 uppercase tracking-wider">
                Kabilan · Executive CV
              </span>
            </div>

            {/* Right Actions: Print & Close */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white font-mono text-xs transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-[#00BBF9]" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                aria-label="Close resume modal"
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-red-500/10 hover:border-red-500/30 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════════
              CARD MODULE 1: HEADER & PROFILE HERO CARD
             ══════════════════════════════════════════════════════════════════════ */}
          <div className="relative rounded-2xl bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 p-6 sm:p-8 mb-6 shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              {/* Left Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00FF94]/20 to-[#00BBF9]/20 border border-[#00FF94]/30 flex items-center justify-center shadow-inner">
                    <span className="font-serif italic font-bold text-2xl text-[#00FF94]">K</span>
                  </div>
                  <div>
                    <h2 className="font-serif italic text-3xl sm:text-4xl text-white tracking-tight">
                      {PERSONAL_INFO.name}
                    </h2>
                    <p className="font-mono text-xs sm:text-sm text-[#00FF94] font-medium tracking-wide">
                      {PERSONAL_INFO.role}
                    </p>
                  </div>
                </div>

                {/* Quick Info Tags */}
                <div className="flex flex-wrap gap-2.5 text-xs font-mono text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                    <Mail className="w-3.5 h-3.5 text-[#00FF94]" />
                    <a href={PERSONAL_INFO.socials.officialEmail} className="hover:text-white transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </span>

                  {PERSONAL_INFO.freelanceEmail && (
                    <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      <Mail className="w-3.5 h-3.5 text-[#00BBF9]" />
                      <a href={PERSONAL_INFO.socials.freelanceEmail} className="hover:text-white transition-colors">
                        {PERSONAL_INFO.freelanceEmail}
                      </a>
                    </span>
                  )}

                  <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    {PERSONAL_INFO.location}
                  </span>

                  <span className="flex items-center gap-1.5 bg-[#00FF94]/10 text-[#00FF94] px-2.5 py-1 rounded-lg border border-[#00FF94]/20 font-semibold">
                    CGPA: {PERSONAL_INFO.cgpa}
                  </span>
                </div>

                {/* Social Badges Row */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00FF94]/40 text-slate-300 hover:text-[#00FF94] font-mono text-[11px] flex items-center gap-1.5 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00BBF9]/40 text-slate-300 hover:text-[#00BBF9] font-mono text-[11px] flex items-center gap-1.5 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-400/40 text-slate-300 hover:text-sky-400 font-mono text-[11px] flex items-center gap-1.5 transition-colors"
                  >
                    <TwitterXIcon className="w-3.5 h-3.5" />
                    <span>X</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 text-slate-300 hover:text-amber-400 font-mono text-[11px] flex items-center gap-1.5 transition-colors"
                  >
                    <LeetcodeIcon className="w-3.5 h-3.5" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>

              {/* Right: Status Pill & Stats Grid */}
              <div className="flex flex-col items-start md:items-end gap-3 border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF94]/10 border border-[#00FF94]/30 text-[#00FF94] text-[11px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF94] animate-ping" />
                  <span>Available for Full-Time & Internships</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-right w-full md:w-auto">
                  {PERSONAL_INFO.stats.slice(0, 2).map((stat, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/5 rounded-xl px-3 py-1.5 text-center md:text-right">
                      <div className="font-mono text-base font-bold text-white">{stat.value}</div>
                      <div className="font-mono text-[9px] uppercase tracking-wider text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════════
              CARD MODULE 2: EXECUTIVE SUMMARY
             ══════════════════════════════════════════════════════════════════════ */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-5 sm:p-6 mb-6">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#00BBF9] mb-2.5 flex items-center gap-2 font-bold">
              <Compass className="w-3.5 h-3.5" />
              Executive Summary & Technical Philosophy
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-normal">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-xs text-slate-400 mt-2 italic font-serif">
              "{PERSONAL_INFO.tagline}"
            </p>
          </div>

          {/* ══════════════════════════════════════════════════════════════════════
              CARD MODULE 3: EDUCATION & ACADEMIC ACHIEVEMENTS
             ══════════════════════════════════════════════════════════════════════ */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-5 sm:p-6 mb-6">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#00FF94] mb-4 flex items-center gap-2 font-bold">
              <GraduationCap className="w-4 h-4" />
              Education & Academic Honors
            </h3>
            
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/10 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <span className="font-bold text-white text-sm sm:text-base">
                  {PERSONAL_INFO.degree}
                </span>
                <span className="font-mono text-[#00FF94] text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#00FF94]/10 border border-[#00FF94]/20 w-fit">
                  {PERSONAL_INFO.period}
                </span>
              </div>
              
              <div className="text-xs sm:text-sm text-slate-300 flex flex-wrap items-center justify-between gap-2">
                <span>{PERSONAL_INFO.institution}</span>
                <span className="font-mono text-[#00FF94] font-bold">
                  Cumulative GPA: {PERSONAL_INFO.cgpa}
                </span>
              </div>

              {/* Relevant Coursework */}
              <div className="pt-2 border-t border-white/5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block mb-2">
                  Core Coursework & Specializations:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Data Structures & Algorithms (Java)',
                    'Deep Learning & Neural Networks',
                    'Object-Oriented System Design',
                    'Database Management Systems',
                    'Cloud Computing & Distributed Systems',
                    'Computer Networks & REST Protocols'
                  ].map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 font-mono text-[10px] text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════════
              CARD MODULE 4: TECHNICAL SKILLS MATRIX (CARD GRID)
             ══════════════════════════════════════════════════════════════════════ */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-5 sm:p-6 mb-6">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#8B5CF6] mb-4 flex items-center gap-2 font-bold">
              <Cpu className="w-4 h-4" />
              Technical Stack & Engineering Toolkit
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SKILLS_DATA.map((cat, idx) => {
                const colors = [
                  { border: 'border-[#00FF94]/20', title: 'text-[#00FF94]', tag: 'bg-[#00FF94]/10 text-[#00FF94]' },
                  { border: 'border-[#00BBF9]/20', title: 'text-[#00BBF9]', tag: 'bg-[#00BBF9]/10 text-[#00BBF9]' },
                  { border: 'border-[#8B5CF6]/20', title: 'text-[#8B5CF6]', tag: 'bg-[#8B5CF6]/10 text-[#8B5CF6]' }
                ];
                const theme = colors[idx % colors.length];

                return (
                  <div
                    key={cat.category}
                    className={`p-4 rounded-xl bg-white/[0.015] border ${theme.border} space-y-3 flex flex-col justify-between`}
                  >
                    <div>
                      <span className={`font-mono text-[11px] uppercase tracking-wider font-bold block mb-2.5 ${theme.title}`}>
                        {cat.category}
                      </span>
                      <div className="space-y-2">
                        {cat.skills.map((skill) => (
                          <div key={skill.name} className="space-y-0.5">
                            <div className="flex justify-between items-center text-xs">
                              <span className="font-semibold text-white">{skill.name}</span>
                              <span className="font-mono text-[10px] text-slate-400">{skill.level}%</span>
                            </div>
                            <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-[#00FF94] to-[#00BBF9]"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                            <p className="text-[10px] text-slate-400 font-sans">{skill.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════════
              CARD MODULE 5: FEATURED ENGINEERING PROJECTS
             ══════════════════════════════════════════════════════════════════════ */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-5 sm:p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#00BBF9] flex items-center gap-2 font-bold">
                <Briefcase className="w-4 h-4" />
                Key Engineering Projects & Implementations
              </h3>
              <span className="font-mono text-[10px] text-slate-400 hidden sm:inline">
                {PROJECTS_DATA.length} Systems Shipped
              </span>
            </div>

            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 sm:p-5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 space-y-3 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-white text-sm sm:text-base">
                        {proj.title}
                      </span>
                      {proj.badge && (
                        <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#00FF94]/10 text-[#00FF94] border border-[#00FF94]/20 font-semibold">
                          {proj.badge}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-[11px] text-[#00BBF9] shrink-0 font-medium">
                      {proj.category} · {proj.year}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {proj.tagline}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {proj.highlights.map((hl, hlIdx) => (
                      <li key={hlIdx} className="flex items-start gap-2">
                        <span className="text-[#00FF94] mt-0.5 shrink-0">✦</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {proj.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 font-mono text-[10px] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════════
              CARD MODULE 6: CERTIFICATIONS & COMPETITIVE HONORS
             ══════════════════════════════════════════════════════════════════════ */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-5 sm:p-6 mb-8">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#00FF94] mb-4 flex items-center gap-2 font-bold">
              <Award className="w-4 h-4" />
              Verified Certifications & Hackathon Accolades
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  title: 'NPTEL Elite Certification — Programming in Java',
                  issuer: 'IIT Kharagpur / NPTEL',
                  badge: 'Elite Distinction',
                  desc: 'Proctored national exam covering Java OOP, multi-threading, concurrency, memory models & collections.'
                },
                {
                  title: 'Smart India Hackathon (SIH) Lead Finalist',
                  issuer: 'Ministry of Education / AICTE',
                  badge: 'National Finalist',
                  desc: 'DietLens AI nutrition analysis platform built with MobileNetV2 (~121 Indian food classes) & Gemini 1.5.'
                },
                {
                  title: 'IBM Applied AI & Python for Data Science',
                  issuer: 'IBM Professional Credential',
                  badge: 'Certified Specialist',
                  desc: 'Machine learning pipelines, data preprocessing, REST APIs, and multi-modal AI model serving.'
                },
                {
                  title: 'DeepLearning.AI Deep Learning Specialization',
                  issuer: 'Coursera / DeepLearning.AI',
                  badge: 'Deep Learning',
                  desc: 'Convolutional neural networks, hyperparameter optimization, residual networks, and transfer learning.'
                }
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5 hover:border-[#00FF94]/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF94] shrink-0" />
                      <span className="font-bold text-xs text-white">{cert.title}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>{cert.issuer}</span>
                    <span className="text-[#00FF94] bg-[#00FF94]/10 px-1.5 py-0.5 rounded border border-[#00FF94]/20">
                      {cert.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════════
              BOTTOM ACTION DOCK WITH PROMINENT BACK BUTTONS
             ══════════════════════════════════════════════════════════════════════ */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
            {/* Bottom Back Button */}
            <button
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/15 hover:border-[#00FF94]/50 hover:bg-[#00FF94]/10 text-white font-mono text-xs transition-all group shadow-md"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#00FF94]" />
              <span className="font-bold">← Back to Portfolio</span>
            </button>

            {/* Print & Contact Direct */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={handlePrint}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 font-mono text-xs transition-colors"
              >
                <Printer className="w-4 h-4 text-[#00BBF9]" />
                <span>Print Resume</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00FF94] hover:bg-[#00FF94]/90 text-black font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)]"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
