import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Orbit } from 'lucide-react';
/* ─── Skill data: each pill gets baseX/Y position, a CSS drift class + delay ─── */
const CLUSTERS = [
  // ── 1. FRONTIER AI ── Violet nebula, left
  {
    id: 'cluster-ai',
    title: 'FRONTIER AI',
    color: '#A855F7',
    nebula: 'left-[6%] top-[30%] w-[380px] h-[380px]',
    nebulaGrad: 'radial-gradient(circle, rgba(168,85,247,0.50) 0%, rgba(139,92,246,0.22) 42%, transparent 70%)',
    labelPos: 'left-[12%] top-[65%]',
    labelColor: 'text-purple-400',
    glowDrop: '0 0 14px rgba(168,85,247,0.8)',
    skills: [
      { name: 'Google Gemini 1.5', x: 16, y: 34, dc: 'anim-float-a anim-d1', level: '94%', project: 'DietLens Dual-Pathway Vision', snippet: "gemini.generate_content([image, prompt])" },
      { name: 'LLM Fine-tuning',   x: 10, y: 50, dc: 'anim-float-b anim-d2', level: '90%', project: 'NeuralForge Multi-Agent',     snippet: "trainer.train()" },
      { name: 'Deep Learning',      x: 23, y: 55, dc: 'anim-float-c anim-d3', level: '93%', project: 'MobileNetV2 / ResNet50',       snippet: "model.fit(train_ds, epochs=25)" },
      { name: 'RAG & Vector Search',x:  7, y: 66, dc: 'anim-float-a anim-d4', level: '86%', project: 'ChromaDB Code Embeddings',    snippet: "collection.query(texts=[q], n=4)" },
      { name: 'LangChain Agents',   x: 19, y: 70, dc: 'anim-float-b anim-d5', level: '85%', project: 'Autonomous DAG Workflows',     snippet: "agent_executor.invoke({'input':q})" },
      { name: 'Data Analysis',      x:  8, y: 40, dc: 'anim-float-c anim-d6', level: '92%', project: 'Pandas & Statistical EDA',     snippet: "df.describe()" },
    ],
  },

  // ── 2. FRAMEWORKS ── Emerald nebula, top center-left
  {
    id: 'cluster-frameworks',
    title: 'FRAMEWORKS',
    color: '#00FF94',
    nebula: 'left-[28%] top-[8%] w-[400px] h-[400px]',
    nebulaGrad: 'radial-gradient(circle, rgba(0,255,148,0.50) 0%, rgba(16,185,129,0.20) 44%, transparent 70%)',
    labelPos: 'left-[36%] top-[40%]',
    labelColor: 'text-emerald-400',
    glowDrop: '0 0 14px rgba(0,255,148,0.8)',
    skills: [
      { name: 'TensorFlow',          x: 37, y: 20, dc: 'anim-float-b anim-d1', level: '92%', project: 'DietLens Model Architecture',  snippet: "tf.keras.Sequential([...])" },
      { name: 'Keras',               x: 45, y: 24, dc: 'anim-float-a anim-d2', level: '90%', project: 'Transfer Learning Layers',     snippet: "Dense(121, activation='softmax')" },
      { name: 'OpenCV',              x: 31, y: 26, dc: 'anim-float-c anim-d3', level: '88%', project: 'Turmeric Leaf Disease',        snippet: "cv2.inRange(hsv, lower, upper)" },
      { name: 'MobileNetV2',         x: 41, y: 32, dc: 'anim-float-a anim-d4', level: '95%', project: 'Sub-450ms Vision Classifier',  snippet: "MobileNetV2(weights='imagenet')" },
      { name: 'Scikit-Learn',        x: 33, y: 42, dc: 'anim-float-b anim-d5', level: '90%', project: 'Classification Pipeline',     snippet: "classification_report(y_true, y_pred)" },
      { name: 'Pandas',              x: 25, y: 36, dc: 'anim-float-c anim-d6', level: '94%', project: '135k+ Corpus Cleaning',        snippet: "df.groupby('class').count()" },
      { name: 'NumPy',               x: 23, y: 24, dc: 'anim-float-a anim-d7', level: '96%', project: 'Tensor Array Transforms',     snippet: "np.expand_dims(img, axis=0)" },
      { name: 'Matplotlib & Seaborn',x: 29, y: 14, dc: 'anim-float-b anim-d8', level: '88%', project: 'Loss & Accuracy Curves',      snippet: "plt.plot(history['accuracy'])" },
    ],
  },

  // ── 3. TOOLS & CLOUD ── Amber nebula, top right
  {
    id: 'cluster-tools',
    title: 'TOOLS',
    color: '#F59E0B',
    nebula: 'left-[54%] top-[10%] w-[310px] h-[310px]',
    nebulaGrad: 'radial-gradient(circle, rgba(245,158,11,0.50) 0%, rgba(217,119,6,0.20) 42%, transparent 70%)',
    labelPos: 'left-[58%] top-[40%]',
    labelColor: 'text-amber-400',
    glowDrop: '0 0 14px rgba(245,158,11,0.8)',
    skills: [
      { name: 'Docker',       x: 55, y: 16, dc: 'anim-float-c anim-d1', level: '88%', project: 'Containerized Microservices', snippet: "FROM python:3.10-slim" },
      { name: 'Hugging Face', x: 63, y: 18, dc: 'anim-float-a anim-d2', level: '90%', project: 'DietLens Spaces Deployment',  snippet: "git push origin main" },
      { name: 'Git & GitHub', x: 67, y: 32, dc: 'anim-float-b anim-d3', level: '94%', project: 'Version Control & CI/CD',    snippet: "git checkout -b feature/gemini" },
      { name: 'VS Code',      x: 61, y: 26, dc: 'anim-float-c anim-d4', level: '96%', project: 'Primary Dev IDE',             snippet: "code ." },
      { name: 'Postman',      x: 53, y: 30, dc: 'anim-float-a anim-d5', level: '90%', project: 'API Endpoint Testing',        snippet: "pm.test('Status 200', () => ...)" },
      { name: 'Gunicorn',     x: 51, y: 22, dc: 'anim-float-b anim-d6', level: '86%', project: 'WSGI Production Server',      snippet: "gunicorn -w 4 -b 0.0.0.0:7860 app:app" },
    ],
  },

  // ── 4. LANGUAGES ── Cyan nebula, right
  {
    id: 'cluster-languages',
    title: 'LANGUAGES',
    color: '#00F5D4',
    nebula: 'left-[70%] top-[33%] w-[370px] h-[370px]',
    nebulaGrad: 'radial-gradient(circle, rgba(0,245,212,0.52) 0%, rgba(0,187,249,0.22) 42%, transparent 70%)',
    labelPos: 'left-[68%] top-[54%]',
    labelColor: 'text-cyan-400',
    glowDrop: '0 0 14px rgba(0,245,212,0.8)',
    skills: [
      { name: 'Java 17+',          x: 83, y: 44, dc: 'anim-float-a anim-d1', level: '95%', project: 'Enterprise Backend Services', snippet: "CompletableFuture.supplyAsync(() -> ...)" },
      { name: 'Python',            x: 87, y: 36, dc: 'anim-float-b anim-d2', level: '96%', project: 'AI & Full-Stack Dev',         snippet: "def infer_pipeline(image): ..." },
      { name: 'JavaScript (ES6+)', x: 89, y: 54, dc: 'anim-float-c anim-d3', level: '90%', project: 'Interactive React UI',        snippet: "const {data} = await fetchApi();" },
      { name: 'C / C++',           x: 71, y: 56, dc: 'anim-float-a anim-d4', level: '80%', project: 'DSA & Memory Management',     snippet: "std::vector<int> adj[MAX_V];" },
      { name: 'SQL',               x: 73, y: 36, dc: 'anim-float-b anim-d5', level: '88%', project: 'Relational Queries & Indexes', snippet: "SELECT * FROM food WHERE id = ?" },
      { name: 'HTML / CSS',        x: 67, y: 44, dc: 'anim-float-c anim-d6', level: '95%', project: 'Semantic Markup & Glass UI',  snippet: "<div class='glass-panel' />" },
    ],
  },

  // ── 5. WEB & ARCHITECTURE ── Blue nebula, lower center
  {
    id: 'cluster-backend',
    title: 'ARCHITECTURE',
    color: '#00BBF9',
    nebula: 'left-[38%] top-[55%] w-[420px] h-[420px]',
    nebulaGrad: 'radial-gradient(circle, rgba(0,187,249,0.40) 0%, rgba(59,130,246,0.18) 44%, transparent 70%)',
    labelPos: 'left-[44%] top-[90%]',
    labelColor: 'text-blue-400',
    glowDrop: '0 0 14px rgba(0,187,249,0.8)',
    skills: [
      { name: 'Spring Boot',         x: 43, y: 66, dc: 'anim-float-b anim-d1',  level: '90%', project: 'Cloud E-Commerce Engine',     snippet: "@RestController @RequestMapping('/api')" },
      { name: 'Flask',               x: 35, y: 72, dc: 'anim-float-c anim-d2',  level: '94%', project: 'DietLens 12 Micro-Modules',   snippet: "@app.route('/predict', methods=['POST'])" },
      { name: 'Django',              x: 51, y: 76, dc: 'anim-float-a anim-d3',  level: '86%', project: 'Community Recipe Forum',       snippet: "class Recipe(models.Model): ..." },
      { name: 'React.js',            x: 59, y: 64, dc: 'anim-float-b anim-d4',  level: '92%', project: 'Production Web Portals',       snippet: "export default function App() {...}" },
      { name: 'Apache Kafka',        x: 67, y: 74, dc: 'anim-float-c anim-d5',  level: '84%', project: 'Distributed Event Topics',     snippet: "kafkaTemplate.send('orders', payload)" },
      { name: 'Redis',               x: 77, y: 68, dc: 'anim-float-a anim-d6',  level: '88%', project: 'Cluster Cache & Rate Limits',  snippet: "@Cacheable(value = 'items')" },
      { name: 'PostgreSQL & SQLite', x: 41, y: 82, dc: 'anim-float-b anim-d7',  level: '88%', project: 'ACID Relational Storage',      snippet: "CREATE INDEX idx ON foods(name);" },
    ],
  },
];

/* ─── Twinkling star positions (stable – derived from index) ─── */
const STARS = Array.from({ length: 70 }, (_, i) => ({
  left: `${(i * 13.7 + 3) % 100}%`,
  top:  `${(i * 17.3 + 5) % 100}%`,
  size: (i % 3) + 1.2,
  delay: `${-(i % 12) * 0.8}s`,
  dur:   `${2.4 + (i % 5) * 0.6}s`,
  color: i % 3 === 0 ? '#00FF94' : i % 3 === 1 ? '#00BBF9' : '#A855F7',
}));

export default function NebulaSkillConstellation() {
  const containerRef = useRef(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeCluster, setActiveCluster] = useState(null);

  /* mouse parallax */
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const onMouseMove = (e) => {
    if (!containerRef.current) return;
    const r = containerRef.current.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - r.left) / r.width  - 0.5) * 40,
      y: ((e.clientY - r.top)  / r.height - 0.5) * 30,
    });
  };

  const handlePillClick = (skill, cluster) => {
    if (activeSkill?.name === skill.name) {
      setActiveSkill(null);
      setActiveCluster(null);
    } else {
      setActiveSkill(skill);
      setActiveCluster(cluster);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
      className="relative w-full min-h-[660px] md:min-h-[760px] rounded-3xl bg-[#030406] border border-white/10 overflow-hidden shadow-2xl select-none cursor-crosshair"
    >

      {/* ── Layer 0: Twinkling Starfield ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full anim-star"
            style={{
              left: s.left,
              top:  s.top,
              width:  `${s.size}px`,
              height: `${s.size}px`,
              backgroundColor: s.color,
              boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
              animationDelay:    s.delay,
              animationDuration: s.dur,
            }}
          />
        ))}
      </div>

      {/* ── Layer 1: Living Nebula Clouds (parallax + breathe) ── */}
      {CLUSTERS.map((cl) => (
        <motion.div
          key={cl.id + '-nebula'}
          animate={{ x: mouse.x * 0.25, y: mouse.y * 0.25 }}
          transition={{ type: 'spring', damping: 30, stiffness: 150 }}
          className={`absolute rounded-full pointer-events-none anim-nebula ${cl.nebula}`}
          style={{
            background: cl.nebulaGrad,
            filter: 'blur(48px)',
          }}
        />
      ))}

      {/* ── Layer 2: Decorative neural conduit lines (move with parallax) ── */}
      <motion.svg
        animate={{ x: mouse.x * 0.15, y: mouse.y * 0.15 }}
        transition={{ type: 'spring', damping: 35, stiffness: 120 }}
        className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M 140,410 Q 310,280 460,210 T 820,330" fill="none"
              stroke="rgba(0,255,148,0.5)" strokeWidth="1.2" strokeDasharray="6 8" />
        <path d="M 260,155 Q 440,310 640,170 T 920,420" fill="none"
              stroke="rgba(0,187,249,0.45)" strokeWidth="1.2" strokeDasharray="5 7" />
        <path d="M 390,510 Q 560,390 730,530 T 940,490" fill="none"
              stroke="rgba(168,85,247,0.35)" strokeWidth="1.2" strokeDasharray="4 6" />
      </motion.svg>

      {/* ── Layer 3: Identity Header ── */}
      <div className="absolute top-7 left-8 z-30 pointer-events-none">
        <h3 className="font-serif tracking-[0.22em] text-2xl sm:text-3xl text-[#F0EDE8] uppercase font-normal">
          Kabilan
        </h3>
        <p className="font-mono text-[10px] tracking-[0.38em] text-[#00FF94]/80 uppercase mt-1 flex items-center gap-2">
          <Orbit className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
          AI · Full Stack · Web Systems
        </p>
      </div>

      {/* ── Layer 4: Cluster Category Labels (parallax mid-depth) ── */}
      <motion.div
        animate={{ x: mouse.x * 0.35, y: mouse.y * 0.35 }}
        transition={{ type: 'spring', damping: 28, stiffness: 140 }}
        className="absolute inset-0 pointer-events-none z-20"
      >
        {CLUSTERS.map((cl) => (
          <span
            key={cl.id + '-label'}
            className={`absolute font-mono text-[11px] tracking-[0.38em] uppercase font-bold ${cl.labelColor} ${cl.labelPos}`}
            style={{ textShadow: cl.glowDrop.replace('box-shadow', 'text-shadow') }}
          >
            {cl.title}
          </span>
        ))}
      </motion.div>

      {/* ── Layer 5: Floating Skill Pills (each drifting independently) ── */}
      <motion.div
        animate={{ x: mouse.x * 0.55, y: mouse.y * 0.55 }}
        transition={{ type: 'spring', damping: 22, stiffness: 160 }}
        className="absolute inset-0 z-30"
      >
        {CLUSTERS.flatMap((cl) =>
          cl.skills.map((skill) => {
            const isActive = activeSkill?.name === skill.name;
            return (
              <div
                key={skill.name}
                className={`absolute ${skill.dc} cursor-pointer`}
                style={{
                  left: `${skill.x}%`,
                  top:  `${skill.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: isActive ? 60 : 30,
                }}
                onClick={() => handlePillClick(skill, cl)}
              >
                <div
                  className={`
                    px-3.5 py-1.5 rounded-full font-mono text-[11px] font-medium
                    backdrop-blur-md flex items-center gap-1.5 border whitespace-nowrap
                    transition-all duration-200
                    ${isActive
                      ? 'bg-black/95 border-white/60 scale-125'
                      : 'bg-[#0b0d13]/90 border-white/15 hover:border-white/45 hover:scale-110 hover:bg-black/80'
                    }
                  `}
                  style={{
                    color: isActive ? '#fff' : '#cbd5e1',
                    boxShadow: isActive
                      ? `0 0 28px ${cl.color}, 0 0 8px ${cl.color}60, inset 0 0 12px ${cl.color}25`
                      : '0 6px 22px rgba(0,0,0,0.85)',
                    borderColor: isActive ? cl.color : undefined,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{
                      backgroundColor: cl.color,
                      boxShadow: `0 0 6px ${cl.color}`,
                      animation: 'psiGlow 2.5s ease-in-out infinite',
                    }}
                  />
                  {skill.name}
                </div>
              </div>
            );
          })
        )}
      </motion.div>

      {/* ── Layer 6: Active Skill Telemetry HUD ── */}
      <AnimatePresence>
        {activeSkill && activeCluster && (
          <motion.div
            key={activeSkill.name}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{   opacity: 0, y: 20,  scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-5 left-5 right-5 sm:left-auto sm:right-6 sm:max-w-[420px] z-50
                       p-5 rounded-2xl bg-black/95 backdrop-blur-2xl border border-white/15
                       shadow-[0_0_50px_rgba(0,0,0,0.9)] space-y-3.5"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: activeCluster.color, boxShadow: `0 0 8px ${activeCluster.color}` }}
                />
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold"
                      style={{ color: activeCluster.color }}>
                  {activeCluster.title}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-white">{activeSkill.level} Mastery</span>
                <button
                  onClick={() => { setActiveSkill(null); setActiveCluster(null); }}
                  className="font-mono text-xs text-slate-500 hover:text-white transition-colors px-1"
                >✕</button>
              </div>
            </div>

            {/* Skill name */}
            <div>
              <h4 className="font-sans font-bold text-lg text-white">{activeSkill.name}</h4>
              <p className="font-sans text-xs text-slate-400 mt-0.5">{activeSkill.project}</p>
            </div>

            {/* Proficiency bar */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-[10px] text-slate-500">
                <span>Proficiency</span>
                <span style={{ color: activeCluster.color }}>{activeSkill.level}</span>
              </div>
              <div className="h-1.5 w-full bg-white/8 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: activeSkill.level }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${activeCluster.color}, #00BBF9)` }}
                />
              </div>
            </div>

            {/* Code snippet */}
            {activeSkill.snippet && (
              <div className="p-3 rounded-xl bg-[#07090e] border border-white/8 font-mono text-[11px] overflow-x-auto"
                   style={{ color: activeCluster.color }}>
                <code>{activeSkill.snippet}</code>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
