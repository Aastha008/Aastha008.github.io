export interface JourneyItem {
  year: string;
  focus: string;
  subtitles: string[];
  organization?: string;
  description: string;
}

export const JOURNEY: JourneyItem[] = [
  {
    year: '2026',
    focus: 'BUILDING • EXPERIMENTING • LEARNING',
    subtitles: ['ADVANCED AI AGENTS', 'STORAGE ENGINES', 'QUANTITATIVE LABS'],
    description: 'Exploring autonomous agent frameworks, relational storage engine internals in Java 21, and live volatility modeling.',
  },
  {
    year: '2025',
    focus: 'PROJECTS • DATA • IoT',
    subtitles: ['EDGE INFERENCE', 'OLAP ENGINES', 'DIAGNOSTIC ANALYTICS'],
    description: 'Published edge flood prediction research on ESP32 microcontrollers and engineered high-speed columnar data pipelines on 500K+ records.',
  },
  {
    year: 'ACADEMIC',
    focus: 'VIT VELLORE',
    subtitles: ['B.Tech CSE (IoT)', 'VELLORE INSTITUTE OF TECHNOLOGY'],
    organization: 'VIT Vellore',
    description: 'Specializing in Computer Science & Engineering with Internet of Things. Merging core software systems with physical computing.',
  },
];
