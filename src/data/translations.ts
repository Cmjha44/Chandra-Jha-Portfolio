export type SupportedLanguage = 'en' | 'ne';

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
      headline: 'Business Transformation using AI.',
      subheadline: 'Master of Science in Generative AI Candidate @ CUNY SPS · Strategic AI Implementation · Six Sigma Green Belt',
      summary:
        'I specialize in Business Transformation using AI, translating emerging Generative AI capabilities into sustainable enterprise strategies, management frameworks, and automated organizational processes. My work focuses on strategic AI implementation, executive decision-making, and process re-engineering to create measurable organizational value. Alongside deep administrative experience in healthcare compliance auditing and financial risk advisory, I draw balance and perspective from hiking mountain trails, exploring quiet natural landscapes, and unhurried wilderness adventures.',
      getInTouch: 'Get in Touch',
      viewResume: 'View Resume',
      downloadZip: 'Download Portfolio',
      downloadReadme: 'View Overview'
    },
    about: {
      kicker: 'About & Perspective',
      headline: 'Precision in transformation, grounded in the outdoors.',
      p1: 'My professional background is rooted in deep administrative diligence and systematic problem solving. From reconciling patient treatment records against the official NYS Early Intervention (EI) Hub to helping families navigate Universal Index Life (IUL) and Term insurance protection, I focus on bringing clarity to intricate rules and data.',
      p2: 'Currently pursuing my Master of Science in Generative AI at the CUNY School of Professional Studies, I examine how generative artificial intelligence, vector databases, and workflow orchestration can be strategically deployed by decision-makers and transformation leaders to solve real-world problems, automate organizational processes, and build responsible governance structures.',
      p3: 'Beyond work and study, I find balance along hiking trails, in the quiet expanse of pine forests, and on unhurried adventures in nature. Stepping into the outdoors provides the stillness and perspective needed to approach complex strategic challenges with patience and clear intent.',
      hiking: 'Trail Hiking',
      wilderness: 'Quiet Wilderness',
      exploration: 'Thoughtful Exploration',
      photoCaption: 'Alpine trail reflections · Nature & Hiking'
    },
    skills: {
      kicker: 'Core Competencies & Capabilities',
      headline: 'Strategic foundation and organizational capabilities.',
      subhead: 'Focused on Business Transformation using AI, strategic implementation frameworks, executive governance, and process re-engineering.',
      coreTitle: 'Core Transformation Competencies',
      pythonTitle: 'Strategic AI Implementation',
      pythonDesc: 'Leading enterprise AI adoption, business case validation, organizational workflows, and value creation.',
      aiStudioTitle: 'Executive AI Governance & Compliance',
      aiStudioDesc: 'Designing risk frameworks, explainability standards, data privacy, and ethical model guardrails.',
      devSecOpsTitle: 'Business Process Transformation',
      devSecOpsDesc: 'Applying Six Sigma methodology to eliminate organizational bottlenecks and automate complex processes.',
      vectorDbTitle: 'AI Ecosystems & Integration',
      vectorDbDesc: 'Evaluating vector retrieval architectures, intelligent agents, and strategic integration with enterprise systems.'
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
      headline: 'एआई मार्फत व्यावसायिक रूपान्तरण।',
      subheadline: 'CUNY SPS मा जेनेरेटिभ एआई स्नातकोत्तर शोधार्थी · रणनीतिक एआई कार्यान्वयन · सिक्स सिग्मा ग्रीन बेल्ट',
      summary:
        'म एआई मार्फत व्यावसायिक रूपान्तरणमा विशेषज्ञता राख्दछु, जसले आधुनिक जेनेरेटिभ एआई क्षमताहरूलाई दिगो संगठनात्मक रणनीति, सुशासन ढाँचा र स्वचालित व्यावसायिक प्रक्रियाहरूमा रूपान्तरण गर्दछ। मेरो कार्य रणनीतिक एआई कार्यान्वयन, कार्यकारी निर्णय प्रक्रिया र प्रक्रिया पुन:संरचनामार्फत वास्तविक संगठनात्मक मूल्य सिर्जना गर्न केन्द्रित छ। बाल स्वास्थ्य अनुपालन अडिट तथा वित्तीय जोखिम परामर्शको प्रशासनिक अनुभवका साथै, म पदयात्रा, शान्त प्रकृतिको खुला वातावरण र प्रकृतिको सामीप्यताबाट दृष्टिकोण प्राप्त गर्दछु।',
      getInTouch: 'सम्पर्क गर्नुहोस्',
      viewResume: 'बायोडाटा हेर्नुहोस्',
      downloadZip: 'पोर्टफोलियो डाउनलोड',
      downloadReadme: 'विवरण हेर्नुहोस्'
    },
    about: {
      kicker: 'परिचय तथा दृष्टिकोण',
      headline: 'रूपान्तरणमा शुद्धता, प्रकृतिको सानिध्यमा सन्तुलन।',
      p1: 'मेरो व्यावसायिक पृष्ठभूमि गहिरो प्रशासनिक लगनशीलता र व्यवस्थित समस्या समाधानमा आधारित छ। NYS Early Intervention (EI) Hub मा बाल स्वास्थ्य उपचार विवरणहरूको अडिटदेखि परिवारहरूलाई Universal Index Life (IUL) र Term बीमा सुरक्षामार्फत सहयोग गर्नेसम्म, म जटिल नियम र तथ्याङ्कलाई स्पष्ट बनाउन केन्द्रित छु।',
      p2: 'हाल CUNY School of Professional Studies मा जेनेरेटिभ एआईमा स्नातकोत्तर अध्ययन गर्दै, म जेनेरेटिभ एआई, भेक्टर डाटाबेस र कार्यप्रवाह संयोजनलाई निर्णयकर्ताहरू तथा रूपान्तरण नेतृत्वकर्ताहरूले कसरी वास्तविक समस्याहरू समाधान गर्न र संगठनात्मक प्रक्रियाहरूलाई उत्तरदायी रूपमा स्वचालन गर्न प्रयोग गर्न सक्छन् भनी अध्ययन गरिरहेको छु।',
      p3: 'काम र अध्ययन बाहेक, म पहाडी पदमार्गहरू, शान्त सल्लाका जङ्गलहरू र प्रकृतिको खुला वातावरणमा सन्तुलन पाउँछु। बाहिरी संसारमा निस्कँदा जटिल रणनीतिक चुनौतीहरूलाई धैर्य र स्पष्ट उद्देश्यका साथ समाधान गर्ने सोच विकास हुन्छ।',
      hiking: 'पदमार्ग यात्रा',
      wilderness: 'शान्त प्रकृति',
      exploration: 'चिन्तनशील अन्वेषण',
      photoCaption: 'हिमाली पदमार्गको दृश्य · प्रकृति र पदयात्रा'
    },
    skills: {
      kicker: 'प्रमुख क्षमता र सीपहरू',
      headline: 'रणनीतिक आधारशिला र संगठनात्मक क्षमता।',
      subhead: 'एआई मार्फत व्यावसायिक रूपान्तरण, रणनीतिक कार्यान्वयन ढाँचा, कार्यकारी सुशासन र प्रक्रिया पुन:संरचनामा केन्द्रित।',
      coreTitle: 'प्रमुख रूपान्तरण दक्षताहरू',
      pythonTitle: 'रणनीतिक एआई कार्यान्वयन',
      pythonDesc: 'संस्थागत एआई अवलम्बन, व्यावसायिक उपादेयता प्रमाणीकरण र संगठनात्मक कार्यप्रवाह नेतृत्व।',
      aiStudioTitle: 'कार्यकारी एआई सुशासन तथा अनुपालन',
      aiStudioDesc: 'जोखिम व्यवस्थापन ढाँचा, स्पष्टीकरण मापदण्ड, गोपनीयता र नैतिक मोडेल सीमा निर्माण।',
      devSecOpsTitle: 'व्यावसायिक प्रक्रिया रूपान्तरण',
      devSecOpsDesc: 'सिक्स सिग्मा विधिको प्रयोग गरी संगठनात्मक अवरोधहरू हटाउने र जटिल प्रक्रियाहरूको स्वचालन।',
      vectorDbTitle: 'एआई पारिस्थितिक प्रणाली तथा एकीकरण',
      vectorDbDesc: 'भेक्टर पुन:प्राप्ति संरचना, बौद्धिक एजेन्टहरू र संगठनात्मक प्रणालीहरूसँग रणनीतिक समन्वय।'
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
  }
};
