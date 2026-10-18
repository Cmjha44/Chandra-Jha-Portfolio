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
    avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQEOY1m1WJW7qg/profile-displayphoto-scale_400_400/B4DaDw5MqYJYAk-/0/1790747923791?e=1793836800&v=beta&t=NFxSyiOpnmBqmpGcq5UysvScFyVWs6Uyh9frQEmx_0o',
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
    {
      id: 'nationwide',
      company: 'Nationwide',
      role: 'Life Insurance Agent',
      location: 'New York City Metropolitan Area',
      period: 'March 2023 — September 2026',
      isCurrent: false,
      department: 'Financial Protection & Policy Advisory',
      achievements: [
        'Specialized in life insurance solutions, focusing on Universal Index Life (IUL) and Term insurance.',
        'Guided clients in securing essential financial protection, structuring tailored options for income replacement, debt coverage, and generational legacy planning.',
        'Conducted individualized needs assessments to provide enduring peace of mind and financial security for families.',
        'Advised policyholders on living benefits, cash-value growth potential, and tax-efficient wealth preservation.'
      ],
      technologies: [
        'Universal Index Life (IUL)',
        'Term Life Insurance',
        'Income Replacement',
        'Debt Coverage',
        'Legacy Planning',
        'Client Needs Analysis'
      ]
    },
    {
      id: 'transamerica',
      company: 'Transamerica',
      role: 'Business Professional & Advisory',
      location: 'New York, NY',
      period: 'September 2020 — September 2026',
      isCurrent: false,
      department: 'Client Advisory Group',
      achievements: [
        'Assisted clients with life insurance protection options, focusing on Universal Index Life and Term insurance coverage.',
        'Evaluated income replacement and debt insulation priorities to protect family assets from unforeseen life events.',
        'Provided comprehensive policy reviews to ensure protection remained aligned with evolving family goals.'
      ],
      technologies: [
        'Universal Index Life',
        'Term Insurance',
        'Family Financial Protection',
        'Policy Structuring'
      ]
    },
    {
      id: 'achieve-beyond',
      company: 'Achieve Beyond',
      role: 'NYS Early Intervention Billing & Staffing Evaluation Specialist',
      location: 'Forest Hills, NY',
      period: 'March 2025 — June 2026',
      department: 'Operations & Healthcare Reconciliation',
      achievements: [
        'Audited and synchronized patient clinical treatment records in Excel against the official NYS Early Intervention (EI) Hub database, eliminating reporting discrepancies.',
        'Collaborated with HR to vet clinician candidates for pediatric speech, physical, and occupational therapy assignments.',
        'Managed clinical inventory schedules and therapy material distribution to prevent operational disruptions.'
      ],
      technologies: ['NYS EI Hub', 'Advanced Excel', 'Data Auditing', 'Staffing Evaluation', 'Healthcare Compliance']
    },
    {
      id: 'laguardia-ida',
      company: 'LaGuardia Community College',
      role: 'Instructional Design Assistant (IDA)',
      location: 'New York City Metropolitan Area',
      period: 'February 2024 — December 2024',
      department: 'Center for Teaching and Learning (CTL)',
      achievements: [
        'Supported faculty and students across academic departments with digital learning technologies and instructional software.',
        'Supervised and mentored cohorts of Student Technology Mentors (STMs) in learning management systems troubleshooting.',
        'Guided Capstone students with digital ePortfolio architecture, accessibility compliance, and artifact curation.'
      ],
      technologies: ['Instructional Technology', 'ePortfolios', 'D2L Brightspace', 'Microsoft 365', 'Blackboard']
    },
    {
      id: 'laguardia-stm',
      company: 'LaGuardia Community College',
      role: 'Student Technology Mentor (STM)',
      location: 'Greater New York City Area',
      period: 'September 2023 — February 2024',
      department: 'Educational Technology & Student Services',
      achievements: [
        'Conducted peer workshops and technical tutorials on campus digital tools, learning portals, and ePortfolios.',
        'Delivered diagnostic technical assistance for Blackboard and CUNYfirst enterprise platforms.'
      ],
      technologies: ['CUNYfirst', 'Blackboard', 'Peer Mentoring', 'Technical Troubleshooting']
    },
    {
      id: 'makalu-aerostar',
      company: 'Makalu Air & AeroStar Training Services',
      role: 'First Officer (Co-Pilot) & ATP-CTP Graduate',
      location: 'Nepal & Miami, FL',
      period: 'January 2015 — February 2016',
      achievements: [
        'Operated commercial aircraft as First Officer (Co-Pilot), managing cockpit checklist verification and situational safety protocols.',
        'Completed the Airline Transport Pilot Certification Training Program (ATP-CTP) at AeroStar Miami, focusing on turbine systems and high-altitude flight operations.'
      ],
      technologies: ['Cockpit Resource Management', 'Aviation Systems', 'Checklist Protocols', 'Risk Mitigation']
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
      title: 'Vector Search & Policy Retrieval Study',
      category: 'Applied AI & RAG',
      featured: false,
      shortDescription: 'Exploration of vector databases, semantic embeddings, and prompt orchestration for querying organizational policy documents.',
      fullDescription:
        'Graduate coursework study examining semantic retrieval architectures, vector indexing, and structured prompt engineering to locate grounded compliance citations.',
      problemSolved:
        'Investigates how modern vector databases and prompt engineering can replace static document searches with citation-backed semantic retrieval.',
      techStack: ['Vector Databases', 'Prompt Engineering', 'LangChain Concepts', 'Python Basics', 'CSS'],
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
      title: 'Healthcare EI Billing Data Reconciliation',
      category: 'Data & Automation',
      featured: false,
      shortDescription: 'Structured data auditing procedure cross-referencing clinic session records against official NYS Early Intervention (EI) Hub guidelines.',
      fullDescription:
        'Standardized Excel verification workflow developed to audit clinical session logs against state compliance schemas, resolving billing delays and ensuring reimbursement accuracy.',
      problemSolved:
        'Manual comparisons between clinic logs and state portals created discrepancies. This project standardized verification sheets to streamline reimbursement reporting.',
      techStack: ['NYS EI Hub Guidelines', 'Advanced Excel', 'Data Auditing', 'Process Mapping'],
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
      title: 'Universal Index Life (IUL) Illustration Model',
      category: 'Financial Systems',
      featured: false,
      shortDescription: 'Client financial planning model illustrating Universal Index Life (IUL) vs. Term insurance protection and legacy planning.',
      fullDescription:
        'Interactive financial illustration framework designed to clearly explain life insurance policy options to clients, contrasting term coverage against permanent Universal Index Life (IUL) for income replacement and debt coverage.',
      problemSolved:
        'Demystifies life insurance structures, illustrating how Universal Index Life and Term insurance provide tailored protection for family peace of mind.',
      techStack: ['Universal Index Life (IUL)', 'Term Insurance Analysis', 'Financial Modeling', 'CSS', 'HTML'],
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
      title: 'Higher-Ed ePortfolio & Digital Guide Showcase',
      category: 'Web & EdTech',
      featured: false,
      shortDescription: 'Centralized resource guide and presentation site supporting student technology mentoring and digital portfolios.',
      fullDescription:
        'Developed to support student cohorts and faculty at LaGuardia CC, aggregating step-by-step guides for Brightspace, Blackboard, and digital ePortfolios.',
      problemSolved:
        'Provided undergraduate and capstone students with accessible, centralized instructions for building academic portfolios and navigating learning management systems.',
      techStack: ['CSS (Certified)', 'HTML5', 'D2L Brightspace', 'Blackboard', 'ePortfolio Curation'],
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
