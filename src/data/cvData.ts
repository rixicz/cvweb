export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type?: string;
  description: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  githubUrl: string;
  featured?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  category: 'tech' | 'psychology' | 'language' | 'competition';
  badgeLabel?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string }[];
}

export interface CVContent {
  meta: {
    name: string;
    headline: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    pdfPath: string;
  };
  nav: {
    about: string;
    experience: string;
    education: string;
    projects: string;
    skills: string;
    certifications: string;
    contact: string;
  };
  hero: {
    badge: string;
    summary: string;
    downloadCV: string;
    copyEmail: string;
    copiedNotice: string;
    contactMe: string;
  };
  sections: {
    experienceTitle: string;
    experienceSubtitle: string;
    educationTitle: string;
    educationSubtitle: string;
    projectsTitle: string;
    projectsSubtitle: string;
    skillsTitle: string;
    skillsSubtitle: string;
    certificationsTitle: string;
    certificationsSubtitle: string;
    contactTitle: string;
    contactSubtitle: string;
  };
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  skillCategories: SkillCategory[];
  certifications: Certification[];
  languages: { language: string; proficiency: string }[];
  footer: {
    rights: string;
    backToTop: string;
  };
}

export const cvDataEn: CVContent = {
  meta: {
    name: "Patrik Šmidoch",
    headline: "HR Digi Trainee at Conectio Group · High School Student & Tech Enthusiast",
    location: "Prague, Czechia",
    email: "patrik.smidoch@hotmail.com",
    github: "https://github.com/rixicz",
    linkedin: "https://www.linkedin.com/in/patriksmidoch",
    pdfPath: "./Profile.pdf"
  },
  nav: {
    about: "About",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    skills: "Skills",
    certifications: "Certifications",
    contact: "Contact"
  },
  hero: {
    badge: "Available for internships & collaborations",
    summary: "High school student passionate about the intersection of Human Resources, Recruitment, Programming (Python, C), Web Development (HTML, CSS, JavaScript), and Microsoft Technologies (Power BI, Azure).",
    downloadCV: "Download CV (PDF)",
    copyEmail: "Copy Email",
    copiedNotice: "Email address copied to clipboard!",
    contactMe: "Get in Touch"
  },
  sections: {
    experienceTitle: "Work Experience",
    experienceSubtitle: "Professional journey combining digital HR practices, cultural education, and customer operations.",
    educationTitle: "Education",
    educationSubtitle: "Academic foundations and continuous high school studies in Říčany.",
    projectsTitle: "Featured Projects",
    projectsSubtitle: "Selected software development, hardware architecture, and data engineering projects.",
    skillsTitle: "Core Competencies",
    skillsSubtitle: "A balanced blend of engineering capabilities, HR practices, and analytical disciplines.",
    certificationsTitle: "Certifications & Achievements",
    certificationsSubtitle: "Verified courses, international testing, and competitive milestones.",
    contactTitle: "Let's Connect",
    contactSubtitle: "Open to discussions, traineeship opportunities, and technical projects."
  },
  experiences: [
    {
      company: "CONECTIO Group",
      role: "HR Digi Trainee",
      period: "January 2026 – Present",
      location: "Prague, Czechia",
      type: "Traineeship",
      description: [
        "Contributing to recruitment digitalization, applicant tracking optimizations, and internal HR automation workflows.",
        "Exploring digital tools and data dashboards to enhance candidate discovery and hiring team coordination.",
        "Connecting modern tech capabilities with practical talent acquisition and employee experience needs."
      ],
      skills: ["Recruitment", "Digital HR", "Process Optimization", "Power BI", "Data Analysis"]
    },
    {
      company: "Národní památkový ústav",
      role: "Tour Guide (Průvodce)",
      period: "July 2026 – Present",
      location: "Czechia",
      type: "Part-time",
      description: [
        "Delivering comprehensive guided tours in both Czech and English to international and domestic tourist groups.",
        "Communicating complex historical and cultural contexts clearly and engagingly under live presentation dynamics.",
        "Exercising crowd management, interpersonal communication, and active problem solving."
      ],
      skills: ["Public Speaking", "English Fluency", "Cultural Heritage", "Client Experience", "Storytelling"]
    },
    {
      company: "ORLEN S.A.",
      role: "Cashier (Pokladník)",
      period: "July 2025 – August 2025",
      location: "Prague, Czechia",
      type: "Seasonal",
      description: [
        "Handled front-line customer operations, POS systems, cash reconciliations, and retail transactions under fast-paced peak hours.",
        "Ensured compliance with company customer satisfaction standards, store inventory restocking, and team collaboration."
      ],
      skills: ["Customer Service", "Financial Accuracy", "POS Operations", "Teamwork", "Patience Under Pressure"]
    }
  ],
  education: [
    {
      institution: "Gymnázium Říčany",
      degree: "General Secondary Education (Všeobecné)",
      period: "September 2021 – May 2029",
      location: "Říčany, Czechia",
      description: [
        "Eight-year prestigious grammar school curriculum emphasizing analytical thinking, mathematics, natural sciences, foreign languages, and humanities.",
        "Independent elective studies and extracurricular focus on Computer Science, AP Psychology, and Biomechanics."
      ]
    }
  ],
  projects: [
    {
      name: "Nand2Tetris",
      description: "Assembled a complete 16-bit Hack computer from first principles (elementary logic gates up to ALU, CPU, Memory, and Hack assembly interpreter).",
      tech: ["HDL", "Computer Architecture", "Hardware Sim", "Assembly"],
      githubUrl: "https://github.com/rixicz/Nand2Tetris",
      featured: true
    },
    {
      name: "MicrosoftTechLearn",
      description: "Collection of practical assignments and implementations mastering Microsoft technologies, cloud fundamentals with Azure, and business intelligence with Power BI.",
      tech: ["Power BI", "Microsoft Azure", "Cloud Concepts", "Analytics"],
      githubUrl: "https://github.com/rixicz/MicrosoftTechLearn",
      featured: true
    },
    {
      name: "JavaScript30",
      description: "Practical implementations of 30 vanilla JavaScript projects, practicing DOM manipulation, HTML5 Canvas, audio APIs, CSS variables, and event systems without frameworks.",
      tech: ["JavaScript", "HTML5", "CSS3", "Web APIs"],
      githubUrl: "https://github.com/rixicz/JavaScript30",
      featured: false
    },
    {
      name: "Calculator",
      description: "Precision-focused calculator application featuring responsive layout, keyboard input handling, error state boundaries, and clean UI design.",
      tech: ["JavaScript", "CSS", "UI Design"],
      githubUrl: "https://github.com/rixicz/calculator",
      featured: false
    },
    {
      name: "Etch-a-Sketch",
      description: "Interactive browser grid drawing canvas featuring dynamic grid dimension configuration, multi-color modes, shading opacity increments, and responsive canvas sizing.",
      tech: ["JavaScript", "DOM Scripting", "CSS Flex/Grid"],
      githubUrl: "https://github.com/rixicz/etch-a-sketch",
      featured: false
    }
  ],
  skillCategories: [
    {
      title: "Programming & Web",
      skills: [
        { name: "Python" },
        { name: "C Language" },
        { name: "JavaScript (ES6+)" },
        { name: "HTML5 & CSS3" },
        { name: "Git & GitHub" },
        { name: "Linux / CLI" }
      ]
    },
    {
      title: "Data & Enterprise Tech",
      skills: [
        { name: "Microsoft Power BI" },
        { name: "Microsoft Azure" },
        { name: "Data Visualization" },
        { name: "Microsoft 365" }
      ]
    },
    {
      title: "Human Resources & Recruitment",
      skills: [
        { name: "Talent Sourcing & Screening" },
        { name: "HR Digitalization" },
        { name: "Applicant Tracking Concepts" },
        { name: "Candidate Experience" }
      ]
    },
    {
      title: "Sciences & Analytical",
      skills: [
        { name: "Biomechanics" },
        { name: "Psychology" },
        { name: "Scientific Reasoning" }
      ]
    }
  ],
  certifications: [
    {
      name: "Linux Unhatched",
      issuer: "Cisco Networking Academy / NDG",
      category: "tech",
      badgeLabel: "Linux Systems"
    },
    {
      name: "Introduction to Python Programming 2026",
      issuer: "University of Helsinki (MOOC.fi)",
      category: "tech",
      badgeLabel: "Python"
    },
    {
      name: "AP Psychology",
      issuer: "College Board / Advanced Placement",
      category: "psychology",
      badgeLabel: "Psychology"
    },
    {
      name: "Best in English",
      issuer: "International English Competition",
      category: "competition",
      badgeLabel: "Language Excellence"
    },
    {
      name: "Biomechaton",
      issuer: "Biomechanics Challenge",
      category: "competition",
      badgeLabel: "Biomechanics"
    }
  ],
  languages: [
    { language: "Czech", proficiency: "Native or Bilingual Proficiency" },
    { language: "English", proficiency: "Full Professional Proficiency (C1/C2)" }
  ],
  footer: {
    rights: "Patrik Šmidoch. All rights reserved.",
    backToTop: "Back to top"
  }
};

export const cvDataCz: CVContent = {
  meta: {
    name: "Patrik Šmidoch",
    headline: "HR Digi Trainee v Conectio Group · Student gymnázia & technologický nadšenec",
    location: "Praha, Česká republika",
    email: "patrik.smidoch@hotmail.com",
    github: "https://github.com/rixicz",
    linkedin: "https://www.linkedin.com/in/patriksmidoch",
    pdfPath: "./Profile.pdf"
  },
  nav: {
    about: "O mně",
    experience: "Zkušenosti",
    education: "Vzdělání",
    projects: "Projekty",
    skills: "Dovednosti",
    certifications: "Certifikace",
    contact: "Kontakt"
  },
  hero: {
    badge: "Otevřen stážím a profesním příležitostem",
    summary: "Student víceletého gymnázia se zájmem o propojení moderního HR, náboru, programování (Python, C), webového vývoje (HTML, CSS, JavaScript) a technologií Microsoft (Power BI, Azure).",
    downloadCV: "Stáhnout CV (PDF)",
    copyEmail: "Kopírovat e-mail",
    copiedNotice: "E-mailová adresa byla zkopírována do schránky!",
    contactMe: "Napsat zprávu"
  },
  sections: {
    experienceTitle: "Pracovní zkušenosti",
    experienceSubtitle: "Profesní cesta propojující digitalizaci HR, kulturní průvodcovství a práci se zákazníky.",
    educationTitle: "Vzdělání",
    educationSubtitle: "Akademický základ a probíhající studium na gymnáziu v Říčanech.",
    projectsTitle: "Vybrané projekty",
    projectsSubtitle: "Ukázky softwarových projektů, hardwarové architektury a práce s Microsoft technologiemi.",
    skillsTitle: "Klíčové kompetence",
    skillsSubtitle: "Vyvážený mix technologických schopností, moderních HR postupů a analytických oborů.",
    certificationsTitle: "Certifikace & Úspěchy",
    certificationsSubtitle: "Ověřené kurzy, mezinárodní zkoušky a soutěžní ocenění.",
    contactTitle: "Spojme se",
    contactSubtitle: "Jsem otevřen diskusím, stážovým příležitostem a zajímavým projektům."
  },
  experiences: [
    {
      company: "CONECTIO Group",
      role: "HR Digi Trainee",
      period: "Leden 2026 – Současnost",
      location: "Praha, Česká republika",
      type: "Trainee program",
      description: [
        "Spolupráce na digitalizaci náborových procesů, optimalizaci systémů pro správu uchazečů a automatizaci HR agendy.",
        "Práce s datovými přehledy a digitálními nástroji pro zefektivnění vyhledávání talentů a týmové koordinace.",
        "Propojování moderních technologických řešení s praktickými potřebami náboru a péče o zaměstnance."
      ],
      skills: ["Nábor & Recruitment", "Digitální HR", "Optimalizace procesů", "Power BI", "Analýza dat"]
    },
    {
      company: "Národní památkový ústav",
      role: "Průvodce",
      period: "Červenec 2026 – Současnost",
      location: "Česká republika",
      type: "Částečný úvazek",
      description: [
        "Vedení komentovaných prohlídek v českém a anglickém jazyce pro tuzemské i zahraniční návštěvníky.",
        "Srozumitelná a poutavá prezentace historických i architektonických souvislostí v živém kontaktu s publikem.",
        "Rozvoj rétorických dovedností, krizové komunikace a péče o návštěvnický zážitek."
      ],
      skills: ["Prezentační dovednosti", "Plynulá angličtina", "Kulturní dědictví", "Komunikace", "Klientský přístup"]
    },
    {
      company: "ORLEN S.A.",
      role: "Pokladník",
      period: "Červenec 2025 – Srpen 2025",
      location: "Praha, Česká republika",
      type: "Sezónní brigáda",
      description: [
        "Péče o zákazníky, obsluha pokladního systému POS, finanční hotovostní a bezhotovostní uzávěrky v exponovaných časech.",
        "Dodržování standardů kvality zákaznického servisu, doplňování zboží a efektivní týmová spolupráce."
      ],
      skills: ["Zákaznický servis", "Práce s financemi", "Obsluha POS", "Týmová práce", "Práce ve stresu"]
    }
  ],
  education: [
    {
      institution: "Gymnázium Říčany",
      degree: "Všeobecné gymnázium (osmileté)",
      period: "Září 2021 – Květen 2029",
      location: "Říčany, Česká republika",
      description: [
        "Studium na prestižním gymnáziu s důrazem na analytické myšlení, matematiku, přírodní vědy, cizí jazyky a společenskovědní předměty.",
        "Aktivní samostudium a zájmové zaměření na informatiku, AP Psychologii a biomechaniku."
      ]
    }
  ],
  projects: [
    {
      name: "Nand2Tetris",
      description: "Sestavení kompletního 16bitového počítače Hack od základních logických hradel až po ALU, procesor, paměťovou hierarchii a assembler.",
      tech: ["HDL", "Architektura počítačů", "Simulace HW", "Assembler"],
      githubUrl: "https://github.com/rixicz/Nand2Tetris",
      featured: true
    },
    {
      name: "MicrosoftTechLearn",
      description: "Praktické projekty a materiály zaměřené na technologie Microsoft, cloudové služby v Microsoft Azure a pokročilou vizualizaci dat v Power BI.",
      tech: ["Power BI", "Microsoft Azure", "Cloud", "Analytika dat"],
      githubUrl: "https://github.com/rixicz/MicrosoftTechLearn",
      featured: true
    },
    {
      name: "JavaScript30",
      description: "Sada 30 praktických projektů v čistém JavaScriptu bez externích frameworků – práce s DOM, HTML5 Canvas, zvukovými API a CSS proměnnými.",
      tech: ["JavaScript", "HTML5", "CSS3", "Web APIs"],
      githubUrl: "https://github.com/rixicz/JavaScript30",
      featured: false
    },
    {
      name: "Calculator",
      description: "Webová kalkulačka s důrazem na korektní ošetření chybových stavů, podporu klávesnice, plovoucí desetinnou čárku a čistý design.",
      tech: ["JavaScript", "CSS", "UI Design"],
      githubUrl: "https://github.com/rixicz/calculator",
      featured: false
    },
    {
      name: "Etch-a-Sketch",
      description: "Interaktivní virtuální kreslicí tabulka s dynamickým nastavením mřížky, volbou RGB barev a postupným stínováním průhlednosti.",
      tech: ["JavaScript", "DOM Scripting", "CSS Flex/Grid"],
      githubUrl: "https://github.com/rixicz/etch-a-sketch",
      featured: false
    }
  ],
  skillCategories: [
    {
      title: "Programování & Web",
      skills: [
        { name: "Python" },
        { name: "C (jazyk C)" },
        { name: "JavaScript (ES6+)" },
        { name: "HTML5 & CSS3" },
        { name: "Git & GitHub" },
        { name: "Linux / CLI" }
      ]
    },
    {
      title: "Data & Firemní technologie",
      skills: [
        { name: "Microsoft Power BI" },
        { name: "Microsoft Azure" },
        { name: "Vizualizace dat" },
        { name: "Microsoft 365" }
      ]
    },
    {
      title: "Human Resources & Nábor",
      skills: [
        { name: "Sourcing & Screening talentů" },
        { name: "Digitalizace v HR" },
        { name: "Náborové systémy (ATS)" },
        { name: "Kandidátská zkušenost" }
      ]
    },
    {
      title: "Vědní & Analytické disciplíny",
      skills: [
        { name: "Biomechanika" },
        { name: "Psychologie" },
        { name: "Vědecká metoda a analýza" }
      ]
    }
  ],
  certifications: [
    {
      name: "Linux Unhatched",
      issuer: "Cisco Networking Academy / NDG",
      category: "tech",
      badgeLabel: "Linuxové systémy"
    },
    {
      name: "Introduction to Python Programming 2026",
      issuer: "University of Helsinki (MOOC.fi)",
      category: "tech",
      badgeLabel: "Python"
    },
    {
      name: "AP Psychology",
      issuer: "College Board / Advanced Placement",
      category: "psychology",
      badgeLabel: "Psychologie"
    },
    {
      name: "Best in English",
      issuer: "Mezinárodní anglická soutěž",
      category: "competition",
      badgeLabel: "Jazyková excelence"
    },
    {
      name: "Biomechaton",
      issuer: "Soutěž v biomechanice",
      category: "competition",
      badgeLabel: "Biomechanika"
    }
  ],
  languages: [
    { language: "Čeština", proficiency: "Rodilý mluvčí" },
    { language: "Angličtina", proficiency: "Plná profesionální způsobilost (C1/C2)" }
  ],
  footer: {
    rights: "Patrik Šmidoch. Všechna práva vyhrazena.",
    backToTop: "Zpět nahoru"
  }
};
