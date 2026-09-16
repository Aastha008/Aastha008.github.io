export interface Experiment {
  num: string;
  category: string;
  name: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  typeBadge: string;
}

export const EXPERIMENTS: Experiment[] = [
  {
    num: '001',
    category: 'DATA',
    name: 'DataPulseAI',
    description: 'Autonomous Text-to-SQL assistant on 547K+ records with self-healing LangGraph pipeline, dynamic DuckDB schema reflection, and SciPy statistical testing.',
    tech: ['Python', 'LangGraph', 'DuckDB', 'SciPy', 'Streamlit'],
    githubUrl: 'https://github.com/Aastha008/DataPulseAI',
    liveUrl: 'https://datapulse-ai.streamlit.app',
    typeBadge: 'AGENTIC DATA PIPELINE',
  },
  {
    num: '002',
    category: 'AI / AGENTS',
    name: 'ToolForge Runtime',
    description: 'Agentic middleware and execution sandboxing engine that validates, dry-runs, and safely executes LLM tool calls against dynamically compiled Pydantic schemas.',
    tech: ['Python', 'Pydantic', 'FastAPI', 'LLM Guardrails'],
    githubUrl: 'https://github.com/Aastha008/toolforge-runtime',
    typeBadge: 'LLM MIDDLEWARE',
  },
  {
    num: '003',
    category: 'SYSTEMS',
    name: 'ForgeDB',
    description: 'Relational storage engine from scratch in Java 21 with 4KB binary slotted pages, LRU buffer pool, B+ Tree indexes, Volcano iterator execution, and WAL ARIES recovery.',
    tech: ['Java 21', 'B+ Tree', 'Buffer Pool', 'WAL', 'Strict 2PL'],
    githubUrl: 'https://github.com/Aastha008/forgeDB',
    liveUrl: 'https://aastha008.github.io/forgeDB/',
    typeBadge: 'STORAGE ENGINE',
  },
  {
    num: '004',
    category: 'AI / SAFETY',
    name: 'Prompt Gateway',
    description: 'Production-ready LLM proxy gateway and safety orchestrator that enforces security guardrails, semantic prompt caching, PII sanitization, and structured validation.',
    tech: ['Python', 'FastAPI', 'Redis', 'Semantic Caching'],
    githubUrl: 'https://github.com/Aastha008/prompt-gateway',
    typeBadge: 'PROD GATEWAY',
  },
  {
    num: '005',
    category: 'ML OPS',
    name: 'Model Drift Detector',
    description: 'Production-grade ML inference monitoring and concept drift isolation engine calculating statistical feature drift against baseline training distributions.',
    tech: ['Python', 'Scikit-Learn', 'FastAPI', 'Statistical Drift'],
    githubUrl: 'https://github.com/Aastha008/model-drift-detector',
    typeBadge: 'ML MONITORING',
  },
  {
    num: '006',
    category: 'SYSTEMS',
    name: 'Migration Hazard Analyzer',
    description: 'Zero-downtime database migration hazard analyzer statically parsing raw SQL and ORM scripts to model DDL table rewrite hazards and lock severity levels.',
    tech: ['Python', 'SQL Parsing', 'PostgreSQL', 'Risk Modeling'],
    githubUrl: 'https://github.com/Aastha008/migration-hazard-analyzer',
    typeBadge: 'DB INFRASTRUCTURE',
  },
  {
    num: '007',
    category: 'WEB & STREAMING',
    name: 'PulseCart',
    description: 'Real-time e-commerce streaming analytics engine modeling user journey events, cart velocity, and predictive conversion signals.',
    tech: ['Python', 'FastAPI', 'Event Streams', 'Analytics'],
    githubUrl: 'https://github.com/Aastha008/PulseCart',
    typeBadge: 'EVENT ANALYTICS',
  },
  {
    num: '008',
    category: 'CAMPUS WEB',
    name: 'EduSwap',
    description: 'Full-stack peer-to-peer campus marketplace for VIT students with real-time listings, JWT authentication, and transactional state.',
    tech: ['React', 'FastAPI', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/Aastha008/eduswap',
    typeBadge: 'FULL STACK APP',
  }
];
