export const PERSONAL_INFO = {
  name: "Kabilan",
  firstName: "Kabilan",
  lastName: "",
  role: "Java Full Stack Developer | AI & Web Developer",
  tagline: "Building at the intersection of AI, Deep Learning, and Scalable Full Stack Systems — engineering intelligent software that solves real-world challenges.",
  bio: "Pre-final year B.Tech IT undergraduate at Hindusthan College of Engineering and Technology, Coimbatore (2023–2027, CGPA 8.1/10). Specializing in computer vision pipelines, multi-modal LLM integration with Google Gemini, and resilient Java/Python microservices.",
  institution: "Hindusthan College of Engineering and Technology",
  degree: "B.Tech in Information Technology",
  period: "2023 – 2027",
  cgpa: "8.1 / 10.0",
  location: "Coimbatore, Tamil Nadu, India",
  email: "kabilan.officialid@gmail.com",
  freelanceEmail: "kabilan.freelancerr@gmail.com",
  status: "Available for Internships & Roles",
  socials: {
    github: "https://github.com/kabilanprog",
    linkedin: "https://www.linkedin.com/in/kabilanprog",
    twitter: "https://x.com/Kabilan_prog",
    leetcode: "https://leetcode.com/u/kabilanprog/",
    youtube: "https://www.youtube.com/@GODGAMER_RA",
    officialEmail: "mailto:kabilan.officialid@gmail.com",
    freelanceEmail: "mailto:kabilan.freelancerr@gmail.com",
    email: "mailto:kabilan.officialid@gmail.com",
  },
  stats: [
    { label: "Food Images Trained", value: "135k+" },
    { label: "Micro-Modules", value: "12+" },
    { label: "Academic CGPA", value: "8.1" },
    { label: "Shipped Projects", value: "4+" },
  ]
};

export const SKILLS_DATA = [
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow & Keras", level: 90, desc: "MobileNetV2, CNN architectures, transfer learning" },
      { name: "Google Gemini 1.5 Flash", level: 92, desc: "Multi-modal vision pathways & structured prompt reasoning" },
      { name: "OpenCV", level: 86, desc: "Image augmentation, contour masking, HSV transformations" },
      { name: "LangChain", level: 82, desc: "Autonomous agent DAGs, tool-calling pipelines, RAG" },
      { name: "Scikit-Learn", level: 88, desc: "Classification, regression, data preprocessing" },
    ]
  },
  {
    category: "Full Stack & Web",
    skills: [
      { name: "Java 17+ & Spring Boot", level: 92, desc: "Enterprise microservices, JPA/Hibernate, Spring Security" },
      { name: "React.js", level: 90, desc: "Modern hooks, Framer Motion, Tailwind styling, SPA routing" },
      { name: "Flask & Django", level: 92, desc: "RESTful endpoints, ML inference services, session auth" },
      { name: "Node.js & Express", level: 85, desc: "Asynchronous I/O, REST APIs, middleware architectures" },
      { name: "PostgreSQL & SQLite", level: 88, desc: "Schema design, indexing, ORM integration" },
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Docker", level: 86, desc: "Containerization, multi-stage builds, Gunicorn setup" },
      { name: "Hugging Face Spaces", level: 90, desc: "AI model deployment, Gradio/Flask web hosting" },
      { name: "Git & GitHub", level: 92, desc: "Branching strategies, CI/CD actions, code reviews" },
      { name: "Postman & REST APIs", level: 90, desc: "Endpoint validation, collection testing, API design" },
    ]
  }
];

export const PROJECTS_DATA = [
  {
    id: "dietlens",
    frameTag: "FRAME 01",
    eyebrow: "THE NUTRITION PIPELINE",
    year: "2024",
    image: "/projects/dietlens.webp",
    title: "DietLens — AI Food Recognition & Nutrition Intelligence",
    subtitle: "Smart India Hackathon (SIH) Submission & B.Tech Capstone Project",
    category: "Deep Learning · Full Stack",
    tagline: "AI-driven nutrition analysis platform powered by MobileNetV2 (~121 Indian food classes) and Google Gemini 1.5 Flash secondary verification with a 3-tier USDA lookup engine.",
    accent: "#00FF94",
    featured: true,
    badge: "Flagship Hackathon Project",
    githubUrl: "https://github.com/kabilanprog/DietLens-AI",
    liveUrl: "https://huggingface.co/spaces",
    techStack: [
      "Python",
      "Flask",
      "TensorFlow",
      "MobileNetV2",
      "Google Gemini 1.5 Flash",
      "USDA API",
      "Docker",
      "Gunicorn"
    ],
    highlights: [
      "Trained MobileNetV2 on a merged dataset of 3 authentic Indian food corpora containing 135,000+ real photos across ~121 classes with zero synthetic data.",
      "Dual-pathway intelligence: Google Gemini 1.5 Flash multi-modal vision triggers dynamically when MobileNet confidence is below threshold for mixed dishes.",
      "3-tier hybrid nutrition query pipeline: Exact match → Levenshtein fuzzy phonetic matching → Live USDA FoodData Central API.",
      "12 Comprehensive Modules: Auth, Meal Planner, AI Dietitian Chatbot, Recipe Forum, Stripe Billing, PDF Health Report Generation, Goal Tracker, Pantry Scanner.",
      "Production-ready deployment via Docker containers and Gunicorn on Hugging Face Spaces."
    ],
    architecture: {
      "Computer Vision": "MobileNetV2 Transfer Learning (~121 Indian cuisine classes)",
      "Secondary Model": "Google Gemini 1.5 Flash Multi-modal vision",
      "Nutrition Pipeline": "Cached Exact Match → Fuzzy Match → Live USDA API",
      "Deployment": "Docker + Gunicorn on Hugging Face Spaces",
      "Features": "12 Micro-services (Auth, Planner, Chatbot, Stripe, PDF Reports)"
    },
    metrics: [
      { label: "Cuisine Classes", value: "121" },
      { label: "Real Images", value: "135k+" },
      { label: "Micro-Modules", value: "12" },
      { label: "Latency", value: "<450ms" }
    ],
    challenges: [
      "Distinguishing visually similar Indian gravies by consolidating 3 distinct regional datasets into a unified balanced corpus.",
      "Designing automated failover to Gemini 1.5 Flash to ensure >96% accuracy on complex multi-dish thalis.",
      "Bridging regional Indian dish names to standard USDA nutrient identifiers with phonetic indexing."
    ]
  },
  {
    id: "turmeric-disease",
    frameTag: "FRAME 02",
    eyebrow: "PRECISION AGRONOMY AI",
    year: "2024",
    image: "/projects/turmeric.webp",
    title: "Turmeric Leaf Disease Detection & Agronomy AI",
    subtitle: "Precision Agricultural Computer Vision Solution",
    category: "Computer Vision · Agronomy",
    tagline: "Real-time edge diagnosis of leaf spot, leaf blotch, and rhizome rot in turmeric crops with localized severity scoring and remedy recommendations.",
    accent: "#00BBF9",
    featured: true,
    badge: "Active Research Project",
    githubUrl: "https://github.com/kabilanprog/turmeric-leaf-disease-detection",
    liveUrl: "https://github.com/kabilanprog/turmeric-leaf-disease-detection",
    techStack: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "ResNet50",
      "Flask",
      "React",
      "NumPy",
      "Tailwind CSS"
    ],
    highlights: [
      "Deep convolutional neural network identifying leaf spot (Colletotrichum capsici), leaf blotch (Taphrina maculans), and rhizome rot.",
      "Severity Index algorithm calculating necrotic tissue percentage to prescribe targeted organic vs. chemical fungicides.",
      "Farmer-friendly responsive dashboard with regional language guidance and offline caching capability."
    ],
    architecture: {
      "Model": "ResNet50 + Spatial Attention Network",
      "Preprocessing": "HSV/LAB color segmentation + leaf contour extraction",
      "Output": "Disease classification, Severity Index, Fungicide recommendation",
      "Interface": "Mobile-first responsive dashboard"
    },
    metrics: [
      { label: "Accuracy", value: "94.8%" },
      { label: "Pathologies", value: "4 Types" },
      { label: "Inference", value: "320ms" },
      { label: "Field Test", value: "High Robustness" }
    ],
    challenges: [
      "Differentiating subtle early-stage leaf blotch from soil nutrient deficiencies in low-light mobile photos."
    ]
  },
  {
    id: "neuralforge",
    frameTag: "FRAME 03",
    eyebrow: "AUTONOMOUS DEV AGENTS",
    year: "2025",
    image: "/projects/neuralforge.webp",
    title: "NeuralForge — Autonomous GenAI Multi-Agent Workbench",
    subtitle: "Developer Assistant & Automated Code Synthesis",
    category: "Generative AI · Agents",
    tagline: "Multi-agent autonomous system built on LangChain and Google Gemini for automated code drafting, test suite authoring, and PR review.",
    accent: "#8B5CF6",
    featured: false,
    badge: "GenAI System",
    githubUrl: "https://github.com/kabilanprog/NeuralForge-Agents",
    liveUrl: "https://github.com/kabilanprog/NeuralForge-Agents",
    techStack: [
      "React",
      "FastAPI",
      "LangChain",
      "Google Gemini Pro",
      "ChromaDB",
      "Python"
    ],
    highlights: [
      "Coordinated DAG agent workflow uniting Planner, Coder, and QA Reviewer agents.",
      "ChromaDB semantic embeddings for local project documentation and codebase context.",
      "Interactive code diff viewer with live unit test generator and syntax linting."
    ],
    metrics: [
      { label: "Languages", value: "Java/Py/JS" },
      { label: "Context", value: "1M Tokens" },
      { label: "Streaming", value: "Sub-50ms" },
      { label: "Coverage Gain", value: "+40%" }
    ]
  },
  {
    id: "cloud-ecommerce",
    frameTag: "FRAME 04",
    eyebrow: "DISTRIBUTED RESILIENCE",
    year: "2025",
    image: "/projects/cloud_ecommerce.webp",
    title: "Java Cloud-Native Microservices E-Commerce Engine",
    subtitle: "Distributed High-Throughput Architecture",
    category: "Java · Distributed Systems",
    tagline: "Scalable Java 17 / Spring Boot microservices backend with Apache Kafka event streaming, Redis caching, and Stripe webhooks.",
    accent: "#10B981",
    featured: false,
    badge: "Enterprise Architecture",
    githubUrl: "https://github.com/kabilanprog/java-cloud-ecommerce",
    liveUrl: "https://github.com/kabilanprog/java-cloud-ecommerce",
    techStack: [
      "Java 17",
      "Spring Boot",
      "Spring Cloud",
      "Apache Kafka",
      "Redis",
      "PostgreSQL",
      "Docker"
    ],
    highlights: [
      "Decoupled microservices architecture: Catalog, Order Processing, Inventory, and Payment Gateway.",
      "Asynchronous Kafka topics for order lifecycle events and distributed inventory locks.",
      "Resilience4j circuit breakers and Redis cluster caching reducing database read load by 65%."
    ],
    metrics: [
      { label: "Throughput", value: "2,500 RPS" },
      { label: "Cache Hit", value: "88%" },
      { label: "P99 Latency", value: "<65ms" },
      { label: "Services", value: "5 Clustered" }
    ]
  }
];

export const TIMELINE_DATA = [
  {
    id: "hicet-education",
    side: "left",
    year: "2023 – 2027",
    period: "2023 – Present",
    tag: "Education",
    title: "B.Tech in Information Technology",
    institution: "Hindusthan College of Engineering and Technology",
    location: "Coimbatore, Tamil Nadu, India",
    grade: "CGPA: 8.1 / 10.0",
    accent: "#00FF94",
    highlights: [
      "Maintaining an 8.1/10 CGPA across core domains: Data Structures, OOP (Java), Deep Learning, Cloud Computing, and DBMS.",
      "Lead developer of the institutional Smart India Hackathon team representing HICET with the DietLens AI project."
    ]
  },
  {
    id: "sih-hackathon",
    side: "right",
    year: "2024",
    period: "Smart India Hackathon",
    tag: "Hackathon",
    title: "SIH Lead Finalist — DietLens AI",
    institution: "Ministry of Education Innovation Cell / AICTE",
    location: "National Level",
    grade: "National Finalist",
    accent: "#00BBF9",
    highlights: [
      "Engineered the full-stack AI nutrition analysis application incorporating MobileNetV2 and Gemini 1.5 Flash.",
      "Curated and trained on 135,000+ real food images across 121 categories with 12 end-to-end user services."
    ]
  },
  {
    id: "nptel-cert",
    side: "left",
    year: "2024",
    period: "Elite Certification",
    tag: "Certification",
    title: "NPTEL Elite — Programming in Java",
    institution: "IIT Kharagpur / NPTEL",
    location: "National Examination",
    grade: "Elite Standard",
    accent: "#8B5CF6",
    highlights: [
      "Proctored national exam covering Java OOP, multi-threading, concurrency, memory models, and standard libraries.",
      "Awarded Elite certificate distinction."
    ]
  },
  {
    id: "coursera-ibm",
    side: "right",
    year: "2024 – 2025",
    period: "Professional Credentials",
    tag: "Specialization",
    title: "IBM Applied AI & DeepLearning.AI",
    institution: "IBM & Coursera",
    location: "Global Credential",
    grade: "Certified Specialist",
    accent: "#00FF94",
    highlights: [
      "Completed rigorous curricula in Convolutional Neural Networks, Deep Learning Architectures, and Computer Vision with TensorFlow/Keras.",
      "IBM Certified in Applied AI and Python for Data Science."
    ]
  },
  {
    id: "virtual-internships",
    side: "left",
    year: "2024",
    period: "Hands-on Experience",
    tag: "Internship",
    title: "Industry Virtual Internships",
    institution: "AICTE / EduSkills Virtual Programs",
    location: "Remote",
    grade: "Completed with Distinction",
    accent: "#F59E0B",
    highlights: [
      "Completed real-world project modules covering Java web development, cloud containerization, and REST API testing."
    ]
  }
];
