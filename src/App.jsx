import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/common/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import AstronautScrollExperience from './components/sections/AstronautScrollExperience';
import ExperienceTimeline from './components/sections/ExperienceTimeline';
import Projects from './components/sections/Projects';
import VisionSection from './components/sections/VisionSection';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import ResumeModal from './components/sections/ResumeModal';

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #00FF94 0%, #00BBF9 50%, #8B5CF6 100%)',
        boxShadow: '0 0 10px rgba(0, 255, 148, 0.6)',
      }}
    />
  );
}

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F0EDE8] overflow-x-hidden selection:bg-neon/30 selection:text-neon">
      {/* Top 2px Laser Progress Bar */}
      <ScrollProgressBar />

      {/* Subtle Noise Texture */}
      <div className="noise-overlay" />

      {/* Custom Minimalist Glowing Cursor */}
      <CustomCursor />

      {/* Ambient Mouse Spotlight */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-radial-spotlight transition-opacity duration-300" />

      {/* Sticky Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <AstronautScrollExperience />
        <ExperienceTimeline />
        <VisionSection />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
