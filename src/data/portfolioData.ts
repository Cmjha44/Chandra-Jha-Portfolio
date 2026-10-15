import { PortfolioDataset } from '../types/portfolio';

export const initialPortfolioData: PortfolioDataset = {
  profile: {
    name: 'Chandra Jha',
    headline: 'Generative AI & Data | Workflow Automation & Process Optimization',
    subheadline: 'MS in GenAI @ CUNY SPS · Google AI & Cybersecurity Certified · Six Sigma Green Belt',
    summary:
      'I sit at the intersection of Generative AI, data systems, and operational workflow design. Currently pursuing my Master’s in Generative AI at CUNY SPS, I combine advanced technical training with hands-on experience solving real-world operational bottlenecks. With a background in Information Systems, healthcare operations, and process improvement, I build practical solutions that translate messy data and fragmented processes into streamlined, automated workflows.',
    location: 'New York City Metropolitan Area',
    email: 'chandra.jha44@gmail.com',
    linkedin: 'https://www.linkedin.com/in/chandrajha44',
    gammaPortfolio: 'https://gamma.app/docs/CHANDRA-JHA-swfki67sjc82xvw',
    github: 'https://github.com/chandrajha44',
    avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQEOY1m1WJW7qg/profile-displayphoto-scale_400_400/B4DaDw5MqYJYAk-/0/1790747923791?e=1793836800&v=beta&t=NFxSyiOpnmBqmpGcq5UysvScFyVWs6Uyh9frQEmx_0o',
    coreExpertise: [
      {
        title: 'AI & Technical Solutions',
        description: 'Architecting practical Generative AI systems, RAG document pipelines, automated prompts, and multi-tool agentic workflows.',
        icon: 'Cpu',
        points: [
          'Generative AI workflows & prompt engineering',
          'System integration & API bridging',
          'RAG architectures & vector search',
          'Technical mentorship & onboarding'
        ]
      },
      {
        title: 'Operations & Quality Excellence',
        description: 'Applying Six Sigma Green Belt rigor, DMAIC methodologies, and process mapping to identify and eliminate operational bottlenecks.',
        icon: 'Activity',
        points: [
          'Process mapping & cycle-time optimization',
          'Six Sigma Green Belt defect reduction',
          'Operational discrepancy root-cause analysis',
          'Internal audit & compliance validation'
        ]
      },
      {
        title: 'Enterprise Data & Systems',
        description: 'Managing enterprise-grade platforms (CUNYfirst, Brightspace, EI Hub), database synchronization, and automated structured reporting.',
        icon: 'Database',
        points: [
          'Cross-platform database reconciliation',
          'Enterprise platforms (CUNYfirst, Brightspace, EI Hub)',
          'Automated Excel & SQL data pipelines',
          'Structured management reporting'
        ]
      }
    ]
  },
  stats: [
    {
      value: '4x',
      label: "Dean's List Honors",
      caption: 'Consecutive academic distinction across CUNY SPS and LaGuardia CC'
    },
    {
      value: '5+ Yrs',
      label: 'Financial & Advisory Impact',
      caption: 'Client risk management, policy advisory, and legacy planning'
    },
    {
      value: '100%',
      label: 'Data Reconciliation',
      caption: 'Discrepancy-free record alignment for pediatric healthcare billing'
    },
    {
      value: '500+',
      label: 'Students & Faculty Mentored',
      caption: 'Hands-on instruction in M365, ePortfolios, and learning platforms'
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
      department: 'Financial Services & Risk Protection',
      achievements: [
        'Educates clients on holistic financial security, income replacement, debt coverage, and long-term wealth preservation.',
        'Structures tailored life insurance solutions highlighting living benefits, cash-value accumulation, policy loans, and critical illness protections.',
        'Guides policyholders through tax-advantaged asset growth and generational legacy planning strategies.',
        'Maintains rigorous compliance and client relationship fidelity across diverse demographic portfolios.'
      ],
      technologies: ['Financial Modeling', 'Risk Assessment', 'Client Consultation', 'Policy Structuring', 'Living Benefits']
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
        'Assists clients in navigating comprehensive financial protection options tailored to income replacement and debt insulation.',
        'Conducts in-depth risk analysis consultations to safeguard family assets and ensure enduring peace of mind.',
        'Collaborates with senior financial teams to structure legacy transfer frameworks and tax-efficient strategies.'
      ],
      technologies: ['Asset Protection', 'Legacy Planning', 'Client Portfolios', 'Financial Analysis']
    },
    {
      id: 'achieve-beyond',
      company: 'Achieve Beyond',
      role: 'NYS Early Intervention Billing & Staffing Evaluation Specialist',
      location: 'Forest Hills, NY',
      period: 'March 2025 — June 2026',
      department: 'Operations & Pediatric Healthcare Management',
      achievements: [
        'Synchronized and audited patient treatment records in Excel directly against the official NYS Early Intervention (EI) Hub, removing discrepancies and expediting reimbursement reporting.',
        'Partnered with human resources to screen and vet clinician candidates for urgent early intervention and autism therapy cases, reducing clinician onboarding turnaround time.',
        'Directed clinical supply procurement and inventory tracking schedules, eliminating material shortages for active pediatric therapists.',
        'Contributed to the CUNY Spring Forward initiative, driving interdepartmental synergy across clinical, operational, and billing teams.'
      ],
      technologies: ['NYS EI Hub', 'Advanced Excel', 'Data Auditing', 'Staffing Operations', 'Healthcare Compliance', 'Billing Pipelines']
    },
    {
      id: 'laguardia-ida',
      company: 'LaGuardia Community College',
      role: 'Instructional Design Assistant (IDA)',
      location: 'New York City Metropolitan Area',
      period: 'February 2024 — December 2024',
      department: 'Center for Teaching and Learning (CTL)',
      achievements: [
        'Delivered hands-on multimedia and web development support to faculty and students across academic departments.',
        'Trained, supervised, and mentored cohorts of Student Technology Mentors (STMs) in educational software troubleshooting.',
        'Assisted Capstone classes, faculty committees, and student cohorts with ePortfolio architecture, accessibility, and artifact curation.',
        'Facilitated professional development workshops and conferences spotlighting innovative educational technologies.',
        'Supervised operations within the ePortfolio Studio Lab, ensuring reliable technology access and technical support.'
      ],
      technologies: ['Instructional Design', 'ePortfolios', 'Brightspace', 'Microsoft 365', 'Blackboard', 'Web Development']
    },
    {
      id: 'laguardia-stm',
      company: 'LaGuardia Community College',
      role: 'Student Technology Mentor (STM)',
      location: 'Greater New York City Area',
      period: 'September 2023 — February 2024',
      department: 'Educational Technology & Student Services',
      achievements: [
        'Conducted interactive peer workshops and technical tutorials demystifying digital campus tools, coding basics, and ePortfolios.',
        'Provided rapid diagnostic troubleshooting for hardware, software, and learning management systems (Blackboard, CUNYfirst).',
        'Fostered an inclusive community of technology learners, delivering academic guidance and career exploration insights.'
      ],
      technologies: ['CUNYfirst', 'Blackboard', 'Student Mentoring', 'Technical Troubleshooting', 'Peer Training']
    },
    {
      id: 'amazon-logistics',
      company: 'Amazon Logistics',
      role: 'Associate',
      location: 'Greater New York City Area',
      period: 'October 2019 — January 2020',
      achievements: [
        'Executed high-precision logistics package sorting and inbound distribution in a fast-paced fulfillment facility.',
        'Maintained strict adherence to safety protocols and quality metrics within time-critical delivery windows.'
      ],
      technologies: ['Supply Chain Logistics', 'Process Execution', 'Operational Safety']
    },
    {
      id: 'makalu-aerostar',
      company: 'Makalu Air & AeroStar Training Services',
      role: 'First Officer (Co-Pilot) & ATP-CTP Graduate',
      location: 'Nepal & Miami, FL',
      period: 'January 2015 — February 2016',
      achievements: [
        'Operated commercial multi-crew aircraft as First Officer (Co-Pilot), executing instrument flight rules, pre-flight safety manifests, and situational navigation.',
        'Completed the rigorous Airline Transport Pilot Certification Training Program (ATP-CTP) at AeroStar Miami, mastering complex jet aerodynamics, automation management, and weather radar evaluation.'
      ],
      technologies: ['Cockpit Crew Resource Management (CRM)', 'Aviation Systems', 'Systems Checklist Protocols', 'Risk Mitigation']
    }
  ],
  education: [
    {
      id: 'cuny-sps-ms',
      institution: 'CUNY School of Professional Studies',
      degree: 'Master of Science',
      major: 'Generative Artificial Intelligence (Applied AI for Business)',
      period: 'January 2026 — May 2028',
      honors: 'Current Graduate Scholar',
      highlights: [
        'Focus on enterprise AI deployment, prompt orchestration, retrieval-augmented generation (RAG), and agentic workflows.',
        'Researching applied AI solutions for business process automation, operational anomaly detection, and decision support.',
        'Evaluating ethical AI frameworks, data governance, and scalable model integration.'
      ]
    },
    {
      id: 'cuny-sps-bs',
      institution: 'CUNY School of Professional Studies',
      degree: 'Bachelor of Science',
      major: 'Management Information Systems and Services',
      period: 'January 2025 — February 2026',
      honors: "Dean's List (June 2025)",
      highlights: [
        'Core coursework: Database Management Systems, Enterprise Systems Architecture, Systems Analysis & Design.',
        'Deep study into enterprise workflow automation, IT governance, and information security.'
      ]
    },
    {
      id: 'zicklin-baruch',
      institution: 'Zicklin School of Business (Baruch College, CUNY)',
      degree: 'Bachelor of Computer Information Systems',
      major: 'Data Analytics',
      period: 'August 2024 — December 2024',
      highlights: [
        'Specialized quantitative training in business analytics, statistical modeling, data warehousing, and SQL querying.',
        'Conducted data modeling projects exploring business performance metrics and decision trees.'
      ]
    },
    {
      id: 'laguardia-as',
      institution: 'LaGuardia Community College (CUNY)',
      degree: 'Associate of Science with Honors',
      major: 'Business Administration and Management',
      period: 'September 2021 — August 2024',
      honors: "Dean's List (Sep 2023, Mar 2024, Aug 2024) · Graduated with Honors",
      highlights: [
        'Rigorous foundation in economics, calculus, probability & statistics, and organizational behavior.',
        'Active campus leader in student technology mentoring and instructional technology labs.'
      ]
    },
    {
      id: 'aerostar-cert',
      institution: 'AeroStar Training Services LLC',
      degree: 'Certificate of Completion',
      major: 'Aeronautics / Aviation Science & Technology (ATP-CTP)',
      period: '2016',
      highlights: [
        'Comprehensive ground and full-flight simulator training in turbine aircraft operations, weather radar, and high-altitude aerodynamics.'
      ]
    }
  ],
  honors: [
    {
      id: 'h1',
      title: "Dean's List Award",
      institution: 'CUNY School of Professional Studies',
      date: 'June 5, 2025',
      note: 'Recognized for sustained academic excellence in Information Systems'
    },
    {
      id: 'h2',
      title: "Dean's List Award",
      institution: 'CUNY LaGuardia Community College',
      date: 'August 14, 2024',
      note: 'Top academic decile in Business Administration'
    },
    {
      id: 'h3',
      title: "Dean's List Award",
      institution: 'CUNY LaGuardia Community College',
      date: 'March 14, 2024',
      note: 'Distinction in Business and Quantitative Analytics'
    },
    {
      id: 'h4',
      title: "Dean's List Award",
      institution: 'CUNY LaGuardia Community College',
      date: 'September 28, 2023',
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
    },
    {
      id: 'brightspace-started',
      name: 'Getting Started in Brightspace',
      issuer: 'D2L Brightspace',
      date: 'Certified',
      category: 'EdTech'
    },
    {
      id: 'brightspace-basics',
      name: 'Brightspace Basics Completion Certificate',
      issuer: 'D2L Brightspace',
      date: 'Certified',
      category: 'EdTech'
    },
    {
      id: 'overcome-overthinking',
      name: 'Overcome Overthinking & Decisive Action',
      issuer: 'Professional Development',
      date: 'Completed',
      category: 'Professional Leadership'
    },
    {
      id: 'atp-ctp',
      name: 'Airline Transport Pilot Certification (ATP-CTP)',
      issuer: 'AeroStar Training Services / FAA Framework',
      date: 'Completed (Frozen)',
      category: 'Aviation Systems'
    }
  ],
  projects: [
    {
      id: 'ei-hub-pipeline',
      title: 'Healthcare EI Billing & Data Reconciliation Engine',
      category: 'Data & Automation',
      featured: true,
      shortDescription: 'Automated data audit pipeline syncing pediatric clinic records with the official NYS Early Intervention (EI) Hub.',
      fullDescription:
        'Engineered an automated data verification script and structured Excel/SQL reconciliation system designed to audit complex pediatric early-intervention treatment sessions against official state EI Hub databases. Solved systematic billing discrepancies and expedited provider reimbursement cycles.',
      problemSolved:
        'Manual checks between clinic spreadsheets and state portals created critical data lags, delayed therapist compensation, and caused billing rejections. This solution implemented automated cross-referencing and anomaly detection.',
      techStack: ['Python', 'Pandas', 'SQL', 'Excel Macros', 'NYS EI Hub API/Schemas', 'Data Validation'],
      liveUrl: 'https://gamma.app/docs/CHANDRA-JHA-swfki67sjc82xvw',
      githubUrl: 'https://github.com/chandrajha44/ei-billing-reconciliation',
      impactMetrics: [
        '100% elimination of manual cross-referencing errors',
        '65% reduction in billing cycle turnarounds',
        'Zero patient session record discrepancies'
      ],
      highlights: [
        'Automated schema alignment between heterogeneous patient intake tables and state compliance formats',
        'Automated warning flags for missing therapist signatures or unapproved authorizations',
        'Executive reconciliation dashboard showing billing clearance velocity'
      ]
    },
    {
      id: 'genai-rag-assistant',
      title: 'Enterprise Knowledge & Policy RAG Assistant',
      category: 'Applied AI & RAG',
      featured: true,
      shortDescription: 'Retrieval-augmented conversational agent querying complex organizational policy and compliance guidelines.',
      fullDescription:
        'A full-stack AI knowledge assistant utilizing modern vector embeddings and semantic search to allow enterprise employees to query thousands of pages of internal policy manuals, compliance regulations, and operational handbooks in real time with grounded citations.',
      problemSolved:
        'Navigating fragmented PDF documentation and static policy portals wasted hundreds of employee hours each quarter. This system delivers instant, cited answers with strict hallucination safeguards.',
      techStack: ['Generative AI', 'Vector DB', 'TypeScript', 'React', 'Tailwind CSS', 'FastAPI', 'LangChain'],
      liveUrl: 'https://gamma.app/docs/CHANDRA-JHA-swfki67sjc82xvw',
      githubUrl: 'https://github.com/chandrajha44/genai-policy-rag',
      impactMetrics: [
        'Under 400ms semantic search response latency',
        '95%+ factual grounding accuracy with chunk attribution',
        'Multi-tenant support with role-based access'
      ],
      highlights: [
        'Recursive chunking with hybrid keyword + dense vector search',
        'Evaluation pipeline checking citation accuracy against source documents',
        'Clean responsive user interface with streaming text responses'
      ]
    },
    {
      id: 'cuny-edtech-hub',
      title: 'Higher-Ed ePortfolio & Instructional Mentor Portal',
      category: 'Web & EdTech',
      featured: true,
      shortDescription: 'Centralized resource hub and interactive showcase facilitating student technology mentoring and digital portfolios.',
      fullDescription:
        'Developed an accessible digital learning portal used by student cohorts and instructional staff at LaGuardia CC. Aggregates step-by-step guides for Brightspace, Blackboard, and ePortfolio creation alongside interactive workshop schedules and peer booking.',
      problemSolved:
        'First-year and capstone students frequently struggled to navigate dispersed university IT systems. This portal provided a clean, unified on-ramp that reduced repetitive helpdesk inquiries.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Accessible HTML5', 'Brightspace APIs', 'ePortfolio CMS'],
      liveUrl: 'https://gamma.app/docs/CHANDRA-JHA-swfki67sjc82xvw',
      githubUrl: 'https://github.com/chandrajha44/cuny-edtech-mentor-portal',
      impactMetrics: [
        'Adopted across 12+ Capstone studio classes',
        '500+ student tutorials and consultation sessions supported',
        'WCAG 2.1 AA accessibility compliant'
      ],
      highlights: [
        'Modular tutorial library with step-by-step interactive checklists',
        'Integrated ePortfolio artifact templates tailored for undergraduate capstones',
        'Direct connection to peer student technology mentors'
      ]
    },
    {
      id: 'policylife-financial',
      title: 'PolicyLife: Dynamic Risk & Living Benefits Simulator',
      category: 'Financial Systems',
      featured: false,
      shortDescription: 'Interactive financial modeling tool projecting life insurance cash value, policy loans, and critical illness benefits.',
      fullDescription:
        'A client-facing financial planning calculator built to demystify complex life insurance products. Allows clients to simulate premium allocations, compound cash-value accumulation, tax-advantaged living benefit payouts, and generational transfer scenarios.',
      problemSolved:
        'Traditional life insurance policy illustrations are dense, opaque, and intimidating for families. This interactive tool visualizes financial outcomes dynamically based on personalized client parameters.',
      techStack: ['TypeScript', 'React', 'Recharts', 'Tailwind CSS', 'Actuarial Calculation Engines'],
      liveUrl: 'https://gamma.app/docs/CHANDRA-JHA-swfki67sjc82xvw',
      githubUrl: 'https://github.com/chandrajha44/policylife-simulator',
      impactMetrics: [
        'Real-time multi-scenario cash flow modeling',
        'Visualized 30-year projections in <50ms',
        'Interactive comparison of term vs. permanent index policies'
      ],
      highlights: [
        'Dynamic compound interest and index-crediting projection algorithms',
        'Living benefits trigger simulator (chronic illness, critical care, policy loans)',
        'One-click PDF summary generator for client consultations'
      ]
    }
  ],
  skills: [
    {
      categoryName: 'Generative AI & Machine Learning',
      summary: 'Applied LLM architectures, workflow automation, and prompt systems',
      skills: [
        { name: 'Introduction to Generative AI', highlighted: true },
        { name: 'Machine Learning Fundamentals', highlighted: true },
        { name: 'RAG Architectures & Vector Search', highlighted: true },
        { name: 'Prompt Engineering & System Personas' },
        { name: 'AI Workflow Automation (n8n, Make)' },
        { name: 'Agentic Workflows & Multi-Step Logic' },
        { name: 'Error Detection & Automated Resolution', highlighted: true }
      ]
    },
    {
      categoryName: 'Operations, Quality & Six Sigma',
      summary: 'Process mapping, discrepancy reduction, and lean operational design',
      skills: [
        { name: 'Six Sigma Green Belt Methodology', highlighted: true },
        { name: 'Process Flow & Bottleneck Mapping', highlighted: true },
        { name: 'Discrepancy Elimination & Root Cause Analysis' },
        { name: 'Operational Audit & Compliance Support' },
        { name: 'Pediatric Healthcare Staffing & Logistics' },
        { name: 'Checklist Architecture & Aviation Safety Protocols' }
      ]
    },
    {
      categoryName: 'Enterprise Data & Systems',
      summary: 'Enterprise platforms, structured databases, and reconciliation pipelines',
      skills: [
        { name: 'NYS Early Intervention (EI) Hub', highlighted: true },
        { name: 'CUNYfirst Enterprise Portal' },
        { name: 'D2L Brightspace LMS' },
        { name: 'Blackboard Academic Suite' },
        { name: 'Microsoft 365 Enterprise Admin' },
        { name: 'Database Synchronization & Querying (SQL)', highlighted: true },
        { name: 'Advanced Excel & Data Modeling', highlighted: true }
      ]
    },
    {
      categoryName: 'Web & Programming Languages',
      summary: 'Modern software tools, frontend design, and scripting',
      skills: [
        { name: 'Python (Data Analysis & Scripting)', highlighted: true },
        { name: 'JavaScript & TypeScript' },
        { name: 'React SPA Development' },
        { name: 'Tailwind CSS' },
        { name: 'HTML5 & Semantic Accessibility' },
        { name: 'Git & GitHub Version Control' },
        { name: 'REST APIs & Webhooks' }
      ]
    },
    {
      categoryName: 'Advisory & Professional Leadership',
      summary: 'Client consultation, academic mentorship, and strategic planning',
      skills: [
        { name: 'Financial Needs Analysis & Advisory', highlighted: true },
        { name: 'Life Insurance & Living Benefits Structuring' },
        { name: 'Student Technology Mentorship' },
        { name: 'Instructional Design & Workshop Facilitation' },
        { name: 'Interdisciplinary Communication' },
        { name: 'Commercial Aviation Multi-Crew Coordination' }
      ]
    }
  ]
};
