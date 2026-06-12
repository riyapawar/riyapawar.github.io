export const profile = {
  name: "Riya Pawar",
  role: "B.S.E. Computer Science @ Princeton University",
  bio: "Sophomore at Princeton studying CS, with minors in applied math, statistics & ML, and optimization. My work sits at the intersection of systems and research: I've built ML pipelines for psychiatric wearables, probed the geometry of LLM safety mechanisms, and shipped security infrastructure from internships to published papers. I'm drawn to problems that demand both mathematical rigor and careful engineering.",
  email: "riyanj2006@gmail.com",
  emailPrinceton: "rp0612@princeton.edu",
  github: "https://github.com/riyapawar?tab=repositories",
  linkedin: "https://www.linkedin.com/in/riyapawar226/",
};

export const education = [
  {
    school: "Princeton University",
    location: "Princeton, NJ",
    degree: "B.S.E. in Computer Science",
    dates: "August 2024 – May 2028",
    gpa: "4.0 / 4.0 (Spring 2026)",
    minors: [
      "Applied Mathematics",
      "Statistics & Machine Learning",
      "Optimization & Quantitative Decision Science",
    ],
    coursework: [
      "Principles of Computer System Design",
      "Programming Systems",
      "Data Structures & Algorithms",
      "Natural Language Processing",
      "Machine Learning",
      "Data Science",
      "Logic Design",
      "Reasoning About Computation",
      "Probability & Stochastic Systems",
      "Linear Algebra",
      "Differential Equations",
    ],
  },
  {
    school: "Manalapan High School",
    location: "Manalapan, NJ",
    degree: "Science & Engineering Magnet Program",
    dates: "September 2020 – June 2024",
    gpa: "5.7 / 4.0",
    notes: "Valedictorian of 454 students · 14 AP Classes (12 exams scored 5)",
  },
];

export const experience = [
  {
    role: "Software Engineering Intern",
    org: "DTCC",
    team: "Application Development Team",
    dates: "May 2026 – Present",
    bullets: [
      "Building and optimizing infrastructure for enterprise-scale financial systems at one of the world's largest post-trade market infrastructures.",
    ],
  },
  {
    role: "Quantitative Research Intern",
    org: "Verma Capital",
    dates: "May 2026 – Present",
    bullets: [
      "Applying mathematical modeling and statistical inference to large-scale financial data to develop systematic trading strategies.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    org: "Princeton School of Engineering, Jha Lab",
    dates: "December 2025 – Present",
    focus: "Superintelligence, Small Language Models & Knowledge Graphs",
    bullets: [
      "Building domain-specific superintelligence for physics-focused small language models. The goal is factual precision, not just fluency.",
      "Using GraphMERT to construct knowledge and context graphs that support multi-hop question answering without hallucination.",
      "Designing graph-augmented retrieval pipelines that give the model structured reasoning paths for scientific decision-making.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    org: "Princeton School of Engineering, Jha Lab",
    dates: "September 2024 – December 2025",
    focus: "Mental Health AI & Wearable Diagnostics",
    bullets: [
      "Built ML pipelines for EEG-based mental health diagnostics, working toward clinical-grade psychiatric screening from wearable signals.",
      "Partnered with Samsung Smart Watches to classify comorbid psychiatric conditions from continuous biometric data, a multi-label problem with messy real-world labels.",
      "Implemented Joint Energy-Based Models (JEM) and VERA to get well-calibrated confidence estimates, not just predictions.",
    ],
  },
  {
    role: "Technical Advisor & Advisory Board Member",
    org: "Boss Beauties",
    dates: "February 2025 – May 2026",
    bullets: [
      "Mentored 30+ development interns building an interactive storytelling app, from architecture decisions through code review.",
      "Designed the core web infrastructure: React component system, Firebase backend, CMS-driven content workflows.",
      "Advised on product strategy alongside leaders from Time Inc., Inspired Capital, and The Meteor.",
    ],
  },
  {
    role: "Partnerships Lead & Organizer",
    org: "HackPrinceton",
    dates: "September 2024 – Present",
    bullets: [
      "Helping run one of the largest collegiate hackathons in the US: 600+ participants, 36 hours, a lot of logistics.",
      "Raised $250K+ in sponsorships from OpenAI, Amazon, Dedalus Labs, and Google Cloud.",
      "Designed technical tracks and handled live integration of sponsor APIs and cloud platforms during the event.",
    ],
  },
  {
    role: "Software Development Intern",
    org: "Commvault Systems",
    dates: "Summers 2021, 2022, 2023",
    bullets: [
      "Built a real-time ransomware detection system: honeypot files are seeded across the filesystem, and any process that touches them triggers an alert, catching ransomware before it can spread.",
      "Wrote low-level C++ to spin up, audit, and tear down randomized honeypot architectures across multiple OS targets.",
      "Trained anomaly detection models on folder-level write-velocity metrics; the module shipped into commercial enterprise backup products protecting Fortune 500 infrastructure.",
    ],
  },
];

export const projects = [
  {
    title: "Auditing Agent",
    tags: ["AI Agents", "TypeScript", "Python", "LLM"],
    description:
      "An LLM-powered auditing pipeline with a TypeScript frontend and Python processing engine. Handles document ingestion, structured extraction, and automated report generation, built to make audit workflows that currently require hours of manual review completable in minutes.",
    links: [
      { label: "GitHub", href: "https://github.com/riyapawar/auditing-agent" },
    ],
  },
  {
    title: "MCP Payload Firewall",
    tags: ["Security", "AI Safety", "Next.js", "TypeScript", "Edge Runtime"],
    description:
      "AI agents connected to tools via MCP have no built-in protection against leaking secrets embedded in prompts or tool responses. This is an edge proxy that intercepts every MCP message, scans it for API keys, connection strings, and PII, and redacts or blocks violations before they reach the agent's context. Rules are cached in Vercel Edge Config for sub-millisecond matching. Full audit trail in Postgres.",
    links: [
      { label: "GitHub", href: "https://github.com/riyapawar/mcp-payload-firewall" },
    ],
  },
  {
    title: "PartMatch",
    tags: ["RAG", "Hybrid Retrieval", "BM25", "OpenAI", "Python"],
    description:
      "Industrial buyers often know exactly what they need but not what it's called in a catalog. PartMatch takes natural-language descriptions of fasteners and returns ranked matches with attribute-level explanations. The tricky part: 'same bolt as last time' and 'M8×1.25, grade 10.9, zinc' are both valid queries but require completely different retrieval strategies. The pipeline detects query specificity and switches between semantic similarity and a structured attribute-scoring rubric accordingly, with order history personalization and conditional GPT-4o-mini reranking for close calls.",
    links: [
      { label: "GitHub", href: "https://github.com/riyapawar/partmatching" },
    ],
  },
  {
    title: "The Geometry of High-Dimensional Safety",
    subtitle: "Princeton NLP, COS 484 Final Project",
    tags: ["NLP", "LLM Safety", "Mechanistic Interpretability", "LoRA", "Python"],
    description:
      "Is it possible to make a language model's refusal behavior geometrically irreducible, distributed across so many independent directions that no projection attack can suppress it? We fine-tuned Qwen2.5-3B using Extended Refusal (structured explain-refuse-justify responses) and ran a gradient-based audit of what actually changed. The refusal cone grew from dimension 2 to 5, and DIM-based extraction collapsed, but within-cone analysis revealed the defense is functionally near-rank-1: one basis direction still carries most of the causal load. A cone-aware attacker outperforms standard abliteration. The form of safety expression in training data reshapes geometry, but not enough.",
    links: [
      { label: "Paper", href: "/nlp_final_project_paper.pdf" },
      { label: "GitHub", href: "https://github.com/ChinmayaSaran/nlp-final-project" },
    ],
  },
  {
    title: "Neural Computer Vision System for Retail Intelligence",
    tags: ["Computer Vision", "Deep Learning", "CNN-Transformer"],
    description:
      "The interesting problem in fashion recognition isn't classification. It's that 'blue' means fifty different things depending on context. Built a multi-stage pipeline handling outfit segmentation, attribute extraction, and fine-grained style categorization using a hybrid CNN-Transformer that reasons jointly about individual garment regions and overall outfit composition. Adding social media connectivity so users can identify outfits from posts in real time.",
    links: [],
  },
  {
    title: "Multimodal Smart Crosswalk System",
    subtitle: "Rutgers WINLAB",
    tags: ["Multi-Sensor Fusion", "Computer Vision", "Spatial Modeling"],
    description:
      "Pedestrian safety infrastructure is largely designed around able-bodied people. This DARPA/NSF-funded project built a system specifically for people with mobility impairments, fusing smartphone IMU data with CV camera feeds to model each pedestrian's crossing speed and signal the traffic system when they need more time.",
    funding: "Funded by DARPA, the National Science Foundation, and the NJ Commission for Science & Technology.",
    links: [],
  },
  {
    title: "Real-Time Audio Encryption",
    tags: ["Cryptography", "Signal Processing", "Security"],
    description:
      "Started from a question: can you encrypt audio streams in real time without the latency penalty of AES? Chaos maps (logistic and Lorenz systems) combined with discrete wavelet transforms produce ciphertext that resists spectral analysis while running faster than AES/DES. The nonlinearity of the chaotic system does the work that key expansion does in block ciphers. Published at IEEE URTC 2023.",
    links: [
      { label: "IEEE Paper", href: "https://ieeexplore.ieee.org/document/10535012" },
    ],
  },
];

export const publications = [
  {
    title: "Real-Time Audio Encryption Using Chaos Maps, Wavelet Transforms, and Diffie-Hellman Key Exchange",
    venue: "IEEE MIT Undergraduate Research Technology Conference (URTC)",
    year: "2023",
    href: "https://ieeexplore.ieee.org/document/10535012",
  },
];

export const news = [
  {
    date: "May 2026",
    text: "Started as Software Engineering Intern at DTCC on the Application Development team.",
  },
  {
    date: "May 2026",
    text: "Started as Quantitative Research Intern at Verma Capital.",
  },
  {
    date: "December 2025",
    text: "Shifted Jha Lab research focus to Superintelligence, Small Language Models, and Knowledge Graphs.",
  },
  {
    date: "February 2025",
    text: "Joined Boss Beauties as Technical Advisor & Advisory Board Member.",
  },
  {
    date: "June 2024",
    text: "Graduated as Valedictorian of Manalapan High School's class of 454 students.",
  },
  {
    date: "2024",
    text: "Received NCWIT National Honorable Mention for the second consecutive year.",
  },
  {
    date: "September 2024",
    text: "Enrolled at Princeton University and joined HackPrinceton as Partnerships Lead.",
  },
  {
    date: "September 2024",
    text: "Joined the Jha Lab at Princeton Engineering, working on ML pipelines for EEG-based mental health diagnostics.",
  },
  {
    date: "2023",
    text: "Won First Place Overall and First Place CS at NJSJSHS; Top 10 CS nationally at NJSHS.",
  },
  {
    date: "2023",
    text: "Published audio encryption research in IEEE; presented at MIT URTC.",
  },
  {
    date: "2023",
    text: "Received NCWIT National Honorable Mention.",
  },
];
