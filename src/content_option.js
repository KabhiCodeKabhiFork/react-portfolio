const meta = {
  title: "Kartikey Sondhi — AI Engineer",
  description: "Kartikey Sondhi — AI engineer building LLM applications, guardrails and evaluation. Bengaluru.",
};

const intro = {
  name: "Kartikey Sondhi",
  status: "Available for conversations · Bengaluru",
  lede: "Agents, retrieval, guardrails and evaluation — shipped to production. Founder of Usovo, a local-first AI audio studio.",
};

const projects = [
  { title: "Usovo", tag: "Founder · 2026", desc: "Local-first AI audio studio for Apple silicon. Solo build — design system, Electron app, MLX inference. Voice clones cut from 345s to under 7s.", link: "https://usovo.in" },
  { title: "PromptGuard", tag: "Open source · MIT", desc: "Python library that flags prompt injection before it reaches an LLM. Keyword pass plus embedding check, with explainable results.", link: "https://github.com/KabhiCodeKabhiFork" },
  { title: "Lifelong Dynamic Timed A*", tag: "First author · VEHITS 2024", desc: "Time-aware replanning for congested road networks. 29–48% less travel time than A* in simulation.", link: "https://pdfs.semanticscholar.org/1f56/313f3f5f090c94ecba7101ddf6f6dc21c125.pdf" },
  { title: "Truck route & ELD planner", tag: "In production", desc: "Heuristic truck routing with printable ELD plans, used daily by a US trucking company.", link: "https://truck-route-eld.vercel.app" },
  { title: "Self-driving simulation", tag: "Neural nets · vanilla JS", desc: "A from-scratch neural network learns to drive a track through human feedback.", link: "https://self-driving-1.onrender.com/" },
  { title: "CNN-LSTM market prediction", tag: "Deep learning", desc: "Ensemble trained from scratch for the Jane Street Market Prediction challenge.", link: "https://github.com/KabhiCodeKabhiFork/CNN_LSTM_Ensemble_Stock_Prediction" },
];

const skills = [
  { title: "AI & LLMs", items: ["LLM agents & tool calling", "RAG & retrieval", "Evaluation pipelines", "Output guardrails", "Prompt-injection detection", "Apple MLX"] },
  { title: "Backend & data", items: ["FastAPI & REST", "PostgreSQL", "Redis", "Async pipelines", "Docker"] },
  { title: "Languages & frontend", items: ["Python", "JavaScript", "SQL", "React", "Electron"] },
  { title: "Agentic tooling", items: ["Claude Code", "MCP", "Scheduled triggers", "Automation bots"] },
];

const contactConfig = {
  YOUR_EMAIL: "kartikeysondhi@gmail.com",
  description: "Open to collaborators, investors, early users and teams that move fast.",
  // EmailJS — if these env vars are set the form sends directly; otherwise it falls back to mailto.
  YOUR_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  YOUR_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  YOUR_USER_ID: process.env.REACT_APP_EMAILJS_USER_ID,
};

const socialprofils = {
  github: { label: "KabhiCodeKabhiFork", url: "https://github.com/KabhiCodeKabhiFork" },
  linkedin: { label: "/in/kartikeysondhi", url: "https://www.linkedin.com/in/kartikeysondhi/" },
};

export { meta, intro, projects, skills, contactConfig, socialprofils };
