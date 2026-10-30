import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal as TermIcon } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../../data/portfolioData';

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// 1. Go to https://emailjs.com and create a FREE account
// 2. Add Email Service → Connect your Gmail
// 3. Create Email Template with variables: {{from_name}}, {{from_email}}, {{phone}}, {{message}}
// 4. Paste your Service ID, Template ID, and Public Key below
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'aBcDeFgHiJkLmNoP'
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: 'IN +91',
    phone: '',
    message: '',
  });

  const [powerOn, setPowerOn] = useState(true);
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ state: 'error', message: '⚠ Please complete all required fields.' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus({ state: 'error', message: '⚠ Invalid email address detected.' });
      return;
    }

    setStatus({ state: 'transmitting', message: 'Encrypting and transmitting packet...' });

    const fireConfetti = () => {
      confetti({ particleCount: 75, spread: 70, origin: { y: 0.7 }, colors: ['#00FF94', '#00BBF9', '#8B5CF6', '#A7F3D0'] });
      setTimeout(() => confetti({ particleCount: 40, angle: 60, spread: 50, origin: { x: 0 }, colors: ['#00FF94', '#06b6d4'] }), 250);
      setTimeout(() => confetti({ particleCount: 40, angle: 120, spread: 50, origin: { x: 1 }, colors: ['#8B5CF6', '#ec4899'] }), 450);
    };

    // ── Try EmailJS first ──────────────────────────────────────────────────────
    if (EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID') {
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name:    formData.name,
            from_email:   formData.email,
            phone:        `${formData.countryCode} ${formData.phone}`.trim(),
            message:      formData.message,
            to_email:     PERSONAL_INFO.email,
          },
          EMAILJS_PUBLIC_KEY
        );
        fireConfetti();
        setStatus({ state: 'success', message: '✦ Transmission acknowledged. Message delivered!' });
        setTimeout(() => {
          setFormData({ name: '', email: '', countryCode: 'IN +91', phone: '', message: '' });
          setStatus({ state: 'idle', message: '' });
        }, 4500);
      } catch (err) {
        console.error('EmailJS error:', err);
        setStatus({ state: 'error', message: '⚠ Transmission failed. Please try again.' });
      }
      return;
    }

    // ── Fallback: open mail client (works before EmailJS is configured) ────────
    await new Promise(r => setTimeout(r, 800));
    const subject = `[Terminal Inquiry] Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.countryCode} ${formData.phone}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    fireConfetti();
    setStatus({ state: 'success', message: '✦ Transmission acknowledged. Opening mail client...' });
    setTimeout(() => {
      setFormData({ name: '', email: '', countryCode: 'IN +91', phone: '', message: '' });
      setStatus({ state: 'idle', message: '' });
    }, 4500);
  };

  // Derived state for button label
  const buttonLabel = status.state === 'transmitting'
    ? 'TRANSMITTING...'
    : status.state === 'success'
    ? '✦ SENT SUCCESSFULLY'
    : status.state === 'error'
    ? '⚠ RETRY TRANSMISSION'
    : '↳ SEND MESSAGE';

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 md:py-28 px-3.5 sm:px-8 md:px-12 bg-[#0c0d10] text-[#F0EDE8] overflow-hidden select-none"
    >
      {/* Ambient Lighting & Desk Depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00FF94]/5 blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/5 blur-[180px]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#060709] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Centered Section Watermark */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.6em] text-white/30 font-semibold"
          >
            C O N T A C T &nbsp; M E
          </motion.p>
        </div>

        {/* ── Main Desk Workstation Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ══════════════════════════════════════════════════════════════════════
              LEFT PANEL: "Let's build something meaningful." & Desk Accessories
             ══════════════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col justify-between space-y-8 sm:space-y-10"
          >
            {/* Glass Narrative Box */}
            <div className="p-6 sm:p-10 rounded-3xl bg-[#12141a]/80 border border-white/10 backdrop-blur-xl shadow-2xl relative group hover:border-[#00FF94]/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF94]/10 rounded-full blur-3xl pointer-events-none" />

              <h2
                className="font-serif text-white tracking-tight leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)' }}
              >
                Let's build <br />
                something <br />
                <span className="italic text-[#00FF94] font-normal drop-shadow-[0_0_25px_rgba(0,255,148,0.4)]">
                  meaningful.
                </span>
              </h2>

              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Open for engineering roles, AI research collaborations, and full-stack architecture projects. Send a transmission through the retro terminal.
              </p>

              {/* Direct Mail Chips */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                  Direct Inquiries:
                </span>
                <div className="flex flex-col gap-1.5 font-mono text-[11px]">
                  <a
                    href={PERSONAL_INFO.socials.officialEmail}
                    className="inline-flex items-center gap-2 text-[#00FF94] hover:underline"
                  >
                    <span>✦ Official: {PERSONAL_INFO.email}</span>
                  </a>
                  {PERSONAL_INFO.freelanceEmail && (
                    <a
                      href={PERSONAL_INFO.socials.freelanceEmail}
                      className="inline-flex items-center gap-2 text-[#00BBF9] hover:underline"
                    >
                      <span>✦ Freelance: {PERSONAL_INFO.freelanceEmail}</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00FF94] animate-ping" />
                <span className="font-mono text-[11px] text-[#00FF94] uppercase tracking-wider font-semibold">
                  Signal Frequency Active · 24/7
                </span>
              </div>
            </div>

            {/* Realistic Desk Accessories on the Left */}
            <div className="hidden sm:flex items-end gap-6 pl-4 opacity-85">
              {/* Pen Cup Holder */}
              <div className="relative flex flex-col items-center">
                {/* Pens sticking out */}
                <div className="flex gap-1.5 -mb-2 relative z-0">
                  <div className="w-1.5 h-12 bg-blue-600 rounded-t-sm rotate-[-12deg] shadow-md" />
                  <div className="w-2 h-14 bg-cyan-400 rounded-t-sm rotate-[-3deg] shadow-md" />
                  <div className="w-1.5 h-13 bg-neutral-800 rounded-t-sm rotate-[10deg] shadow-md" />
                  <div className="w-2 h-11 bg-slate-300 rounded-t-sm rotate-[22deg] shadow-md" />
                </div>
                {/* Dark Metallic Pen Holder Cup */}
                <div className="w-12 h-14 rounded-b-xl rounded-t-sm bg-gradient-to-b from-[#252830] to-[#121317] border border-white/15 shadow-xl relative z-10 flex items-center justify-center">
                  <div className="w-8 h-1 bg-white/10 rounded-full" />
                </div>
                <span className="font-mono text-[8px] text-white/30 mt-1 uppercase tracking-widest">DESK·ACCESS</span>
              </div>

              {/* Coaster & Drink Ring */}
              <div className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.02] shadow-inner flex items-center justify-center">
                <div className="w-9 h-9 rounded-full border border-white/5 bg-black/40" />
              </div>
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════════════════════════════════
              RIGHT WORKSTATION: Mini Tower + CRT Monitor + Keyboard + Mouse
             ══════════════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 flex flex-col items-center"
          >
            {/* Desktop Rig Row (Mini Tower on Left + CRT Monitor on Right) */}
            <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-center gap-6 mb-4">
              
              {/* ── 1. RETRO MINI TOWER (CPU) ── */}
              <div className="hidden md:flex flex-col justify-between w-28 h-[370px] rounded-2xl bg-[#dad5cc] border-2 border-[#b8b3a8] retro-beige-bevel p-3 text-slate-800 shadow-2xl relative shrink-0">
                {/* Top Vents & Label */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono font-bold text-[9px] tracking-wider text-slate-700">RETRO SYS</span>
                    <span className="font-mono text-[7px] text-slate-500">RS-9740</span>
                  </div>

                  {/* Power Button & LEDs */}
                  <div className="p-2 rounded-lg bg-[#c8c3ba] border border-black/10 mb-4 space-y-2">
                    <button
                      onClick={() => setPowerOn(!powerOn)}
                      className="w-full py-1.5 rounded bg-[#e8e4dc] active:bg-[#bcb7ae] border-b-2 border-black/20 text-[8px] font-mono font-bold uppercase tracking-wider text-slate-800 shadow-sm"
                      title="Toggle CRT Power"
                    >
                      POWER
                    </button>
                    <div className="flex justify-around items-center pt-1">
                      <div className="flex items-center gap-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${powerOn ? 'bg-emerald-500 shadow-[0_0_6px_#10b981]' : 'bg-slate-400'}`} />
                        <span className="text-[7px] font-mono text-slate-600">PWR</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${status.state === 'transmitting' ? 'bg-amber-500 animate-ping' : 'bg-slate-400'}`} />
                        <span className="text-[7px] font-mono text-slate-600">HDD</span>
                      </div>
                    </div>
                  </div>

                  {/* Floppy 3.5" Drive Bay */}
                  <div className="p-2 rounded bg-[#bcb7ae] border border-black/20 space-y-1 mb-4">
                    <div className="w-full h-1 bg-black/60 rounded-full" />
                    <div className="flex justify-between items-center">
                      <div className="w-1.5 h-1.5 rounded-sm bg-black/40" />
                      <div className="w-3 h-1 bg-white/70 rounded-sm border border-black/30" />
                    </div>
                  </div>

                  {/* CD-ROM Bay */}
                  <div className="p-1.5 rounded bg-[#c5c0b6] border border-black/15 flex justify-between items-center">
                    <span className="text-[7px] font-mono text-slate-600">COMPACT DISC</span>
                    <div className="w-2 h-1 bg-slate-400 rounded-sm" />
                  </div>
                </div>

                {/* Bottom Air Intake Grill */}
                <div className="space-y-1 pt-4 border-t border-slate-400/30">
                  <div className="w-full h-0.5 bg-slate-400/40 rounded-full" />
                  <div className="w-full h-0.5 bg-slate-400/40 rounded-full" />
                  <div className="w-full h-0.5 bg-slate-400/40 rounded-full" />
                  <div className="text-center font-mono text-[7px] text-slate-500 pt-1">
                    v2.4.1 · 64MB
                  </div>
                </div>
              </div>

              {/* ── 2. RETRO CRT MONITOR ── */}
              <div className="w-full max-w-2xl rounded-3xl bg-[#dad5cc] border-2 sm:border-4 border-[#b8b3a8] retro-beige-bevel p-2.5 sm:p-6 shadow-2xl relative">
                
                {/* CRT Screen Bezel */}
                <div className="rounded-2xl bg-[#16171d] p-2.5 sm:p-4 border-2 sm:border-4 border-[#30323a] shadow-[inset_0_4px_12px_rgba(0,0,0,0.9)] relative overflow-hidden crt-screen-curvature">
                  
                  {/* CRT Scanline Overlay */}
                  <div className="crt-scanlines absolute inset-0 z-20 pointer-events-none" />

                  {/* Screen Content */}
                  {powerOn ? (
                    <div className="relative z-10 space-y-4 font-mono text-slate-300">
                      
                      {/* CRT Header Bar */}
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#00BBF9]">
                          SECURE CHANNEL
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>LIVE</span>
                        </div>
                      </div>

                      {/* Terminal Banner */}
                      <div className="text-center py-1">
                        <h3 className="text-sm sm:text-base font-bold text-[#F0EDE8] tracking-widest">
                          CONTACT TERMINAL
                        </h3>
                        <p className="text-[10px] text-slate-400">
                          v2.4.1 — ENCRYPTED
                        </p>
                      </div>

                      {/* Terminal Form */}
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-3.5 text-xs" noValidate>
                        
                        {/* Two Columns: Identifier & Comm Channel */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {/* IDENTIFIER */}
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider text-slate-400 flex items-center gap-1">
                              <span className="text-[#00FF94]">✦</span> IDENTIFIER
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              onFocus={() => setActiveField('name')}
                              onBlur={() => setActiveField(null)}
                              placeholder="full name"
                              required
                              className="w-full px-3 py-2 rounded-lg bg-[#0b0c10]/90 border border-white/15 focus:border-[#00FF94] focus:ring-1 focus:ring-[#00FF94] text-white font-mono text-xs placeholder:text-slate-600 outline-none transition-colors"
                            />
                          </div>

                          {/* COMM CHANNEL */}
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-wider text-slate-400 flex items-center gap-1">
                              <span className="text-[#00BBF9]">✦</span> COMM CHANNEL
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onFocus={() => setActiveField('email')}
                              onBlur={() => setActiveField(null)}
                              placeholder="your@email.com"
                              required
                              className="w-full px-3 py-2 rounded-lg bg-[#0b0c10]/90 border border-white/15 focus:border-[#00BBF9] focus:ring-1 focus:ring-[#00BBF9] text-white font-mono text-xs placeholder:text-slate-600 outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* SIGNAL LINE (Phone Number) */}
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase tracking-wider text-slate-400 flex items-center gap-1">
                            <span className="text-purple-400">✦</span> SIGNAL LINE
                          </label>
                          <div className="flex gap-2">
                            <select
                              name="countryCode"
                              value={formData.countryCode}
                              onChange={handleChange}
                              className="px-2.5 py-2 rounded-lg bg-[#0b0c10]/90 border border-white/15 text-white font-mono text-xs outline-none"
                            >
                              <option value="IN +91">IN +91</option>
                              <option value="US +1">US +1</option>
                              <option value="UK +44">UK +44</option>
                              <option value="SG +65">SG +65</option>
                              <option value="AE +971">AE +971</option>
                            </select>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="(555) 000-0000"
                              className="w-full px-3 py-2 rounded-lg bg-[#0b0c10]/90 border border-white/15 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-white font-mono text-xs placeholder:text-slate-600 outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* MESSAGE & Character Counter */}
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-[10px] text-slate-400">
                            <span className="flex items-center gap-1">
                              <span className="text-emerald-400">✦</span> MESSAGE
                            </span>
                            <span className="font-mono text-slate-500">
                              {formData.message.length}/250
                            </span>
                          </div>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            maxLength={250}
                            rows={3}
                            placeholder="Write your message here..."
                            required
                            className="w-full px-3 py-2 rounded-lg bg-[#0b0c10]/90 border border-white/15 focus:border-[#00FF94] focus:ring-1 focus:ring-[#00FF94] text-white font-mono text-xs placeholder:text-slate-600 outline-none transition-colors resize-none"
                          />
                        </div>

                        {/* Submit Button & Status Indicator */}
                        <div className="pt-1">
                          <button
                            type="submit"
                            disabled={status.state === 'transmitting' || status.state === 'success'}
                            className={`w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer
                              ${
                                status.state === 'success'
                                  ? 'bg-emerald-700 shadow-[0_0_20px_rgba(0,255,148,0.35)] text-white'
                                  : status.state === 'error'
                                  ? 'bg-gradient-to-r from-red-700 via-rose-600 to-red-700 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                                  : 'bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 hover:from-blue-600 hover:to-purple-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]'
                              }`}
                          >
                            <Send className="w-3.5 h-3.5" />
                            <span>{buttonLabel}</span>
                          </button>

                          {status.message && (
                            <p className={`font-mono text-[10px] text-center mt-2 animate-pulse ${
                              status.state === 'error' ? 'text-red-400' :
                              status.state === 'success' ? 'text-[#00FF94]' :
                              'text-amber-400'
                            }`}>
                              {status.message}
                            </p>
                          )}
                        </div>
                      </form>
                    </div>
                  ) : (
                    /* Power Off State */
                    <div className="h-[310px] flex flex-col items-center justify-center text-slate-600 font-mono text-xs space-y-2">
                      <TermIcon className="w-8 h-8 opacity-40" />
                      <span>TERMINAL STANDBY</span>
                      <button
                        onClick={() => setPowerOn(true)}
                        className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white text-[10px]"
                      >
                        Click to Power On
                      </button>
                    </div>
                  )}
                </div>

                {/* CRT Chassis Bottom Branding & Monitor Buttons */}
                <div className="mt-3 flex items-center justify-between text-slate-700 px-2">
                  <div>
                    <span className="font-mono font-bold text-[10px] tracking-wider block">RETRO SYSTEMS</span>
                    <span className="font-mono text-[7px] text-slate-500 block">CRS-1042B · 15" · 0.28mm</span>
                  </div>

                  {/* Tactile Hardware Control Buttons */}
                  <div className="flex items-center gap-1 bg-[#c8c3ba] p-1 rounded-md border border-black/15 shadow-inner">
                    <button className="w-4 h-3 bg-[#e8e4dc] rounded-sm text-[7px] font-bold">▲</button>
                    <button className="w-4 h-3 bg-[#e8e4dc] rounded-sm text-[7px] font-bold">▼</button>
                    <button className="w-4 h-3 bg-[#e8e4dc] rounded-sm text-[7px] font-bold">◀</button>
                    <button className="w-4 h-3 bg-[#e8e4dc] rounded-sm text-[7px] font-bold">▶</button>
                    <button className="px-1 h-3 bg-[#e8e4dc] rounded-sm text-[6px] font-bold uppercase">MENU</button>
                    <button
                      onClick={() => setPowerOn(!powerOn)}
                      className={`w-3.5 h-3.5 rounded-full ml-1 border border-black/20 ${powerOn ? 'bg-emerald-500 shadow-[0_0_5px_#10b981]' : 'bg-slate-500'}`}
                      title="Monitor Power"
                    />
                  </div>
                </div>

                {/* CRT Monitor Stand Base */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-4 bg-[#beb9af] rounded-b-xl border-b-2 border-black/20 shadow-md" />
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════════════
                3. RETRO MECHANICAL KEYBOARD & MOUSEPAD SETUP
               ══════════════════════════════════════════════════════════════════ */}
            <div className="w-full max-w-2xl flex items-center justify-between gap-4 mt-6">
              
              {/* Mechanical Keyboard */}
              <div className="flex-1 rounded-xl bg-[#dad5cc] border-2 border-[#b8b3a8] retro-beige-bevel p-1.5 sm:p-2.5 shadow-xl overflow-hidden">
                
                {/* Function Key Row */}
                <div className="flex justify-between gap-1 mb-1.5 text-[7px] font-mono text-slate-700">
                  {['ESC', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'].map((k) => (
                    <div key={k} className="retro-key-cap px-1.5 py-0.5 rounded text-center font-bold">
                      {k}
                    </div>
                  ))}
                  {/* Lock LEDs */}
                  <div className="flex items-center gap-1 pl-2">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />
                    <span className="text-[5px] text-slate-500 font-bold">NUM</span>
                  </div>
                </div>

                {/* Number Row */}
                <div className="flex justify-between gap-1 mb-1 text-[7px] font-mono text-slate-700">
                  {['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BKSP'].map((k) => (
                    <div key={k} className="retro-key-cap flex-1 py-0.5 rounded text-center font-bold">
                      {k}
                    </div>
                  ))}
                </div>

                {/* QWERTY Row */}
                <div className="flex justify-between gap-1 mb-1 text-[7px] font-mono text-slate-700">
                  {['TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'].map((k) => (
                    <div key={k} className="retro-key-cap flex-1 py-0.5 rounded text-center font-bold">
                      {k}
                    </div>
                  ))}
                </div>

                {/* ASDF Row */}
                <div className="flex justify-between gap-1 mb-1 text-[7px] font-mono text-slate-700">
                  {['CAPS', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'ENTER'].map((k) => (
                    <div key={k} className="retro-key-cap flex-1 py-0.5 rounded text-center font-bold">
                      {k}
                    </div>
                  ))}
                </div>

                {/* Bottom Spacebar Row */}
                <div className="flex justify-between gap-1 text-[7px] font-mono text-slate-700">
                  <div className="retro-key-cap px-2 py-0.5 rounded font-bold">CTRL</div>
                  <div className="retro-key-cap px-2 py-0.5 rounded font-bold">ALT</div>
                  <div className="retro-key-cap flex-[5] py-0.5 rounded text-center font-bold" />
                  <div className="retro-key-cap px-2 py-0.5 rounded font-bold">ALT</div>
                  <div className="retro-key-cap px-2 py-0.5 rounded font-bold">CTRL</div>
                </div>
              </div>

              {/* ── 4. RETRO MOUSEPAD & MOUSE & YELLOW STICKY NOTE ── */}
              <div className="hidden sm:flex flex-col items-center relative shrink-0">
                {/* Yellow Post-it Sticky Note */}
                <div className="w-14 h-14 rounded bg-[#fef08a] text-slate-900 p-1.5 shadow-md rotate-[-4deg] text-[6.5px] font-mono leading-tight mb-2 border border-amber-300">
                  <div className="font-bold uppercase pb-0.5 border-b border-amber-400/40">NOTE:</div>
                  <span>Coffee @ 4pm. Ship AI models!</span>
                </div>

                {/* Mousepad & Vintage Ball Mouse */}
                <div className="w-20 h-28 rounded-2xl bg-[#1e2029] border border-white/10 p-2 shadow-inner flex items-center justify-center relative">
                  {/* Vintage Beige 2-Button Mouse */}
                  <div className="w-12 h-20 rounded-t-2xl rounded-b-xl bg-[#dad5cc] border border-[#b8b3a8] retro-beige-bevel flex flex-col justify-between p-1 shadow-md relative">
                    {/* Two Mouse Buttons */}
                    <div className="flex gap-0.5 border-b border-slate-400 pb-1">
                      <div className="flex-1 h-5 bg-[#e8e4dc] rounded-tl-xl border-r border-slate-300" />
                      <div className="flex-1 h-5 bg-[#e8e4dc] rounded-tr-xl" />
                    </div>
                    {/* Mouse Ball Seam & Logo */}
                    <div className="text-center font-mono text-[5px] text-slate-600 pb-1 font-bold">
                      RS-M200
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
