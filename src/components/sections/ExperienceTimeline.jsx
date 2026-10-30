import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GraduationCap, Trophy, Award, BookOpen, Briefcase,
  ChevronRight, ArrowUpRight
} from 'lucide-react';
import { TIMELINE_DATA } from '../../data/portfolioData';

const ICON_MAP = {
  Education:      GraduationCap,
  Hackathon:      Trophy,
  Certification:  Award,
  Specialization: BookOpen,
  Internship:     Briefcase,
};

/* ── Individual Timeline Row (matches reference 3-column grid) ── */
function TimelineRow({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px 0px' });
  const Icon = ICON_MAP[item.tag] || Award;
  const isLeft = item.side === 'left';

  return (
    <div
      ref={ref}
      className="grid items-start mb-16"
      style={{ gridTemplateColumns: '1fr 72px 1fr' }}
    >
      {/* ── Left Column ── */}
      <div style={{ paddingRight: '24px' }}>
        {isLeft ? (
          /* Left-side CARD */
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <TimelineCard item={item} />
          </motion.div>
        ) : (
          /* Left-side GHOST YEAR (right entries show year on left) */
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex flex-col items-end justify-center pt-[18px] h-full select-none"
          >
            <span
              className="block text-[52px] font-extrabold leading-none tracking-[-0.04em]"
              style={{ color: 'transparent', WebkitTextStroke: `1.5px ${item.accent}33` }}
            >
              {item.year.split('–')[0].trim()}
            </span>
            <span
              className="font-mono text-[10px] tracking-[0.08em] mt-2"
              style={{ color: `${item.accent}66` }}
            >
              {item.period}
            </span>
            <div className="mt-3" style={{ color: `${item.accent}40` }}>
              <Icon size={18} />
            </div>
          </motion.div>
        )}
      </div>

      {/* ── Center Spine: Node + connector lines ── */}
      <div className="flex flex-col items-center relative pt-[18px]">
        {/* Glowing node circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.08 + 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full"
          style={{
            background: `radial-gradient(circle at 35% 30%, ${item.accent}40, ${item.accent}0a 70%), #0a0a0d`,
            border: `1.5px solid ${item.accent}72`,
            boxShadow: `0 0 0 4px ${item.accent}0d, 0 0 28px ${item.accent}33`,
            color: item.accent,
          }}
        >
          <Icon size={20} strokeWidth={1.75} />
        </motion.div>

        {/* Horizontal connector line to the active side */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.08 + 0.3 }}
          style={{
            position: 'absolute',
            top: '42px',
            [isLeft ? 'right' : 'left']: '50%',
            width: '100%',
            height: '1px',
            background: `linear-gradient(to ${isLeft ? 'left' : 'right'}, ${item.accent}66, ${item.accent}14)`,
            transformOrigin: isLeft ? 'right center' : 'left center',
          }}
        />
      </div>

      {/* ── Right Column ── */}
      <div style={{ paddingLeft: '24px' }}>
        {!isLeft ? (
          /* Right-side CARD */
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <TimelineCard item={item} />
          </motion.div>
        ) : (
          /* Right-side GHOST YEAR (left entries show year on right) */
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex flex-col items-start justify-center pt-[18px] h-full select-none"
          >
            <span
              className="block text-[52px] font-extrabold leading-none tracking-[-0.04em]"
              style={{ color: 'transparent', WebkitTextStroke: `1.5px ${item.accent}33` }}
            >
              {item.year.split('–')[0].trim()}
            </span>
            <span
              className="font-mono text-[10px] tracking-[0.08em] mt-2"
              style={{ color: `${item.accent}66` }}
            >
              {item.period}
            </span>
            <div className="mt-3" style={{ color: `${item.accent}40` }}>
              <Icon size={18} />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── Timeline Card ── */
function TimelineCard({ item }) {
  const Icon = ICON_MAP[item.tag] || Award;
  return (
    <article
      className="relative rounded-2xl overflow-hidden transition-all duration-400 group"
      style={{
        background: '#0c0c0f',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 4px 24px -4px rgba(0,0,0,0.5)',
      }}
    >
      {/* Top accent stripe */}
      <div
        className="h-[2px]"
        style={{ background: `linear-gradient(90deg, ${item.accent}, ${item.accent}26 80%, transparent)` }}
      />

      {/* Card Body */}
      <div style={{ padding: '20px 24px 24px' }}>
        {/* Tag + Title row */}
        <div className="flex items-start gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: `${item.accent}14`,
              border: `1px solid ${item.accent}30`,
              color: item.accent,
            }}
          >
            <Icon size={18} strokeWidth={1.6} />
          </div>
          <div>
            <p
              className="font-mono text-[9px] uppercase tracking-[0.2em] mb-1"
              style={{ color: `${item.accent}cc`, fontWeight: 600 }}
            >
              {item.year} · {item.tag}
            </p>
            <h3
              className="font-sans font-bold text-[#F0EDE8] leading-tight"
              style={{ fontSize: '1rem', letterSpacing: '-0.02em' }}
            >
              {item.title}
            </h3>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mb-3"
          style={{ height: '1px', background: `linear-gradient(90deg, rgba(242,237,232,0.14), transparent)` }}
        />

        {/* Meta info */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[0.8rem] text-[#7a7068] font-sans">{item.institution}</span>
          <span className="w-px h-3" style={{ background: 'rgba(242,237,232,0.14)' }} />
          <span className="font-mono text-[0.72rem] text-[#7a7068] tracking-[0.04em]">{item.grade}</span>
        </div>

        {/* Highlights */}
        <ul className="space-y-2.5">
          {item.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="flex items-start gap-2.5"
            >
              <ChevronRight
                size={14}
                className="shrink-0 mt-[3px]"
                style={{ color: item.accent, opacity: 0.8 }}
              />
              <span className="text-[13px] leading-relaxed text-white/55 font-sans">{h}</span>
            </motion.li>
          ))}
        </ul>

        {/* Footer row */}
        <div
          className="flex items-center justify-between mt-4 pt-3 rounded-xl cursor-pointer group-hover:bg-white/3 transition-all"
          style={{
            padding: '10px 14px',
            background: '#080a0b',
            border: '1px solid rgba(242,237,232,0.08)',
            borderRadius: '8px',
          }}
        >
          <span className="text-[0.82rem] text-[#7a7068] font-sans">{item.location}</span>
          <ArrowUpRight size={14} style={{ color: item.accent }} />
        </div>
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px transition-all duration-400"
        style={{ background: `linear-gradient(90deg, transparent, ${item.accent}00, transparent)` }}
      />
    </article>
  );
}

/* ── Mobile Timeline Card List (< lg) ── */
function MobileTimeline() {
  return (
    <div className="space-y-6">
      {TIMELINE_DATA.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
        >
          <TimelineCard item={item} />
        </motion.div>
      ))}
    </div>
  );
}

/* ── Living Laser Spine ── */
function LaserSpine({ totalItems }) {
  const ref = useRef(null);
  const { scrollYProgress } = useInView(ref);

  return (
    <div
      ref={ref}
      className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none"
      style={{ background: 'rgba(255,255,255,0.05)' }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full origin-top"
        style={{ height: '100%' }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      >
        <div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(180deg, #00FF94 0%, rgba(59,130,246,0.5) 50%, rgba(168,85,247,0.3) 100%)',
            boxShadow: '0 0 10px rgba(0,255,148,0.4)',
          }}
        />
      </motion.div>
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-28 px-4"
      style={{ background: '#07070a' }}
    >
      {/* Background ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div style={{ position:'absolute', top:'5%', left:'12%', width:'500px', height:'500px', borderRadius:'50%', background:'rgba(16,185,129,0.03)', filter:'blur(120px)' }} />
        <div style={{ position:'absolute', bottom:'10%', right:'8%', width:'400px', height:'400px', borderRadius:'50%', background:'rgba(59,130,246,0.025)', filter:'blur(100px)' }} />
        <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'300px', height:'300px', borderRadius:'50%', background:'rgba(168,85,247,0.018)', filter:'blur(80px)' }} />
      </div>

      <div className="relative z-10 max-w-[1080px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3.5 mb-[18px]"
          >
            <span style={{ width:'28px', height:'1px', background:'rgba(16,185,129,0.6)', display:'block' }} />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color:'#10b981' }}>Experience & Education</span>
            <span style={{ width:'28px', height:'1px', background:'rgba(16,185,129,0.6)', display:'block' }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-sans font-extrabold tracking-[-0.035em] leading-[1.1] text-white mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)' }}
          >
            Workshops &{' '}
            <span style={{ color:'transparent', WebkitTextStroke:'1.2px rgba(255,255,255,0.15)' }}>
              Milestones
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="font-sans text-[14px] leading-[1.7] text-white/35 max-w-[400px] mx-auto"
          >
            A timeline of education, hackathons, certifications, and hands-on development milestones.
          </motion.p>
        </div>

        {/* Desktop Dual-Column Timeline */}
        <div className="relative hidden lg:block">
          <LaserSpine totalItems={TIMELINE_DATA.length} />
          {TIMELINE_DATA.map((item, i) => (
            <TimelineRow key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Mobile Single-Column */}
        <div className="lg:hidden">
          <MobileTimeline />
        </div>
      </div>
    </section>
  );
}
