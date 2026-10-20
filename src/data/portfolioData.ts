import { PortfolioDataset } from '../types/portfolio';

export const initialPortfolioData: PortfolioDataset = {
  profile: {
    name: 'Chandra Jha',
    headline: 'Systems-level AI management and workflow orchestration.',
    subheadline: 'Master of Science in Generative AI Candidate @ CUNY SPS · Information Systems · Six Sigma Green Belt',
    summary:
      'I specialize in systems-level AI management and workflow orchestration, translating advanced Generative AI capabilities into reliable, human-centered organizational processes. Alongside my technical and administrative background in early childhood healthcare data audits and life insurance protection, I draw balance and perspective from hiking mountain trails, exploring quiet natural landscapes, and thoughtful, unhurried adventures.',
    location: 'New York City Metropolitan Area',
    email: 'chandra.jha44@gmail.com',
    linkedin: 'https://www.linkedin.com/in/chandrajha44',
    gammaPortfolio: '',
    github: 'https://github.com/Cmjha44',
    avatarUrl: '/src/assets/images/1790747923791.jpg',
    coreExpertise: []
  },
  stats: [
    {
      value: 'MS AI',
      label: 'CUNY SPS Scholar',
      caption: 'Applied generative AI architecture and organizational workflow design'
    },
    {
      value: '6 Yrs',
      label: 'Financial Protection',
      caption: 'Universal Index Life (IUL) & Term insurance advisory'
    },
    {
      value: '4x',
      label: "Dean's List Honors",
      caption: 'Academic distinction across CUNY SPS and LaGuardia CC'
    },
    {
      value: '100%',
      label: 'Data Reconciliation',
      caption: 'NYS Early Intervention Hub pediatric billing accuracy'
    }
  ],
  experience: [
    /* ----------------------------------------------------
       Category 1: Current Focus: AI & Systems Architecture
       ---------------------------------------------------- */
    {
      id: 'cuny-sps-research',
      company: 'CUNY School of Professional Studies',
      role: 'Generative AI & Systems Architecture Scholar',
      location: 'New York, NY',
      period: 'January 2026 — Present',
      isCurrent: true,
      category: 'AI & Systems Architecture',
      department: 'Graduate Applied AI Program',
      achievements: [
        'Researches systems-level generative AI architectures, retrieval-augmented generation (RAG) orchestration, and vector indexing governance.',
        'Designs automated prompt engineering protocols and state-based agentic workflows to eliminate organizational process bottlenecks.',
        'Evaluates enterprise AI governance frameworks, ensuring explainability, ethical boundaries, and data security in automated decision loops.',
        'Analyzes machine learning ecosystems to architect practical integration bridges between legacy enterprise systems and modern LLM platforms.'
      ],
      technologies: [
        'Vector Databases',
        'RAG Orchestration',
        'LangChain Framework',
        'Prompt Governance',
        'Agentic Workflows',
        'DevSecOps Principles'
      ]
    },
    {
      id: 'laguardia-ida',
      company: 'LaGuardia Community College (CUNY)',
      role: 'Instructional Design & Systems Technology Mentor',
      location: 'New York City Metropolitan Area',
      period: 'February 2024 — December 2024',
      isCurrent: false,
      category: 'AI & Systems Architecture',
      department: 'Center for Teaching and Learning (CTL)',
      achievements: [
        'Administered and streamlined academic instructional platforms across departments, optimizing LMS workflows within D2L Brightspace and Blackboard.',
        'Supervised and mentored cohorts of Student Technology Mentors (STMs), establishing standardized diagnostic troubleshooting and ticket resolution workflows.',
        'Architected digital ePortfolio frameworks ensuring full compliance with WCAG 2.1 AA accessibility standards across undergraduate Capstone studios.',
        'Facilitated faculty development workshops demonstrating modern digital tools and technology-augmented classroom workflows.'
      ],
      technologies: [
        'Instructional Systems Design',
        'D2L Brightspace LMS',
        'ePortfolio Architecture',
        'WCAG 2.1 AA Accessibility',
        'Workflow Optimization'
      ]
    },

    /* ----------------------------------------------------
       Category 2: Domain Expertise & Operations
       ---------------------------------------------------- */
    {
      id: 'achieve-beyond',
      company: 'Achieve Beyond Pediatric Therapy',
      role: 'Data Governance, Compliance Auditing & Healthcare Data Reconciliation Specialist',
      location: 'Forest Hills, NY',
      period: 'March 2025 — June 2026',
      isCurrent: false,
      category: 'Domain Expertise & Operations',
      department: 'Healthcare Operations & Compliance Systems',
      achievements: [
        'Instituted systematic data governance and compliance auditing protocols reconciling pediatric clinical session records directly against the NYS Early Intervention (EI) Hub.',
        'Eliminated billing discrepancies across heterogeneous provider spreadsheets and state databases through structured Excel verification pipelines, accelerating reimbursement cycles.',
        'Audited clinical authorizations, provider licenses, and billing records to maintain 100% compliance with strict New York State healthcare regulatory standards.',
        'Partnered with human resources to streamline clinician candidate screening and credential verification for urgent early-intervention pediatric cases.'
      ],
      technologies: [
        'NYS Early Intervention (EI) Hub',
        'Data Governance',
        'Compliance Auditing',
        'Healthcare Data Reconciliation',
        'Structured Verification Pipelines'
      ]
    },
    {
      id: 'nationwide',
      company: 'Nationwide Financial',
      role: 'Life Insurance Specialist — Risk Assessment & Regulatory Compliance',
      location: 'New York City Metropolitan Area',
      period: 'March 2023 — September 2026',
      isCurrent: false,
      category: 'Domain Expertise & Operations',
      department: 'Financial Protection & Risk Governance',
      achievements: [
        'Conducted structured actuarial and risk assessments across Universal Index Life (IUL) and Term insurance portfolios to engineer custom financial protection structures.',
        'Upheld strict compliance with state insurance regulatory codes, fiduciary disclosure mandates, and client suitability guidelines.',
        'Delivered client-centric problem solving to structure multifaceted income replacement, debt coverage, and generational asset insulation solutions.',
        'Modeled cash-value accumulation trajectories, living benefits (critical/chronic illness), and policy loans to insulate family assets.'
      ],
      technologies: [
        'Risk Assessment',
        'Regulatory Compliance',
        'Universal Index Life (IUL)',
        'Term Life Protection',
        'Client-Centric Problem Solving',
        'Living Benefits Structuring'
      ]
    },
    {
      id: 'transamerica',
      company: 'Transamerica Financial',
      role: 'Financial Risk & Advisory Consultant',
      location: 'New York, NY',
      period: 'September 2020 — September 2026',
      isCurrent: false,
      category: 'Domain Expertise & Operations',
      department: 'Client Risk Advisory Group',
      achievements: [
        'Formulated client risk management strategies, evaluating asset vulnerabilities and guiding policyholders through living benefits and debt protection structures.',
        'Executed regular policy compliance audits and client reviews, ensuring ongoing alignment with state insurance department regulations and life-stage milestones.',
        'Engineered educational frameworks clarifying index-crediting mechanics and legacy planning for high-net-worth and working-family client segments.'
      ],
      technologies: [
        'Risk Assessment',
        'Universal Index Life',
        'Fiduciary Standards',
        'Legacy Planning',
        'Policy Auditing'
      ]
    },
    {
      id: 'makalu-aerostar',
      company: 'Makalu Air & AeroStar Training Services',
      role: 'Commercial First Officer & Aviation Systems Pilot (ATP-CTP)',
      location: 'Nepal & Miami, FL',
      period: 'January 2015 — February 2016',
      isCurrent: false,
      category: 'Domain Expertise & Operations',
      department: 'Flight Operations & Cockpit Resource Management',
      achievements: [
        'Operated commercial aircraft in high-consequence flight regimes, adhering to strict FAA/ICAO checklist protocols and Crew Resource Management (CRM) guidelines.',
        'Graduated from the Airline Transport Pilot Certification Training Program (ATP-CTP) at AeroStar Miami, mastering advanced jet aerodynamics and automated flight control systems.',
        'Conducted rigorous pre-flight safety risk assessments, weather radar evaluations, and weight-and-balance systems reconciliation.'
      ],
      technologies: [
        'Checklist Architecture',
        'Crew Resource Management (CRM)',
        'Systems Safety Protocols',
        'High-Consequence Risk Mitigation'
      ]
    }
  ],
  education: [
    {
      id: 'cuny-sps-ms',
      institution: 'CUNY School of Professional Studies',
      degree: 'Master of Science',
      major: 'Generative Artificial Intelligence',
      period: 'January 2026 — Present',
      honors: 'Graduate Degree Candidate',
      programOverview:
        'One of the first graduate programs in the U.S. dedicated exclusively to generative artificial intelligence, launched in Spring 2026. Designed for decision-makers seeking to understand the modern AI solution ecosystem, solve real-world problems, and automate organizational processes with high governance standards.',
      coursework: [
        'Machine Learning',
        'Introduction to Generative AI',
        'Natural Language Processing & Understanding',
        'Vector Databases',
        'Large Language & Mixture of Expert (MoE) Models',
        'Prompt Engineering & LangChain',
        'Advanced State-Based Models & Prompt Programming',
        'Fine-Tuning & Retrieval-Augmented Generation (RAG)',
        'Intelligent Agents, Responsible & Explainable AI',
        'Capstone Project'
      ],
      highlights: [
        'Focus on systems-level AI management, vector database retrieval, and workflow orchestration',
        'Study of responsible AI governance, prompt programming, and agentic workflows'
      ]
    },
    {
      id: 'cuny-sps-bs',
      institution: 'CUNY School of Professional Studies',
      degree: 'Bachelor of Science',
      major: 'Information Systems',
      period: 'January 2025 — February 2026',
      honors: "Dean's List (June 2025)",
      highlights: [
        'Study of Enterprise Systems Architecture, Database Management, and Systems Analysis & Design',
        'IT governance, information security fundamentals, and business systems design'
      ]
    },
    {
      id: 'laguardia-as',
      institution: 'LaGuardia Community College (CUNY)',
      degree: 'Associate of Science with Honors',
      major: 'Business Administration',
      period: 'September 2021 — August 2024',
      honors: "Dean's List (3 Semesters) · Graduated with Honors",
      highlights: [
        'Core quantitative grounding in statistics, economics, and business organization',
        'Instructional technology leadership and peer student mentorship'
      ]
    }
  ],
  honors: [
    {
      id: 'h1',
      title: "Dean's List Award",
      institution: 'CUNY School of Professional Studies',
      date: 'June 2025',
      note: 'Recognized for sustained academic excellence in Information Systems'
    },
    {
      id: 'h2',
      title: "Dean's List Award",
      institution: 'CUNY LaGuardia Community College',
      date: 'August 2024',
      note: 'Top academic distinction in Business Administration'
    },
    {
      id: 'h3',
      title: "Dean's List Award",
      institution: 'CUNY LaGuardia Community College',
      date: 'March 2024',
      note: 'Distinction in Business and Quantitative Analytics'
    },
    {
      id: 'h4',
      title: "Dean's List Award",
      institution: 'CUNY LaGuardia Community College',
      date: 'September 2023',
      note: 'Academic honors recognition'
    }
  ],
  certifications: [
    {
      id: 'six-sigma',
      name: 'Six Sigma Green Belt',
      issuer: 'Quality Management / Lean Six Sigma',
      date: 'Certified',
      category: 'Process Optimization',
      credentialId: 'SSGB-VERIFIED'
    },
    {
      id: 'css-cert',
      name: 'CSS (Cascading Style Sheets) Certification',
      issuer: 'Web Development / CSS Training',
      date: 'Certified',
      category: 'Web Styling & Design',
      credentialId: 'CSS-CERT-VERIFIED'
    },
    {
      id: 'google-ai-prof',
      name: 'Google AI Professional Certificate',
      issuer: 'Google',
      date: 'Certified',
      category: 'Artificial Intelligence',
      credentialId: 'GOOG-AI-PROF'
    },
    {
      id: 'google-cybersecurity',
      name: 'Google Cybersecurity Professional Certificate',
      issuer: 'Google',
      date: 'Certified',
      category: 'Cybersecurity & Systems',
      credentialId: 'GOOG-CYBER-PROF'
    },
    {
      id: 'google-it',
      name: 'Google IT Support Professional Certificate',
      issuer: 'Google',
      date: 'Certified',
      category: 'Information Technology',
      credentialId: 'GOOG-IT-SUPPORT'
    }
  ],
  projects: [
    {
      id: 'genai-rag-assistant',
      title: 'Enterprise Policy Retrieval & Vector Search Orchestrator',
      category: 'Applied AI & RAG',
      featured: false,
      shortDescription: 'Automated semantic search and citation-backed knowledge retrieval system for querying complex regulatory compliance manuals.',
      architectureAndWorkflow:
        'Orchestrated via dense vector indexing and hybrid semantic retrieval rather than keyword queries to handle nuanced natural language questions across voluminous compliance documentation. The multi-step workflow chunks regulatory texts, generates normalized embeddings, and feeds grounded passages into a constrained LLM prompt with strict citation attribution safeguards, preventing hallucination in high-governance settings.',
      fullDescription:
        'Graduate coursework study examining semantic retrieval architectures, vector indexing, and structured prompt engineering to locate grounded compliance citations. Replaces static document searches with real-time semantic retrieval.',
      problemSolved:
        'Navigating multi-thousand page compliance handbooks creates operational latency and human citation error. This system orchestrates dense vector retrieval to ground answers strictly in validated policy passages.',
      techStack: ['Vector Databases', 'Prompt Orchestration', 'LangChain Framework', 'Semantic Search', 'AI Governance'],
      githubUrl: 'https://github.com/Cmjha44/genai-policy-rag',
      impactMetrics: [
        'Evaluation of dense embedding retrieval against test compliance manuals',
        'Grounded response generation with prompt templates',
        'Clean responsive user interface styled with custom CSS'
      ],
      highlights: [
        'Explores semantic chunk retrieval against test documents',
        'Structured prompt persona engineering for factual compliance answers',
        'Responsible AI safety boundaries'
      ]
    },
    {
      id: 'ei-hub-pipeline',
      title: 'Healthcare EI Data Reconciliation & Audit Engine',
      category: 'Data & Automation',
      featured: false,
      shortDescription: 'Systems-level automated data verification and audit pipeline reconciling clinical session logs with the official NYS Early Intervention (EI) Hub.',
      architectureAndWorkflow:
        'Engineered as a deterministic audit pipeline to eliminate human error between clinical treatment sheets and state compliance portals. The system parses multi-provider session entries, executes schema validation against state billing rules, flags missing therapist authorizations, and outputs an executive reconciliation ledger that reduced claim rejection rates and accelerated clinician reimbursement cycles.',
      fullDescription:
        'Standardized Excel verification workflow developed to audit clinical session logs against state compliance schemas, resolving billing delays and ensuring reimbursement accuracy.',
      problemSolved:
        'Manual comparisons between clinic logs and state portals created discrepancies. This project standardized verification sheets to streamline reimbursement reporting.',
      techStack: ['NYS EI Hub Protocols', 'Data Governance', 'Automated Auditing', 'Compliance Verification', 'Structured Pipelines'],
      githubUrl: 'https://github.com/Cmjha44/ei-billing-reconciliation',
      impactMetrics: [
        '100% discrepancy elimination in audited patient records',
        'Accelerated review turnaround for active clinical therapy cases',
        'Standardized intake checklist procedures'
      ],
      highlights: [
        'Alignment between treatment logs and state compliance tables',
        'Systematic validation of therapist session signatures and authorizations',
        'Clear discrepancy audit tracking'
      ]
    },
    {
      id: 'policylife-financial',
      title: 'Universal Index Life (IUL) Risk & Policy Architecture Simulator',
      category: 'Financial Systems',
      featured: false,
      shortDescription: 'Client-facing financial risk modeling and illustration engine structuring Universal Index Life (IUL) and Term protection scenarios.',
      architectureAndWorkflow:
        'Designed to replace opaque actuarial illustration sheets with a transparent, client-centric simulation architecture. The calculation engine visualizes multi-decade compound index crediting, living benefit trigger points (critical and chronic care), policy loan mechanics, and income replacement models, empowering clients to make informed, risk-insulated financial decisions.',
      fullDescription:
        'Interactive financial illustration framework designed to clearly explain life insurance policy options to clients, contrasting term coverage against permanent Universal Index Life (IUL) for income replacement and debt coverage.',
      problemSolved:
        'Demystifies life insurance structures, illustrating how Universal Index Life and Term insurance provide tailored protection for family peace of mind.',
      techStack: ['Risk Assessment Engine', 'Universal Index Life (IUL)', 'Regulatory Disclosures', 'Financial Modeling', 'Client Advisory Architecture'],
      githubUrl: 'https://github.com/Cmjha44/policylife-simulator',
      impactMetrics: [
        'Clear comparison between Term and Universal Index Life (IUL)',
        'Visualizes income replacement, debt coverage, and legacy planning scenarios',
        'Structured consultation checklist for client financial reviews'
      ],
      highlights: [
        'Clear modeling of policy options for debt coverage and family peace of mind',
        'Demonstrates living benefits and cash-value growth scenarios',
        'Client-friendly presentation format styled with clean CSS'
      ]
    },
    {
      id: 'cuny-edtech-hub',
      title: 'Higher-Ed Instructional Systems & ePortfolio Portal',
      category: 'Web & EdTech',
      featured: false,
      shortDescription: 'Unified digital learning portal and resource orchestration hub supporting technology mentoring, learning management systems, and academic portfolios.',
      architectureAndWorkflow:
        'Built to unify fragmented higher-ed IT systems (Brightspace LMS, Blackboard, CUNYfirst) into a single, accessible gateway for undergraduate and capstone students. The modular structure provides interactive checklists, peer booking pipelines, and artifact curation templates compliant with WCAG 2.1 AA accessibility standards.',
      fullDescription:
        'Developed to support student cohorts and faculty at LaGuardia CC, aggregating step-by-step guides for Brightspace, Blackboard, and digital ePortfolios.',
      problemSolved:
        'Provided undergraduate and capstone students with accessible, centralized instructions for building academic portfolios and navigating learning management systems.',
      techStack: ['Instructional Systems Design', 'D2L Brightspace', 'ePortfolio Architecture', 'WCAG 2.1 AA Compliance', 'User Centered Systems'],
      githubUrl: 'https://github.com/Cmjha44/cuny-edtech-mentor-portal',
      impactMetrics: [
        'Supported 12+ Capstone studio sections and workshops',
        'Assisted 500+ students and faculty across digital learning labs',
        'Accessible, clean web layout styled with certified CSS'
      ],
      highlights: [
        'Step-by-step digital artifact curation instructions',
        'Accessible, responsive layout crafted with certified CSS techniques',
        'Peer technology mentoring guide'
      ]
    }
  ],
  skills: [
    {
      categoryName: 'Core Technical Competencies',
      summary: 'Systems-level AI orchestration, data retrieval, and governance',
      skills: [
        { name: 'Python programming', highlighted: true },
        { name: 'Google AI Studio orchestration', highlighted: true },
        { name: 'DevSecOps governance', highlighted: true },
        { name: 'Vector databases', highlighted: true }
      ]
    },
    {
      categoryName: 'Generative AI & ML (Graduate Coursework)',
      summary: 'Applied curriculum at CUNY SPS (no course codes or credit mentions)',
      skills: [
        { name: 'Machine Learning', highlighted: true },
        { name: 'Introduction to Generative AI', highlighted: true },
        { name: 'Natural Language Processing & Understanding', highlighted: true },
        { name: 'Large Language & Mixture of Expert (MoE) Models' },
        { name: 'Prompt Engineering & LangChain', highlighted: true },
        { name: 'Advanced State-Based Models & Prompt Programming' },
        { name: 'Fine-Tuning & Retrieval-Augmented Generation (RAG)', highlighted: true },
        { name: 'Intelligent Agents, Responsible & Explainable AI' }
      ]
    },
    {
      categoryName: 'Life Insurance & Financial Advisory',
      summary: 'Licensed life insurance advisory, client protection, and legacy planning',
      skills: [
        { name: 'Universal Index Life (IUL) Insurance', highlighted: true },
        { name: 'Term Life Insurance', highlighted: true },
        { name: 'Income Replacement Planning', highlighted: true },
        { name: 'Debt Coverage Strategy', highlighted: true },
        { name: 'Legacy Planning & Family Protection', highlighted: true },
        { name: 'Living Benefits & Critical Illness Protections' }
      ]
    },
    {
      categoryName: 'Process Quality & Operations',
      summary: 'Lean Six Sigma methodology, defect reduction, and operational compliance',
      skills: [
        { name: 'Six Sigma Green Belt (DMAIC)', highlighted: true },
        { name: 'Process Flow & Bottleneck Mapping', highlighted: true },
        { name: 'Discrepancy Auditing & Root Cause Analysis' },
        { name: 'Checklist Architecture & Aviation Safety Protocols' }
      ]
    },
    {
      categoryName: 'Web Styling & Platforms',
      summary: 'Certified CSS styling, enterprise portals, and LMS administration',
      skills: [
        { name: 'CSS (Cascading Style Sheets) — Certified', highlighted: true },
        { name: 'HTML & Semantic Web Layouts' },
        { name: 'NYS Early Intervention (EI) Hub Administration', highlighted: true },
        { name: 'D2L Brightspace LMS & CUNYfirst' },
        { name: 'Microsoft 365 & Advanced Excel' }
      ]
    }
  ]
};
