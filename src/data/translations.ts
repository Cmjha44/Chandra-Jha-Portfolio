export type SupportedLanguage = 'en' | 'ne' | 'es';

export interface Translations {
  nav: {
    about: string;
    experience: string;
    skills: string;
    education: string;
    projects: string;
    contact: string;
    resume: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    summary: string;
    getInTouch: string;
    viewResume: string;
    downloadZip: string;
    downloadReadme: string;
  };
  about: {
    kicker: string;
    headline: string;
    p1: string;
    p2: string;
    p3: string;
    hiking: string;
    wilderness: string;
    exploration: string;
    photoCaption: string;
  };
  skills: {
    kicker: string;
    headline: string;
    subhead: string;
    coreTitle: string;
    pythonTitle: string;
    pythonDesc: string;
    aiStudioTitle: string;
    aiStudioDesc: string;
    devSecOpsTitle: string;
    devSecOpsDesc: string;
    vectorDbTitle: string;
    vectorDbDesc: string;
  };
  education: {
    kicker: string;
    headline: string;
    subhead: string;
    courseworkTitle: string;
    certsTitle: string;
  };
  projects: {
    kicker: string;
    headline: string;
    subhead: string;
  };
  contact: {
    kicker: string;
    headline: string;
    subhead: string;
    directEmail: string;
    location: string;
    formTitle: string;
    formSubhead: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    sendEmailBtn: string;
    recordAnother: string;
  };
  footer: {
    allRights: string;
    backToTop: string;
  };
}

export const translations: Record<SupportedLanguage, Translations> = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      projects: 'Projects',
      contact: 'Contact',
      resume: 'Resume'
    },
    hero: {
      kicker: 'Chandra Jha · Portfolio & Resume',
      headline: 'Systems-level AI management and workflow orchestration.',
      subheadline: 'Master of Science in Generative AI Candidate @ CUNY SPS · Information Systems · Six Sigma Green Belt',
      summary:
        'I specialize in systems-level AI management and workflow orchestration, translating advanced Generative AI capabilities into reliable, human-centered organizational processes. Alongside my technical and administrative background in early childhood healthcare data audits and life insurance protection, I draw balance and perspective from hiking mountain trails, exploring quiet natural landscapes, and thoughtful, unhurried adventures.',
      getInTouch: 'Get in Touch',
      viewResume: 'View Resume',
      downloadZip: 'Download Dist (ZIP)',
      downloadReadme: 'Download README'
    },
    about: {
      kicker: 'About & Perspective',
      headline: 'Precision in systems, grounded in the outdoors.',
      p1: 'My professional background is rooted in deep administrative diligence and systematic problem solving. From reconciling patient treatment records against the official NYS Early Intervention (EI) Hub to helping families navigate Universal Index Life (IUL) and Term insurance protection, I focus on bringing clarity to intricate rules and data.',
      p2: 'Currently pursuing my Master of Science in Generative AI at the CUNY School of Professional Studies, I examine how machine learning models, vector databases, and workflow orchestration can be managed responsibly to create genuine organizational value.',
      p3: 'Beyond work and study, I find balance along hiking trails, in the quiet expanse of pine forests, and on unhurried adventures in nature. Stepping into the outdoors provides the stillness and perspective needed to approach complex technical challenges with patience and clear intent.',
      hiking: 'Trail Hiking',
      wilderness: 'Quiet Wilderness',
      exploration: 'Thoughtful Exploration',
      photoCaption: 'Alpine trail reflections · Nature & Hiking'
    },
    skills: {
      kicker: 'Core Competencies & Skills',
      headline: 'Technical foundation and operational capabilities.',
      subhead: 'Focused on systems-level AI management, structured workflow design, and regulated operational environments.',
      coreTitle: 'Core Technical Competencies',
      pythonTitle: 'Python programming',
      pythonDesc: 'Scripting, workflow automation, and structured data manipulation fundamentals.',
      aiStudioTitle: 'Google AI Studio orchestration',
      aiStudioDesc: 'Generative AI API integration, prompt design, and workflow orchestration.',
      devSecOpsTitle: 'DevSecOps governance',
      devSecOpsDesc: 'Responsible AI compliance, ethical model boundaries, and secure operations.',
      vectorDbTitle: 'Vector databases',
      vectorDbDesc: 'Semantic vector indexing, embedding search, and retrieval-augmented architectures.'
    },
    education: {
      kicker: 'Academic Background',
      headline: 'Education & Academic Credentials',
      subhead: 'Graduate study in Generative AI and undergraduate foundation in Information Systems at the City University of New York.',
      courseworkTitle: 'Coursework & Subject Areas:',
      certsTitle: 'Professional Certifications & Licenses'
    },
    projects: {
      kicker: 'Projects & Code',
      headline: 'Projects & GitHub Repositories',
      subhead: 'Live automated GitHub synchronization displaying public repositories, contribution activity, and coursework explorations.'
    },
    contact: {
      kicker: 'Get In Touch',
      headline: 'Connect & Record an Inquiry',
      subhead: 'Visitors, recruiters, and collaborators can leave their information and inquiry below for the record. I will review and respond promptly.',
      directEmail: 'Direct Email',
      location: 'Location',
      formTitle: 'Leave Your Information',
      formSubhead: 'Please provide your contact information and notes to record your inquiry.',
      nameLabel: 'Your Full Name',
      emailLabel: 'Your Email Address',
      subjectLabel: 'Subject / Topic of Interest',
      messageLabel: 'Message / Record Notes',
      submitBtn: 'Submit for Record',
      submitting: 'Recording...',
      successTitle: 'Information Recorded Successfully',
      successDesc: 'Thank you. Your inquiry has been saved to the records log.',
      sendEmailBtn: 'Send Direct via Email',
      recordAnother: 'Record Another Entry'
    },
    footer: {
      allRights: 'All rights reserved',
      backToTop: 'Back to top'
    }
  },
  ne: {
    nav: {
      about: 'बारेमा',
      experience: 'अनुभव',
      skills: 'सीपहरू',
      education: 'शिक्षा',
      projects: 'परियोजनाहरू',
      contact: 'सम्पर्क',
      resume: 'बायोडाटा'
    },
    hero: {
      kicker: 'चन्द्र झा · व्यक्तिगत विवरण तथा बायोडाटा',
      headline: 'प्रणाली-स्तरको एआई व्यवस्थापन र कार्यप्रवाह संयोजन।',
      subheadline: 'CUNY SPS मा जेनेरेटिभ एआई स्नातकोत्तर शोधार्थी · सूचना प्रणाली · सिक्स सिग्मा ग्रीन बेल्ट',
      summary:
        'म प्रणाली-स्तरको एआई व्यवस्थापन तथा कार्यप्रवाह संयोजनमा विशेषज्ञता राख्दछु, जसले आधुनिक जेनेरेटिभ एआई क्षमताहरूलाई भरपर्दो र व्यावहारिक संगठनात्मक प्रक्रियाहरूमा रूपान्तरण गर्दछ। बाल स्वास्थ्य सेवा डाटा अडिट तथा जीवन बीमा सुरक्षालगायतका मेरो प्रशासनिक र प्राविधिक अनुभवका साथै, म पदयात्रा, शान्त प्राकृतिक परिदृश्य र प्रकृतिको सामीप्यताबाट नयाँ ऊर्जा र दृष्टिकोण प्राप्त गर्दछु।',
      getInTouch: 'सम्पर्क गर्नुहोस्',
      viewResume: 'बायोडाटा हेर्नुहोस्',
      downloadZip: 'डाउनलोड Dist (ZIP)',
      downloadReadme: 'डाउनलोड README'
    },
    about: {
      kicker: 'परिचय तथा दृष्टिकोण',
      headline: 'प्रणालीहरूमा शुद्धता, प्रकृतिको सानिध्यमा सन्तुलन।',
      p1: 'मेरो व्यावसायिक पृष्ठभूमि गहिरो प्रशासनिक लगनशीलता र व्यवस्थित समस्या समाधानमा आधारित छ। NYS Early Intervention (EI) Hub मा बाल स्वास्थ्य उपचार विवरणहरूको अडिटदेखि परिवारहरूलाई Universal Index Life (IUL) र Term बीमा सुरक्षामार्फत सहयोग गर्नेसम्म, म जटिल नियम र तथ्याङ्कलाई स्पष्ट बनाउन केन्द्रित छु।',
      p2: 'हाल CUNY School of Professional Studies मा जेनेरेटिभ एआईमा स्नातकोत्तर अध्ययन गर्दै, म मेसिन लर्निङ, भेक्टर डाटाबेस र कार्यप्रवाह स्वचालनलाई उत्तरदायी रूपमा कसरी लागू गर्न सकिन्छ भनी अध्ययन गरिरहेको छु।',
      p3: 'काम र अध्ययन बाहेक, म पहाडी पदमार्गहरू, शान्त सल्लाका जङ्गलहरू र प्रकृतिको खुला वातावरणमा सन्तुलन पाउँछु। बाहिरी संसारमा निस्कँदा जटिल प्राविधिक चुनौतीहरूलाई धैर्य र स्पष्ट उद्देश्यका साथ समाधान गर्ने सोच विकास हुन्छ।',
      hiking: 'पदमार्ग यात्रा',
      wilderness: 'शान्त प्रकृति',
      exploration: 'चिन्तनशील अन्वेषण',
      photoCaption: 'हिमाली पदमार्गको दृश्य · प्रकृति र पदयात्रा'
    },
    skills: {
      kicker: 'प्रमुख क्षमता र सीपहरू',
      headline: 'प्राविधिक आधारशिला र कार्य सञ्चालन क्षमता।',
      subhead: 'प्रणाली-स्तरको एआई व्यवस्थापन, व्यवस्थित कार्यप्रवाह डिजाइन र नियमनकारी वातावरणमा केन्द्रित।',
      coreTitle: 'प्रमुख प्राविधिक दक्षताहरू',
      pythonTitle: 'पाइथन प्रोग्रामिङ',
      pythonDesc: 'स्क्रिप्टिङ, कार्यप्रवाह स्वचालन र संरचनात्मक डाटा व्यवस्थापनको आधारभूत ज्ञान।',
      aiStudioTitle: 'गुगल एआई स्टुडियो संयोजन',
      aiStudioDesc: 'जेनेरेटिभ एआई एपीआई एकीकरण, प्रम्प्ट डिजाइन र कार्यप्रवाह अर्केस्ट्रेशन।',
      devSecOpsTitle: 'DevSecOps सुशासन',
      devSecOpsDesc: 'उत्तरदायी एआई अनुपालन, नैतिक मोडेल सीमा र सुरक्षित कार्य सञ्चालन।',
      vectorDbTitle: 'भेक्टर डाटाबेस',
      vectorDbDesc: 'सिमान्टिक भेक्टर अनुक्रमणिका, इम्बेडिङ खोजी र पुन:प्राप्ति-संवर्धित संरचना (RAG)।'
    },
    education: {
      kicker: 'शैक्षिक पृष्ठभूमि',
      headline: 'शिक्षा तथा शैक्षिक प्रमाणपत्रहरू',
      subhead: 'सिटी युनिभर्सिटी अफ न्यूयोर्क (CUNY) बाट जेनेरेटिभ एआईमा स्नातकोत्तर र सूचना प्रणालीमा स्नातक।',
      courseworkTitle: 'पाठ्यक्रम तथा विषय क्षेत्रहरू:',
      certsTitle: 'व्यावसायिक प्रमाणपत्र तथा इजाजतपत्रहरू'
    },
    projects: {
      kicker: 'परियोजनाहरू तथा कोड',
      headline: 'परियोजनाहरू तथा गिटहब भण्डारहरू',
      subhead: 'सार्वजनिक भण्डारहरू, योगदान गतिविधि र अध्ययन परियोजनाहरू देखाउने स्वचालित गिटहब समक्रमण।'
    },
    contact: {
      kicker: 'सम्पर्क गर्नुहोस्',
      headline: 'सम्पर्क र जानकारी अभिलेख',
      subhead: 'आगन्तुकहरू, रोजगारदाताहरू र सहकर्मीहरूले अभिलेखको लागि तल आफ्नो जानकारी र जिज्ञासा दर्ता गर्न सक्नुहुन्छ। म शीघ्र समीक्षा गरी जवाफ दिनेछु।',
      directEmail: 'प्रत्यक्ष इमेल',
      location: 'स्थान',
      formTitle: 'तपाईंको जानकारी दर्ता गर्नुहोस्',
      formSubhead: 'कृपया आफ्नो सम्पर्क जानकारी र जिज्ञासा समावेश गर्नुहोस्।',
      nameLabel: 'तपाईंको पूरा नाम',
      emailLabel: 'तपाईंको इमेल ठेगाना',
      subjectLabel: 'विषय / चासोको क्षेत्र',
      messageLabel: 'सन्देश / अभिलेख विवरण',
      submitBtn: 'अभिलेखको लागि दर्ता गर्नुहोस्',
      submitting: 'दर्ता हुँदैछ...',
      successTitle: 'जानकारी सफलतापूर्वक दर्ता भयो',
      successDesc: 'धन्यवाद। तपाईंको जिज्ञासा आधिकारिक अभिलेखमा सुरक्षित गरिएको छ।',
      sendEmailBtn: 'इमेलमार्फत प्रत्यक्ष पठाउनुहोस्',
      recordAnother: 'अर्को प्रविष्टि दर्ता गर्नुहोस्'
    },
    footer: {
      allRights: 'सर्वाधिकार सुरक्षित',
      backToTop: 'माथि जानुहोस्'
    }
  },
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      education: 'Educación',
      projects: 'Proyectos',
      contact: 'Contacto',
      resume: 'Currículum'
    },
    hero: {
      kicker: 'Chandra Jha · Portafolio y Currículum',
      headline: 'Gestión de IA a nivel de sistemas y orquestación de flujos de trabajo.',
      subheadline: 'Candidato a Maestría en IA Generativa en CUNY SPS · Sistemas de Información · Six Sigma Green Belt',
      summary:
        'Me especializo en la gestión de IA a nivel de sistemas y la orquestación de flujos de trabajo, transformando capacidades avanzadas de IA generativa en procesos organizacionales confiables y centrados en las personas. Junto con mi experiencia administrativa en auditorías de datos de salud y protección de seguros de vida, encuentro equilibrio en el senderismo, la naturaleza y tranquilas aventuras al aire libre.',
      getInTouch: 'Ponerse en Contacto',
      viewResume: 'Ver Currículum',
      downloadZip: 'Descargar Dist (ZIP)',
      downloadReadme: 'Descargar README'
    },
    about: {
      kicker: 'Acerca de y Perspectiva',
      headline: 'Precisión en los sistemas, arraigada en la naturaleza.',
      p1: 'Mi trayectoria profesional se basa en una profunda diligencia administrativa y la resolución sistemática de problemas. Desde la conciliación de registros clínicos contra el portal oficial NYS Early Intervention (EI) Hub hasta el asesoramiento a familias sobre seguros Universal Index Life (IUL) y de término, me enfoco en brindar claridad a normativas complejas.',
      p2: 'Actualmente cursando mi Maestría en Ciencias en IA Generativa en CUNY SPS, investigo cómo los modelos de aprendizaje automático, bases de datos vectoriales y la orquestación de procesos pueden gestionarse de forma responsable para generar valor real.',
      p3: 'Más allá del trabajo y el estudio, encuentro equilibrio recorriendo senderos de montaña y explorando paisajes naturales tranquilos. Estar al aire libre brinda la calma necesaria para abordar desafíos técnicos complejos con paciencia y claridad.',
      hiking: 'Senderismo',
      wilderness: 'Naturaleza Tranquila',
      exploration: 'Exploración Serena',
      photoCaption: 'Reflejos en el sendero alpino · Naturaleza y Senderismo'
    },
    skills: {
      kicker: 'Competencias Principales y Habilidades',
      headline: 'Fundamentos técnicos y capacidades operativas.',
      subhead: 'Enfocado en la gestión de IA a nivel de sistemas, diseño de flujos de trabajo y entornos regulados.',
      coreTitle: 'Competencias Técnicas Principales',
      pythonTitle: 'Programación en Python',
      pythonDesc: 'Fundamentos de scripts, automatización de flujos de trabajo y manipulación de datos.',
      aiStudioTitle: 'Orquestación con Google AI Studio',
      aiStudioDesc: 'Integración de API de IA generativa, diseño de prompts y orquestación de procesos.',
      devSecOpsTitle: 'Gobernanza DevSecOps',
      devSecOpsDesc: 'Cumplimiento de IA responsable, límites éticos de modelos y operaciones seguras.',
      vectorDbTitle: 'Bases de datos vectoriales',
      vectorDbDesc: 'Indexación vectorial semántica, búsqueda de incrustaciones y arquitecturas RAG.'
    },
    education: {
      kicker: 'Formación Académica',
      headline: 'Educación y Credenciales Académicas',
      subhead: 'Estudios de posgrado en IA Generativa y formación de grado en Sistemas de Información en la City University of New York (CUNY).',
      courseworkTitle: 'Cursos y Áreas Temáticas:',
      certsTitle: 'Certificaciones Profesionales y Licencias'
    },
    projects: {
      kicker: 'Proyectos y Código',
      headline: 'Proyectos y Repositorios de GitHub',
      subhead: 'Sincronización automatizada con GitHub que muestra repositorios públicos, actividad de contribución y proyectos académicos.'
    },
    contact: {
      kicker: 'Contacto',
      headline: 'Conectar y Registrar una Consulta',
      subhead: 'Los visitantes, reclutadores y colaboradores pueden dejar su información y mensaje a continuación para el registro. Responderé a la brevedad.',
      directEmail: 'Correo Directo',
      location: 'Ubicación',
      formTitle: 'Deje su Información',
      formSubhead: 'Por favor complete sus datos de contacto para registrar su consulta.',
      nameLabel: 'Nombre Completo',
      emailLabel: 'Correo Electrónico',
      subjectLabel: 'Asunto / Tema de Interés',
      messageLabel: 'Mensaje / Notas para el Registro',
      submitBtn: 'Enviar para el Registro',
      submitting: 'Registrando...',
      successTitle: 'Información Registrada con Éxito',
      successDesc: 'Gracias. Su consulta ha sido guardada en el registro oficial.',
      sendEmailBtn: 'Enviar por Correo Electrónico',
      recordAnother: 'Registrar Otra Consulta'
    },
    footer: {
      allRights: 'Todos los derechos reservados',
      backToTop: 'Volver arriba'
    }
  }
};
