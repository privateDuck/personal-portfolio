export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  // { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export const techStackItems = [
  { label: 'C++', hi: true },
  { label: 'Rust', hi: true },
  { label: 'Vulkan', hi: false },
  { label: 'OpenGL', hi: false },
  { label: 'HLSL/GLSL', hi: false },
  { label: 'Python', hi: true },
  { label: 'FastAPI', hi: false },
  { label: 'PyTorch', hi: false },
  { label: 'TypeScript', hi: true },
  { label: 'React', hi: false },
  { label: 'Next.js', hi: false },
  { label: 'Java', hi: false },
  { label: 'C#', hi: false },
  { label: 'CMake', hi: false },
  { label: 'Linux', hi: false },
];

export interface TechGridItem {
  name: string;
  icon: string;
}

export const techGridItems: TechGridItem[] = [
  // Languages
  /*   { name: 'C++', icon: 'SiCplusplus' },
    { name: 'Rust', icon: 'SiRust' },
    { name: 'Python', icon: 'SiPython' },
    { name: 'TypeScript', icon: 'SiTypescript' },
    { name: 'JavaScript', icon: 'SiJavascript' },
    { name: 'Java', icon: 'DiJava' },
    { name: 'GoLang', icon: 'FaGolang' }, */

  // Backend & Frameworks
  { name: 'Node.js', icon: 'SiNodedotjs' },
  { name: '.NET', icon: 'SiDotnet' },
  { name: 'FastAPI', icon: 'SiFastapi' },
  { name: 'PyTorch', icon: 'SiPytorch' },
  { name: 'Qt', icon: 'SiQt' },

  // Frontend
  { name: 'React', icon: 'SiReact' },
  { name: 'Next.js', icon: 'SiNextdotjs' },
  { name: 'Electron.js', icon: 'SiElectron' },

  { name: 'HTML', icon: 'SiHtml5' },
  { name: 'CSS', icon: 'DiCss3' },
  { name: 'Tailwind', icon: 'SiTailwindcss' },

  // Graphics & Game Dev
  { name: 'Vulkan', icon: 'SiVulkan' },
  { name: 'OpenGL', icon: 'SiOpengl' },
  { name: 'Unity', icon: 'SiUnity' },

  // Databases
  { name: 'Postgres', icon: 'SiPostgresql' },
  { name: 'MySQL', icon: 'SiMysql' },
  { name: 'SQLite', icon: 'SiSqlite' },
  { name: 'DuckDB', icon: 'SiDuckdb' },
  { name: 'MongoDB', icon: 'SiMongodb' },

  // Tools & Infrastructure
  { name: 'CMake', icon: 'SiCmake' },
  { name: 'Linux', icon: 'SiLinux' },
  { name: 'AWS', icon: 'FaAws' },
  { name: 'Docker', icon: 'SiDocker' },
  { name: 'Git', icon: 'SiGit' },
];

export const heroStats = [
  { num: '~10', label: 'Years\nProgramming' },
  { num: '8', label: 'Languages\nProficient' },
  /* { num: '5', label: 'Core\nDomains' }, */
];

export const aboutStats = [
  { num: '42', unit: '', label: 'Default Seed &\nAnswer to Life' },
  { num: '0', unit: '', label: 'Linker errors\nallowed in CI' },
  { num: 'clang-cl', unit: '', label: 'Primary\nCompiler' },
  { num: 'x86_64', unit: '', label: 'Architecture\nof Choice' },
];

export interface AboutMetaRow {
  key: string;
  value: string;
  href?: string;
}

export const aboutMetaRows: AboutMetaRow[] = [
  { key: 'Status', value: 'BSc (Hons) Computer Science Undergraduate, University of Kelaniya' },
  { key: 'Primary lang', value: 'C++ / Python / C# / Rust / TS' },
  { key: 'Domains', value: 'Systems · Web · ML · Automation · Data Science' },
  { key: 'Currently on', value: 'Finishing up projects.' },
  { key: 'OS', value: 'Windows' },
  /* { key: 'Resume', value: 'Download PDF ↓', href: 'resume.pdf' }, */
];

export type DotState = 'filled' | 'half' | 'empty';

export interface LanguageData {
  name: string;
  years: string;
  dots: DotState[];
  note: string;
}

export const languages: LanguageData[] = [
  { name: 'C/C++', years: 'Core/Main', dots: ['filled', 'filled', 'filled', 'filled', 'filled'], note: 'Primary language. Deeply familiar with modern standards (C++17/20/23).' },
  { name: 'Python', years: 'Proficient', dots: ['filled', 'filled', 'filled', 'filled', 'filled'], note: 'Highly capable with backend ecosystems, ML workflows, script automation, and data manipulation.' },
  { name: 'JS/TS', years: 'proficient', dots: ['filled', 'filled', 'filled', 'filled', 'empty'], note: 'React, Next.js. Full-stack capable.' },
  { name: 'C#', years: 'proficient', dots: ['filled', 'filled', 'filled', 'filled', 'half'], note: '.NET ecosystem, Unity scripting, desktop tooling.' },
  { name: 'Java', years: 'skilled', dots: ['filled', 'filled', 'filled', 'half', 'empty'], note: 'General-purpose, object-oriented systems and applications.' },
  { name: 'Rust', years: 'active migration', dots: ['filled', 'filled', 'half', 'empty', 'empty'], note: 'Transferring C++ expertise. Ownership model, async, systems work.' },
];

export interface SkillTag {
  label: string;
  accent: boolean;
}

export interface SkillGroup {
  title: string;
  desc: string;
  tags: SkillTag[];
}

export interface ProjectData {
  index: string;
  domain: string;
  status: string;
  statusType: 'completed' | 'wip' | 'ci/cd';
  name: string;
  desc: string;
  stack: string[];
  href: string;
  featured: boolean;
}

export const projects: ProjectData[] = [
  {
    index: '01',
    domain: 'ML Infrastructure / Data Systems',
    status: 'In Progress',
    statusType: 'wip',
    name: 'Axiom',
    desc: "A from-scratch ML data platform in C++, built as a much larger successor to Neurolabs. An import module ingests CSV/Parquet/JSON/XLSX and remote or database sources (MySQL, Postgres) into a unified queryable table layer; a compute module runs user-defined graphs of data-transformation and ML nodes with per-node state inspection; an inference engine serves compiled graphs against custom input. Built on Apache Arrow, DuckDB, LibTorch, Eigen, Google Highway, xsimd, xtensor, LightGBM and XGBoost. UI planned in Flutter, with a portable standalone inference module planned for embedding in other languages.",
    stack: ['C++', 'Apache Arrow', 'DuckDB', 'LibTorch', 'Eigen', 'XGBoost'],
    href: 'https://github.com/privateDuck/axiom-compute',
    featured: true,
  },
  {
    index: '02',
    domain: 'ML Tooling / Full-Stack',
    status: 'Completed',
    statusType: 'completed',
    name: 'Neurolabs',
    desc: "A no-code tool for training ML models on tabular data: point-and-click model selection, sliders for hyperparameters, live training history, and a built-in inference engine for testing trained models on custom input. React/TypeScript frontend, FastAPI backend with scikit-learn, pandas, NumPy, SciPy and PyTorch. Built as a 2nd-year group project, primary contributor; awarded Best Project at the 2025 faculty symposium.",
    stack: ['React', 'TypeScript', 'FastAPI', 'scikit-learn', 'PyTorch'],
    href: 'https://github.com/Team-Voxel/neurolabs',
    featured: true,
  },
  {
    index: '03',
    domain: 'Computational Physics',
    status: 'In Progress',
    statusType: 'wip',
    name: 'Geodesic Trajectory Solver',
    desc: 'A general-relativistic trajectory solver that integrates geodesic equations via the Hamiltonian formulation, with custom integrators and per-metric stopping conditions. Supports Minkowski, Kerr-Newman (Kerr-Schild and Boyer-Lindquist forms), FLRW, Godel and Rindler spacetimes, with room for user-defined metrics. Runs in both precomputed and real-time modes, and handles multi-body systems.',
    stack: ['C++', 'General Relativity', 'Numerical Integration'],
    href: 'https://github.com/privateDuck/geodesic-trajectory-solver',
    featured: true,
  },
  {
    index: '04',
    domain: 'Graphics / Computational Physics',
    status: 'Completed',
    statusType: 'completed',
    name: 'Real-Time Kerr-Newman Black Hole Renderer',
    desc: 'A real-time renderer for a Kerr-Newman black hole: ray-marched null geodesics for physically accurate light deflection near the event horizon, a rendered accretion disk, and orbital motion. Built as a toy project alongside the geodesic trajectory solver.',
    stack: ['C++', 'GLSL/HLSL', 'Ray Marching'],
    href: '#',
    featured: true,
  },
  {
    index: '05',
    domain: 'Machine Learning / Systems',
    status: 'CI/CD',
    statusType: 'ci/cd',
    name: 'AxML',
    desc: "A from-scratch C++ machine learning library, written after finding MLpack's model coverage and its Armadillo/Ensmallen dependencies too limiting. Implements linear and logistic regression (binary and multiclass, gradient-based or closed-form), linear and RBF SVC, LDA, QDA, a gradient-trainable differentiable QDA, random forest, isolation forest, PCA, and a multilayer perceptron, among others. A core dependency of Axiom; not yet published as a standalone repo.",
    stack: ['C++', 'Eigen', 'Numerical Optimization'],
    href: 'https://github.com/privateDuck/AxML',
    featured: true,
  },
  {
    index: '06',
    domain: 'Machine Learning / Numerical Methods',
    status: 'Completed',
    statusType: 'completed',
    name: 'Bayespp',
    desc: 'A header-only C++17 library for Bayesian optimization. Users define a black-box objective as a functor over a parameter search space; the library fits a Gaussian process surrogate and uses Expected Improvement to drive the search toward a minimum.',
    stack: ['C++17', 'Eigen', 'Gaussian Processes'],
    href: 'https://github.com/privateDuck/bayespp',
    featured: false,
  },
  {
    index: '07',
    domain: 'Compilers / Systems',
    status: 'Completed',
    statusType: 'completed',
    name: 'Bare Silicon',
    desc: 'A compiler-design learning project: a language sitting between C and assembly, pairing C-like syntax with explicit, assembly-level memory management. Lexer and parser generated with ANTLR; started with a handwritten code emitter, later replaced with an LLVM backend, plus a range of compiler optimization passes.',
    stack: ['C++', 'LLVM', 'ANTLR'],
    href: 'https://github.com/privateDuck/Bare-Sillicon',
    featured: false,
  },
  {
    index: '08',
    domain: 'Graphics',
    status: 'Completed',
    statusType: 'completed',
    name: 'Real-Time Atmospheric Scattering Simulator',
    desc: 'A real-time atmospheric scattering renderer supporting hot-swapping of atmosphere presets and parameters, built to explore physically based sky and planetary rendering techniques.',
    stack: ['Unity', 'HLSL', 'Real-Time Rendering'],
    href: '#',
    featured: false,
  },
  {
    index: '09',
    domain: 'Simulation / Tools',
    status: 'Paused',
    statusType: 'wip',
    name: 'ATLAS',
    desc: 'Another Tool for Logic Analysis and Simulation: a logic simulation app (C++, ImGui) combining a logic expression evaluator and simplifier, a circuit simulator, DFA/NFA simulators, and a Turing machine simulator. Originally included a programmable model computer, inspired by the Little Man Computer, which grew into the standalone Bare Silicon project. Paused for academic work.',
    stack: ['C++', 'ImGui', 'Automata Theory'],
    href: '#',
    featured: false,
  },
  {
    index: '10',
    domain: 'Data Systems',
    status: 'Completed',
    statusType: 'completed',
    name: 'AxFrame',
    desc: 'A column-store dataframe backing AxML, storing all columns in a single contiguous memory allocation for cache-friendly access. Provides core data-access operations and dataset-splitting utilities (e.g. train/test split); data is submitted programmatically rather than read from files.',
    stack: ['C++', 'Data Structures'],
    href: '#',
    featured: false,
  },
  {
    index: '11',
    domain: 'Systems / Libraries',
    status: 'Completed',
    statusType: 'completed',
    name: 'Funclib',
    desc: 'A header-only C++ library for defining and evaluating mathematical functions at runtime, in the spirit of ExprTk. Built primarily as a learning exercise; does not reach ExprTk-level performance.',
    stack: ['C++', 'Header-only'],
    href: '#',
    featured: false,
  },
];


export const contactRows = [
  { platform: 'Email', handle: 'stsp.official@gmail.com', href: 'mailto:stsp.official@gmail.com', arrow: '↗' },
  { platform: 'GitHub', handle: '@privateDuck', href: 'https://github.com/privateDuck', arrow: '↗' },
  { platform: 'LinkedIn', handle: 'Pansilu Jayawardane', href: 'https://www.linkedin.com/in/tharuka-jayawardane-in/', arrow: '↗' },
  /* { platform: 'Resume', handle: 'Download PDF', href: 'resume.pdf', arrow: '↓' }, */
];

export interface ExperienceData {
  id: string;
  role: string;
  company: string;
  duration: string;
  desc: string;
}

export const experiences: ExperienceData[] = [
  {
    id: 'exp1',
    role: '',
    company: '',
    duration: '',
    desc: '',
  },
];

export interface WritingData {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  href: string;
}

export const writingArticles: WritingData[] = [
  /* {
    id: '',
    title: '',
    date: '',
    readTime: '',
    excerpt: '',
    href: '#',
  },*/
];
