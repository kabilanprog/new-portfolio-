import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Sparkles, Server, Code2, Cloud,
  Layers, CheckCircle2, Code, GitBranch
} from 'lucide-react';

const TREE_CATEGORIES = [
  {
    id: "ai-vision",
    name: "AI & Computer Vision",
    color: "#00FF94",
    icon: Brain,
    x: 220,
    y: 140,
    skills: [
      { id: "tf", name: "TensorFlow & Keras", level: "92%", role: "Deep learning models, CNNs & transfer learning", project: "DietLens (~121 classes)", snippet: "model.compile(optimizer='adam', loss='categorical_crossentropy')" },
      { id: "mobilenet", name: "MobileNetV2", level: "95%", role: "Sub-450ms real-time vision classifier", project: "DietLens Capstone", snippet: "base_model = MobileNetV2(weights='imagenet', include_top=False)" },
      { id: "opencv", name: "OpenCV Pipeline", level: "88%", role: "HSV segmentation, leaf contour masking", project: "Turmeric Leaf Disease Detection", snippet: "mask = cv2.inRange(hsv, lower_green, upper_green)" },
      { id: "sklearn", name: "Scikit-Learn", level: "90%", role: "Feature analysis & data preprocessing", project: "ML Classification", snippet: "from sklearn.metrics import classification_report" },
      { id: "dataset", name: "135k+ Dataset Synthesis", level: "96%", role: "Consolidated 3 Indian food corpora", project: "Smart India Hackathon", snippet: "datagen.flow_from_directory('dataset/train', target_size=(224,224))" },
    ]
  },
  {
    id: "genai",
    name: "Frontier GenAI & LLMs",
    color: "#EC4899",
    icon: Sparkles,
    x: 680,
    y: 140,
    skills: [
      { id: "gemini", name: "Google Gemini 1.5 Flash", level: "94%", role: "Multi-modal vision secondary validator", project: "DietLens Dual-Pathway", snippet: "gemini.generate_content([image_part, 'Analyze Indian dish'])" },
      { id: "langchain", name: "LangChain Orchestration", level: "85%", role: "Autonomous DAG agent workflows & tool calling", project: "NeuralForge Multi-Agent", snippet: "agent_executor = create_openai_tools_agent(llm, tools, prompt)" },
      { id: "chroma", name: "ChromaDB & Vector RAG", level: "86%", role: "Semantic code embeddings & chunk retrieval", project: "Code Synthesis Engine", snippet: "collection.query(query_texts=['Java Spring order'], n_results=4)" },
      { id: "hybrid", name: "3-Tier Hybrid Query", level: "95%", role: "Exact $\\rightarrow$ Fuzzy $\\rightarrow$ Live USDA API", project: "SIH Production Nutrition", snippet: "cached_db.get(dish) ?? fuzzy_lookup(dish) ?? usda_live_api()" },
    ]
  },
  {
    id: "java-backend",
    name: "Java & Enterprise Architecture",
    color: "#00BBF9",
    icon: Server,
    x: 180,
    y: 360,
    skills: [
      { id: "java", name: "Java (Core & Advanced)", level: "95%", role: "OOP, Concurrency, JVM Internals, Streams", project: "Enterprise Microservices Cluster", snippet: "ExecutorService executor = Executors.newVirtualThreadPerTaskExecutor();" },
      { id: "spring", name: "Spring Boot & Cloud", level: "90%", role: "REST Controllers, Security, Eureka, Resilience4j", project: "Cloud E-Commerce Engine", snippet: "@RestController @RequestMapping('/api/v1/orders') public class..." },
      { id: "kafka", name: "Apache Kafka", level: "84%", role: "Multi-partition event streaming & consumer offsets", project: "Asynchronous Order Stream", snippet: "kafkaTemplate.send('orders-topic', order.getId(), eventPayload);" },
      { id: "redis", name: "Redis Caching", level: "88%", role: "Sub-millisecond memory caching & rate limiting", project: "Distributed Product Catalog", snippet: "@Cacheable(value = 'products', key = '#productId')" },
    ]
  },
  {
    id: "web-fullstack",
    name: "Web & Full Stack Frameworks",
    color: "#8B5CF6",
    icon: Code2,
    x: 720,
    y: 360,
    skills: [
      { id: "react", name: "React.js", level: "92%", role: "Custom hooks, Framer Motion, Context API", project: "Production Web Portals", snippet: "const [activeNode, setActiveNode] = useState(initialNode);" },
      { id: "flask", name: "Flask", level: "94%", role: "Blueprint routing, 12 micro-modules, model APIs", project: "DietLens Backend Services", snippet: "@api_bp.route('/predict', methods=['POST']) def predict():" },
      { id: "django", name: "Django", level: "86%", role: "ORM migrations, admin panel, REST framework", project: "Community Recipe Forum", snippet: "class Recipe(models.Model): author = models.ForeignKey(User)" },
      { id: "node", name: "Node.js & Express", level: "85%", role: "Asynchronous middleware & streaming endpoints", project: "Notification Microservice", snippet: "app.post('/api/webhook', express.json(), handleEvent);" },
      { id: "tailwind", name: "Tailwind CSS", level: "95%", role: "Design tokens, glassmorphism, responsive grid", project: "Cyberpunk Design System", snippet: "className='glass-panel border border-neon/40 shadow-glow-neon'" },
    ]
  },
  {
    id: "devops-systems",
    name: "Systems, DB & DevOps",
    color: "#F59E0B",
    icon: Cloud,
    x: 450,
    y: 90,
    skills: [
      { id: "python", name: "Python", level: "96%", role: "Scientific stack, generator pipelines, scripting", project: "ML Workflows & Automation", snippet: "def batch_generator(data, size=32): yield from chunks(data, size)" },
      { id: "cpp", name: "C / C++", level: "80%", role: "Pointers, memory allocation, STL algorithms", project: "Data Structures & Core CS", snippet: "std::vector<std::pair<int, int>> adjList[MAX_NODES];" },
      { id: "db", name: "PostgreSQL & SQLite", level: "88%", role: "Relational schemas, indexes, ACID transactions", project: "DietLens & Microservices Data", snippet: "CREATE INDEX idx_food ON food_items(phonetic_code);" },
      { id: "docker", name: "Docker & Gunicorn", level: "88%", role: "Multi-stage builds & container isolation", project: "Hugging Face Spaces Deployment", snippet: "CMD ['gunicorn', '--bind', '0.0.0.0:7860', 'app:app']" },
      { id: "git", name: "Git & GitHub", level: "92%", role: "Feature branches, CI/CD pipelines, SIH repo", project: "Collaborative Open Source", snippet: "git checkout -b feature/gemini-fallback" },
    ]
  }
];

export default function VisualSkillTree() {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(TREE_CATEGORIES[0]);
  const [selectedSkill, setSelectedSkill] = useState(TREE_CATEGORIES[0].skills[0]);
  const [activePath, setActivePath] = useState(TREE_CATEGORIES[0].id);
  const [time, setTime] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Continuous animation loop for living space sway & pulse
  useEffect(() => {
    let animId;
    const animate = () => {
      setTime((prev) => prev + 1);
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 35;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 25;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const rootX = 450;
  const rootY = 430;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="mt-12 p-4 sm:p-8 rounded-3xl bg-[#07070a] border border-white/10 relative overflow-hidden shadow-2xl"
    >
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <GitBranch className="w-4 h-4 text-neon animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon font-bold">
              Dynamic Moving Skill Tree Space Graph
            </span>
          </div>
          <h3 className="font-sans font-bold text-xl sm:text-2xl text-cream tracking-tight">
            Animated Architectural Tree Graph
          </h3>
        </div>

        {/* Root Core Pill */}
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black/80 border border-neon/40 shadow-[0_0_20px_rgba(0,255,148,0.2)]">
          <div className="w-2.5 h-2.5 rounded-full bg-neon animate-ping" />
          <span className="font-mono text-xs text-white font-bold">
            Root: Java Full Stack & AI
          </span>
        </div>
      </div>

      {/* Interactive Visual SVG Animated Moving Tree Canvas */}
      <div className="relative w-full overflow-x-auto pb-4">
        <motion.div
          animate={{
            x: mouseOffset.x * 0.4,
            y: mouseOffset.y * 0.4,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="min-w-[750px] max-w-[900px] mx-auto relative h-[480px] rounded-2xl bg-black/60 border border-white/5 p-4 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 900 480"
            className="w-full h-full select-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {TREE_CATEGORIES.map((cat) => (
                <linearGradient key={cat.id} id={`grad-${cat.id}`} x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00FF94" />
                  <stop offset="100%" stopColor={cat.color} />
                </linearGradient>
              ))}

              <filter id="treeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Tree Branch Conduits (Curved Animated Moving SVG Cables) */}
            {TREE_CATEGORIES.map((cat, idx) => {
              const isCatActive = activePath === cat.id;
              // Organic continuous wave sway in space
              const swayX = Math.sin(time * 0.02 + idx) * 12;
              const swayY = Math.cos(time * 0.02 + idx) * 8;

              const targetX = cat.x + swayX;
              const targetY = cat.y + swayY;

              const midX = (rootX + targetX) / 2 + Math.sin(time * 0.015 + idx) * 15;
              const midY = (rootY + targetY) / 2 + (cat.y < rootY ? 30 : -20);
              const pathD = `M ${rootX} ${rootY} Q ${midX} ${midY} ${targetX} ${targetY}`;

              return (
                <g key={`path-${cat.id}`}>
                  {/* Background Base Line */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={cat.color}
                    strokeWidth={isCatActive ? "2.8" : "1.5"}
                    strokeOpacity={isCatActive ? "0.95" : "0.3"}
                    strokeDasharray={isCatActive ? "6 6" : "none"}
                  />

                  {/* Flowing Energy Pulse Dot traveling along the branch */}
                  <circle r={isCatActive ? "4.5" : "3"} fill={cat.color} filter="url(#treeGlow)">
                    <animateMotion
                      path={pathD}
                      dur={isCatActive ? "2s" : "3.5s"}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}

            {/* Central Root Node (The Tree Base) */}
            <g transform={`translate(${rootX}, ${rootY})`}>
              <circle r="34" fill="#060d09" stroke="#00FF94" strokeWidth="2.5" filter="url(#treeGlow)" />
              <circle r="24" fill="rgba(0,255,148,0.15)" />
              <circle r="6" fill="#00FF94" className="animate-ping" />
              <text
                y="48"
                textAnchor="middle"
                className="font-mono text-[10px] font-bold fill-white uppercase tracking-widest"
              >
                KABILAN CORE
              </text>
              <text
                y="60"
                textAnchor="middle"
                className="font-mono text-[8px] fill-neon uppercase tracking-wider"
              >
                Java & AI Hub
              </text>
            </g>

            {/* The 5 Main Branch Hubs (Moving with Space Sway) */}
            {TREE_CATEGORIES.map((cat, idx) => {
              const isSelected = activePath === cat.id;
              const swayX = Math.sin(time * 0.02 + idx) * 12;
              const swayY = Math.cos(time * 0.02 + idx) * 8;

              const posX = cat.x + swayX;
              const posY = cat.y + swayY;

              return (
                <g
                  key={cat.id}
                  transform={`translate(${posX}, ${posY})`}
                  className="cursor-pointer"
                  onClick={() => {
                    setActivePath(cat.id);
                    setSelectedCategory(cat);
                    setSelectedSkill(cat.skills[0]);
                  }}
                >
                  {/* Outer Pulsing Halo when active */}
                  {isSelected && (
                    <circle
                      r="38"
                      fill="none"
                      stroke={cat.color}
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className="animate-[spin_10s_linear_infinite]"
                      opacity="0.8"
                    />
                  )}

                  {/* Branch Circle Node */}
                  <circle
                    r={isSelected ? "28" : "22"}
                    fill="#0a0a0f"
                    stroke={cat.color}
                    strokeWidth={isSelected ? "2.8" : "1.8"}
                    filter={isSelected ? "url(#treeGlow)" : "none"}
                    className="transition-all duration-300 hover:scale-110"
                  />

                  {/* Center Node Indicator */}
                  <circle r="4.5" fill={cat.color} />

                  {/* Branch Name Label */}
                  <text
                    y={cat.y > rootY - 100 ? "-30" : "38"}
                    textAnchor="middle"
                    className={`font-mono text-[10px] font-bold uppercase tracking-wider transition-colors ${
                      isSelected ? "fill-white" : "fill-slate-400"
                    }`}
                  >
                    {cat.name}
                  </text>

                  {/* Skills count pill */}
                  <text
                    y={cat.y > rootY - 100 ? "-42" : "50"}
                    textAnchor="middle"
                    className="font-mono text-[8px] fill-neon uppercase tracking-widest"
                  >
                    [{cat.skills.length} Skills]
                  </text>
                </g>
              );
            })}
          </svg>
        </motion.div>
      </div>

      {/* Dual Column: Selected Branch Leaves & Node Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8 pt-6 border-t border-white/10 relative z-10">
        {/* Left Column: Branch Leaf Nodes */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Active Branch: <strong style={{ color: selectedCategory.color }}>{selectedCategory.name}</strong>
            </span>
            <span className="font-mono text-xs text-neon">
              {selectedCategory.skills.length} Nodes
            </span>
          </div>

          <div className="space-y-2.5">
            {selectedCategory.skills.map((skill, idx) => {
              const isSkillSelected = selectedSkill.name === skill.name;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: idx * 0.04 }}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isSkillSelected
                      ? 'bg-[#0e1613] border-neon shadow-[0_0_20px_rgba(0,255,148,0.18)]'
                      : 'bg-black/40 hover:bg-black/60 border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0"
                      style={{
                        backgroundColor: isSkillSelected ? '#00FF94' : 'rgba(255, 255, 255, 0.05)',
                        color: isSkillSelected ? '#000' : '#888',
                      }}
                    >
                      0{idx + 1}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-sans font-bold text-sm text-white truncate">
                        {skill.name}
                      </h4>
                      <p className="font-sans text-xs text-muted truncate">
                        {skill.role}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0 font-mono">
                    <span className="block text-sm font-bold text-neon">
                      {skill.level}
                    </span>
                    <span className="text-[9px] uppercase px-2 py-0.5 rounded bg-neon/10 text-neon font-semibold">
                      Mastered
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Node Telemetry & Syntax Inspector */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSkill.name}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="p-6 rounded-2xl bg-black/85 border border-neon/40 shadow-[0_0_35px_rgba(0,255,148,0.15)] space-y-5"
            >
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neon flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Live Node Telemetry
                </span>
                <span className="font-mono text-xs font-bold text-white">
                  {selectedSkill.level} Proficiency
                </span>
              </div>

              {/* Skill Info */}
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted block" style={{ color: selectedCategory.color }}>
                  {selectedCategory.name}
                </span>
                <h4 className="font-sans font-bold text-xl text-cream mt-0.5">
                  {selectedSkill.name}
                </h4>
                <p className="font-sans text-xs text-muted mt-1.5 leading-relaxed">
                  {selectedSkill.role}
                </p>
              </div>

              {/* Progress Gauge */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-mono text-muted">
                  <span>Mastery Level</span>
                  <span className="text-neon font-bold">{selectedSkill.level}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-neon via-[#00BBF9] to-neon rounded-full"
                    style={{ width: selectedSkill.level }}
                  />
                </div>
              </div>

              {/* Implementation Syntax Code Snippet */}
              {selectedSkill.snippet && (
                <div className="p-3.5 rounded-xl bg-black/95 border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-muted uppercase tracking-wider">
                    <Code className="w-3 h-3 text-neon" />
                    <span>Implementation Code Syntax</span>
                  </div>
                  <pre className="font-mono text-[11px] text-neon/90 overflow-x-auto p-1 leading-relaxed">
                    <code>{selectedSkill.snippet}</code>
                  </pre>
                </div>
              )}

              {/* Project Implementation Association */}
              <div className="p-3 rounded-xl bg-[#0a120f] border border-neon/25 space-y-1">
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted block">
                  Production Project Association
                </span>
                <p className="font-mono text-xs text-neon font-semibold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  {selectedSkill.project}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
