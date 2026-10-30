import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, User, Rocket, Sparkles, Folder, 
  Orbit, Mail, FileText, Menu, X 
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home',       href: '#home',       icon: Home },
  { label: 'About',      href: '#about',      icon: User },
  { label: 'Experience', href: '#experience', icon: Rocket },
  { label: 'Vision',     href: '#vision',     icon: Sparkles },
  { label: 'Projects',   href: '#projects',   icon: Folder },
  { label: 'Skills',     href: '#skills',     icon: Orbit },
  { label: 'Contact',    href: '#contact',    icon: Mail },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'experience', 'vision', 'projects', 'skills', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#050505]/75 backdrop-blur-xl border-b border-white/5'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Left: Brand Monogram */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full border border-neon/40 flex items-center justify-center bg-neon/5 group-hover:bg-neon/15 group-hover:border-neon transition-all">
              <span className="font-serif italic font-bold text-neon text-sm">K</span>
            </div>
            <span className="font-display font-bold text-xs tracking-[0.25em] text-cream uppercase group-hover:text-white transition-colors">
              Kabilan
            </span>
          </a>

          {/* Center: Iconic Floating Pill Dock (Exact Reference Design) */}
          <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0d12]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
            {NAV_ITEMS.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative p-2.5 rounded-full text-white/50 hover:text-white transition-colors flex items-center justify-center group"
                  aria-label={item.label}
                >
                  {/* Glowing Active Background Badge */}
                  {isActive && (
                    <motion.div
                      layoutId="activeDockPill"
                      className="absolute inset-0 rounded-full bg-[#00FF94]/15 border border-[#00FF94]/50 shadow-[0_0_15px_rgba(0,255,148,0.35)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Icon */}
                  <Icon
                    size={16}
                    className={`relative z-10 transition-colors ${
                      isActive ? 'text-[#00FF94]' : 'group-hover:text-white'
                    }`}
                  />

                  {/* Animated Hover Tooltip */}
                  <AnimatePresence>
                    {hoveredItem === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.9 }}
                        transition={{ duration: 0.15 }}
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-md bg-black/90 border border-white/15 backdrop-blur-md shadow-xl pointer-events-none z-30 whitespace-nowrap"
                      >
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#00FF94] font-semibold">
                          {item.label}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </a>
              );
            })}
          </nav>

          {/* Right: Resume CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 border border-neon/40 hover:border-neon rounded-full px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] text-neon uppercase bg-neon/5 hover:bg-neon/15 hover:shadow-[0_0_15px_rgba(0,255,148,0.25)] transition-all font-semibold"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg text-slate-300 hover:text-white border border-white/10 bg-black/40"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed inset-x-0 top-[65px] z-40 p-4 md:hidden"
          >
            <div className="bg-[#090b0e]/95 border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4 backdrop-blur-2xl">
              <nav className="grid grid-cols-2 gap-2">
                {NAV_ITEMS.map((item) => {
                  const id = item.href.substring(1);
                  const isActive = activeSection === id;
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border transition-all ${
                        isActive
                          ? 'bg-[#00FF94]/15 border-[#00FF94]/40 text-[#00FF94]'
                          : 'bg-white/[0.02] border-white/5 text-slate-300 hover:text-white'
                      }`}
                    >
                      <Icon size={16} />
                      <span className="font-mono text-xs tracking-wider uppercase font-semibold">
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 rounded-full border border-neon/50 text-neon font-mono text-xs uppercase tracking-widest bg-neon/10 flex items-center justify-center gap-2 font-semibold shadow-[0_0_15px_rgba(0,255,148,0.2)]"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
