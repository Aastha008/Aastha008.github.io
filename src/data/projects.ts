export interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: string;
  statement: string;
  tags: string[];
  metrics: { label: string; value: string };
  summary: string;
  visualType: 'forgedb' | 'datapulse' | 'pulsecart' | 'synapse';
  problem: string;
  approach: string;
  system: string;
  result: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  pastelBg: string;
  accentColor: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'forgedb',
    num: '01',
    title: 'ForgeDB',
    subtitle: 'Relational Storage Engine from Scratch',
    category: 'SYSTEMS PROGRAMMING & DBMS INTERNALS',
    statement: 'HOW DO YOU BUILD A RELATIONAL DATABASE ENGINE FROM THE GROUND UP?',
    tags: ['Java 21', 'B+ Tree', 'Buffer Pool', 'WAL / ARIES', 'Strict 2PL'],
    metrics: {
      label: 'Storage Architecture',
      value: '4KB Slotted Pages • ACID ARIES',
    },
    summary: 'A disk-backed relational database storage engine built from scratch in Java 21 with slotted pages, LRU buffer pool, B+ Tree indexing, and ARIES crash recovery.',
    visualType: 'forgedb',
    problem:
      'Understanding database internals requires confronting the fundamental bottlenecks of disk I/O latency, concurrency hazards, and crash consistency that high-level ORMs completely hide.',
    approach:
      'Engineered a modular storage manager implementing 4KB binary slotted pages with RID-based record lookups, an LRU frame buffer manager, multi-way B+ Tree and Hash indexes with O(log N) point and range scans, and Volcano iterator query execution.',
    system:
      'Designed a write-ahead logging (WAL) subsystem adhering to the ARIES recovery protocol (Analysis, Redo, and Undo phases) to guarantee ACID durability across unexpected crashes, alongside Strict 2-Phase Locking (SS2PL) for serializable transaction isolation.',
    result:
      'Fully functional disk-backed database capable of parsing SQL ASTs, executing complex multi-predicate joins and aggregations, and surviving abrupt process termination without data corruption.',
    technologies: ['Java 21', 'B+ Tree', 'LRU Buffer Pool', 'WAL', 'ARIES Protocol', 'Strict 2PL', 'AST Parser'],
    githubUrl: 'https://github.com/Aastha008/forgeDB',
    liveUrl: 'https://aastha008.github.io/forgeDB/',
    pastelBg: '#EFE7FB', // Soft lavender
    accentColor: '#8A5BD6',
  },
  {
    id: 'datapulse-ai',
    num: '02',
    title: 'DataPulse AI',
    subtitle: 'Autonomous Product Intelligence Platform',
    category: 'AI QUERY SYSTEMS & DATA INFRASTRUCTURE',
    statement: 'CAN AN AI TRANSLATE QUESTIONS INTO SQL WITHOUT HALLUCINATING MATH?',
    tags: ['Python', 'DuckDB', 'LangGraph', 'FastAPI', 'SciPy'],
    metrics: {
      label: 'Telemetry Scale & Speed',
      value: '547K+ Records • < 50ms Query',
    },
    summary: 'A self-healing Text-to-SQL analytics copilot on 547K+ real e-commerce records, combining in-process DuckDB execution with deterministic SciPy statistical testing.',
    visualType: 'datapulse',
    problem:
      'Traditional LLM query demos fall apart in production by hallucinating statistical calculations, guessing table schemas, and failing silently on complex join syntax.',
    approach:
      'Architected a self-healing LangGraph state-machine that dynamically reflects DuckDB database schemas, compiles validated SQL with automated syntax correction retry loops, and extracts conversion counts directly into SciPy.',
    system:
      'Paired an in-process columnar DuckDB engine for sub-50ms analytical queries with a parallel PySpark DataFrame pipeline for big-data scalability, exposed via an interactive Streamlit workbench and FastAPI REST endpoints.',
    result:
      'Zero mathematical hallucinations through deterministic two-proportion z-tests and Chi-square SRM tests on 547K+ records, delivering production-grade automated analytical exploration.',
    technologies: ['Python', 'DuckDB', 'LangGraph', 'FastAPI', 'SciPy', 'Streamlit', 'PySpark'],
    githubUrl: 'https://github.com/Aastha008/DataPulseAI',
    liveUrl: 'https://datapulse-ai.streamlit.app',
    pastelBg: '#E2F6EB', // Soft mint
    accentColor: '#2D9A64',
  },
  {
    id: 'pulsecart',
    num: '03',
    title: 'PulseCart',
    subtitle: 'E-Commerce Analytics Engineering & A/B Infrastructure',
    category: 'ANALYTICS WAREHOUSING & EXPERIMENTATION',
    statement: 'WHAT CAN 100K+ BROWSING SESSIONS REVEAL ABOUT CUSTOMER FUNNEL LEAKAGE?',
    tags: ['BigQuery', 'dbt Core', 'SQL', 'Power BI', 'Python'],
    metrics: {
      label: 'Funnel & Experiment Scale',
      value: '100K+ Sessions • 74 DAX Measures',
    },
    summary: 'An enterprise analytics engineering warehouse and randomized checkout A/B testing framework analyzing 100,000+ customer browsing sessions.',
    visualType: 'pulsecart',
    problem:
      'High-traffic e-commerce platforms suffer severe drop-offs between browse and checkout without granular multi-touch tracking, customer retention attribution, or randomized experimentation.',
    approach:
      'Engineered a 4-layer Google BigQuery analytics warehouse (raw, staging, intermediate, marts) with modular dbt Core transformations, table clustering, and incremental partition merges over 230K events.',
    system:
      'Implemented randomized checkout A/B experimentation with two-proportion z-tests, 95% confidence intervals, and automated Sample Ratio Mismatch (SRM) checks, driving an executive 4-page Power BI dashboard with 74 production DAX measures.',
    result:
      'Pinpointed critical multi-stage checkout funnel friction points and verified annualized revenue lift with 115 automated pytest quality contracts passing.',
    technologies: ['Google BigQuery', 'dbt Core', 'SQL', 'Power BI', 'DAX', 'Python', 'pytest'],
    githubUrl: 'https://github.com/Aastha008/PulseCart',
    pastelBg: '#FFF3CD', // Butter yellow / peach
    accentColor: '#D48806',
  },
  {
    id: 'synapse',
    num: '04',
    title: 'Synapse',
    subtitle: 'Real-Time AI Observability & Root Cause Intelligence',
    category: 'DISTRIBUTED SYSTEMS & APPLIED MACHINE LEARNING',
    statement: 'HOW DO YOU ISOLATE CASCADING FAILURES ACROSS FLEETS OF MICROSERVICES?',
    tags: ['FastAPI', 'Isolation Forest', 'MongoDB', 'WebSockets', 'React'],
    metrics: {
      label: 'Telemetry Engine',
      value: 'Real-Time WebSocket Stream',
    },
    summary: 'An event-driven microservices observability platform combining machine learning anomaly detection with AI-powered Root Cause Analysis (RCA) on service dependency graphs.',
    visualType: 'synapse',
    problem:
      'Cascading microservice failures create overwhelming telemetry noise: when a downstream database slows down, upstream services timeout, masking the true root cause.',
    approach:
      'Built an asynchronous event bus ingesting real-time logs and metrics, applying Isolation Forest ML and Z-Score statistical anomaly detection to isolate abnormal service latency vectors.',
    system:
      'Constructed a dynamic service dependency graph traversal engine powered by LLMs (Gemini / OpenAI) to pinpoint the exact root failure node in seconds, streaming real-time alerts via WebSockets to a React 18 dashboard.',
    result:
      'Reduced mean time to detection (MTTD) by transforming thousands of noisy cascading error logs into a single actionable root cause diagnosis.',
    technologies: ['Python', 'FastAPI', 'Isolation Forest', 'MongoDB', 'WebSockets', 'React 18', 'TypeScript'],
    githubUrl: 'https://github.com/Aastha008/Synapse',
    pastelBg: '#E0F1FA', // Powder blue
    accentColor: '#2B82B8',
  },
];
