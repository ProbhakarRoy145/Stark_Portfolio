// Centralized portfolio data — edit here to personalize the site.

export const profile = {
  name: 'Probhakar Roy',
  role: 'Software Consulting Engineer',
  tagline:
    'Full-stack engineer building network management platforms, AI/ML-driven applications and deployment automation at Cisco.',
  location: 'Bengaluru, India',
  email: 'starkaryan475@gmail.com',
  phone: '+91 70013 10770',
  social: [
    { label: 'GitHub', href: 'https://github.com/ProbhakarRoy145' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/probhakaroy475/' },
  ],
};

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Journey' },
  { id: 'certs', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { value: '3', label: 'Enterprise projects' },
  { value: '450+', label: 'DSA problems curated' },
  { value: '5', label: 'Languages spoken' },
  { value: '8.43', label: 'B.Tech CGPA' },
];

export const skills = [
  { name: 'Python', level: 92, group: 'Language' },
  { name: 'JavaScript / TypeScript', level: 88, group: 'Language' },
  { name: 'React.js', level: 90, group: 'Frontend' },
  { name: 'Angular', level: 85, group: 'Frontend' },
  { name: 'Django REST', level: 86, group: 'Backend' },
  { name: 'Flask / Node.js', level: 80, group: 'Backend' },
  { name: 'Neo4j (Graph DB)', level: 82, group: 'Database' },
  { name: 'Redis', level: 78, group: 'Database' },
  { name: 'Docker / Ansible', level: 76, group: 'DevOps' },
  { name: 'Machine Learning / NLP', level: 78, group: 'AI / ML' },
];

export const marqueeSkills = [
  'C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'React.js', 'Angular',
  'Tailwind', 'Node.js', 'Django REST', 'Flask', 'Neo4j', 'Redis', 'MongoDB',
  'SQL', 'Docker', 'Ansible', 'Linux', 'Git', 'RAG', 'NLP', 'Deep Learning',
];

export const languages = ['English', 'Bengali', 'Hindi', 'Spanish', 'Nepali'];

export const hobbies = ['Singing', 'Writing', 'Cooking', 'Video editing', 'Voiceover'];

export const projects = [
  {
    title: 'Tech-Matrix',
    category: 'Web App · DSA',
    year: '2026',
    description:
      'A collection of 450+ DSA questions with cool animations that reveal patterns and algorithms — packed with features to help DSA learners solve the exact problems I faced myself.',
    tags: ['Angular', 'TypeScript', 'Firebase', 'EmailJS', 'Figma'],
    color: '#C6F24E',
    link: 'https://github.com/ProbhakarRoy145/Tech-Matrix',
    live: 'https://tech-matrix-58005.web.app',
    video: '/Tech-matrix.mp4',
  },
  {
    title: 'YouTube Transcript Summarizer',
    category: 'Chrome Extension · AI',
    year: '2024',
    description:
      'A Chrome extension that transcribes and summarizes text from YouTube videos using transformer models and Hugging Face — wrapped in a lightweight Flask backend.',
    tags: ['Python', 'Flask', 'Transformers', 'Hugging Face', 'JavaScript'],
    color: '#FF5E3A',
    link: 'https://github.com/ProbhakarRoy145/Youtube-Transcript-Summerizer',
    live: null,
    image: '/project2.png',
  },
];

export const experience = [
  {
    role: 'SONiC AI KnowledgeGraph',
    company: 'Cisco · Software Consulting Engineer (Trainee)',
    period: 'SEPT 2025',
    description:
      'Developed full-stack features for SONiC-based network management and troubleshooting using AngularJS, TypeScript and Neo4j — architecture visualization, configuration workflows, routing features and containerized service insights. Integrated Redis-backed operational state to improve monitoring and observability.',
  },
  {
    role: 'DeepSight AI',
    company: 'Cisco · Software Consulting Engineer (Trainee)',
    period: 'OCT 2025 - Present',
    description:
      'Built a platform for generating and validating synthetic network telemetry for ML use cases. Backend in Python + Django REST for data prep, scaling, validation and JSON workflows; React.js frontend for workflow management and visualization. Supported fault detection, anomaly detection, performance prediction and security threat detection.',
  },
  {
    role: 'Programmable Installer',
    company: 'Cisco · Software Consulting Engineer (Trainee)',
    period: 'MAY 2026 - Present',
    description:
      'Contributed to a programmable installer automating deployment across on-prem, cloud, VM, bare-metal and Kubernetes/OpenShift. Worked on AI-guided intent capture, manifest/YAML generation, infrastructure abstraction and lifecycle management — installs, upgrades, rollback, pre-checks and post-checks.',
  },
  {
    role: 'B.Tech, Information Technology',
    company: 'Netaji Subhash Engineering College, Kolkata',
    period: 'Aug 2020 — Jul 2024',
    description:
      'Graduated with an 8.43 CGPA. Focused on networking fundamentals (CCNA), Network Services Orchestrator (NSO), data structures and full-stack software development.',
  },
];

export const certifications = [
  {
    title: 'CCNA Certified',
    issuer: 'Cisco',
    tag: 'Networking',
    file: '/certificates/Cisco Certified Network Associate certificate.pdf',
  },
  {
    title: 'Angular',
    issuer: 'Udemy',
    tag: 'Frontend',
    file: '/certificates/Angular UC-3404dd12-f14a-4a7e-8fdf-eb637de5c59d.pdf',
  },
  {
    title: 'Django REST',
    issuer: 'Udemy',
    tag: 'Backend',
    file: '/certificates/Django CertificationUC-b8478e3b-a476-4695-993d-46f638cf0792.pdf',
  },
  {
    title: 'Data Science & ML',
    issuer: 'Udemy',
    tag: 'AI / ML',
    file: '/certificates/DS and ML UC-b480e39f-2699-4971-917c-52c18d507b06.pdf',
  },
  {
    title: 'DSA with Python',
    issuer: 'Udemy',
    tag: 'DSA',
    file: '/certificates/DSA-Python UC-3e1fb77a-ef76-461a-adb7-3413d2518d88.pdf',
  },
  {
    title: 'Figma',
    issuer: 'Udemy',
    tag: 'Design',
    file: '/certificates/Figma-UC-b1b14939-fc0e-4370-b8ea-da43360755d1.pdf',
  },
  {
    title: 'GenAI',
    issuer: 'Udemy',
    tag: 'AI / ML',
    file: '/certificates/Gen AI UC-e52e0db5-4d91-40de-9b16-05f3901680bc.pdf',
  },
  {
    title: 'Git & GitHub',
    issuer: 'Udemy',
    tag: 'DevOps',
    file: '/certificates/Git UC-85eee9e0-d3df-4201-b093-a0783329095b.pdf',
  },
  {
    title: 'LLM',
    issuer: 'Udemy',
    tag: 'AI / ML',
    file: '/certificates/LLMUC-5d648d89-f1d0-4760-bb43-970c673782d2.pdf',
  },
  {
    title: 'NLP',
    issuer: 'Udemy',
    tag: 'AI / ML',
    file: '/certificates/NLP udemy Certificates.pdf',
  },
  {
    title: 'Node.js',
    issuer: 'Udemy',
    tag: 'Backend',
    file: '/certificates/Node UC-ec2fe88d-b0cb-46f0-bb8c-aa18d7e12310.pdf',
  },
  {
    title: 'RAG',
    issuer: 'Udemy',
    tag: 'AI / ML',
    file: '/certificates/RAG-UC-4108b7d2-8b9d-49d2-aa4a-05812f3ffedd.pdf',
  },
];
