export interface Project {
  name: string;
  description: string;
  tech: string[];
  githubUrl: string;
}

export interface Certification {
  name: string;
  issuer: string;
  category: 'tech' | 'psychology' | 'language';
  badgeLabel?: string;
  certificateUrl?: string;
}

export interface Competition {
  name: string;
  organizer: string;
  year: number;
  badgeLabel?: string;
  websiteUrl?: string;
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
    projects: string;
    skills: string;
    certifications: string;
    competitions: string;
    contact: string;
  };
  hero: {
    summary: string;
    downloadCV: string;
    copyEmail: string;
    copiedLabel: string;
    copiedNotice: string;
    contactMe: string;
  };
  sections: {
    projectsTitle: string;
    projectsSubtitle: string;
    skillsTitle: string;
    skillsSubtitle: string;
    certificationsTitle: string;
    certificationsSubtitle: string;
    competitionsTitle: string;
    competitionsSubtitle: string;
    viewCertificate: string;
    visitWebsite: string;
    contactTitle: string;
    contactSubtitle: string;
  };
  projects: Project[];
  skillCategories: SkillCategory[];
  certifications: Certification[];
  competitions: Competition[];
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
    projects: "Projects",
    skills: "Skills",
    certifications: "Certifications",
    competitions: "Competitions",
    contact: "Contact"
  },
  hero: {
    summary: "High school student passionate about HR, Programming (Python), Web Development (HTML, CSS, JavaScript), and Microsoft Technologies (Power BI, Azure).",
    downloadCV: "Download CV (PDF)",
    copyEmail: "Copy Email",
    copiedLabel: "Copied!",
    copiedNotice: "Email address copied to clipboard!",
    contactMe: "Get in Touch"
  },
  sections: {
    projectsTitle: "GitHub Projects",
    projectsSubtitle: "Selected software development, hardware architecture, and data engineering projects.",
    skillsTitle: "Core Competencies",
    skillsSubtitle: "A balanced blend of engineering capabilities, HR practices, and analytical disciplines.",
    certificationsTitle: "Certifications",
    certificationsSubtitle: "Verified courses and international testing.",
    competitionsTitle: "Competitions",
    competitionsSubtitle: "Competitive milestones and achievements.",
    viewCertificate: "View certificate",
    visitWebsite: "Visit website",
    contactTitle: "Let's Connect",
    contactSubtitle: "Open to discussions, traineeship opportunities, and technical projects."
  },
  projects: [
    {
      name: "gyri_meal",
      description: "Python scraper that pulls the daily canteen menu from the Gyri cafeteria, extracts meal names and allergens, and pushes a formatted lunch summary with a generated menu image to a phone via ntfy notifications.",
      tech: ["Python", "BeautifulSoup", "Requests", "Pillow", "Web Scraping"],
      githubUrl: "https://github.com/rixicz/gyri_meal"
    },
    {
      name: "pid_train_delay",
      description: "Python automation that tracks the delay of a specified line in the Prague Integrated Transport (PID).",
      tech: ["Python", "YAML"],
      githubUrl: "https://github.com/rixicz/pid_train_delay_public"
    },
    {
      name: "Nand2Tetris",
      description: "Assembled a complete 16-bit Hack computer from first principles (elementary logic gates up to ALU, CPU, Memory, and Hack assembly interpreter).",
      tech: ["HDL", "Computer Architecture", "Hardware Sim", "Assembly"],
      githubUrl: "https://github.com/rixicz/Nand2Tetris"
    },
    {
      name: "MicrosoftTechLearn",
      description: "Collection of practical assignments and implementations mastering Microsoft technologies, cloud fundamentals with Azure, and business intelligence with Power BI.",
      tech: ["Power BI", "Microsoft Azure", "Cloud Concepts", "Analytics"],
      githubUrl: "https://github.com/rixicz/MicrosoftTechLearn"
    },
    {
      name: "Calculator",
      description: "Precision-focused calculator application featuring responsive layout, keyboard input handling, error state boundaries, and clean UI design.",
      tech: ["JavaScript", "CSS", "UI Design"],
      githubUrl: "https://github.com/rixicz/calculator"
    },
  ],
  skillCategories: [
    {
      title: "Programming & Web",
      skills: [
        { name: "Python" },
        { name: "C Language" },
        { name: "JavaScript" },
        { name: "HTML & CSS" },
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
      badgeLabel: "Linux Systems",
      certificateUrl: "https://www.credly.com/earner/earned/badge/79582e9b-51f6-4859-afd7-ad889ac5ac58"
    },
    {
      name: "Introduction to Programming",
      issuer: "University of Helsinki (MOOC.fi)",
      category: "tech",
      badgeLabel: "Python MOOC · 5 ECTS",
      certificateUrl: "https://certificates.mooc.fi/validate/z0nkvqxaeo8"
    },
    {
      name: "AP Psychology",
      issuer: "College Board / Advanced Placement",
      category: "psychology",
      badgeLabel: "Psychology",
    },
    {
      name: "First Certificate in English (FCE)",
      issuer: "Cambridge English",
      category: "language",
      badgeLabel: "Grade A · C1",
    }
  ],
  competitions: [
    {
      name: "Biomechaton",
      organizer: "Biomechanics Challenge",
      badgeLabel: "Biomechanics",
      year: 2026,
      websiteUrl: "https://www.biomechanika.cz/"
    },
    {
      name: "Best in English",
      organizer: "Czech-us / Institute of Competencies and Development",
      badgeLabel: "Language Excellence",
      year: 2025,
      websiteUrl: "https://bestinenglish.org/"
    },
    {
      name: "Cyber Security Competition",
      organizer: "Centrum kybernetické bezpečnosti",
      badgeLabel: "2nd Place · Regional Round",
      year: 2025,
      websiteUrl: "https://www.kybersoutez.cz/"
    }
  ],
  languages: [
    { language: "Czech", proficiency: "Native speaker" },
    { language: "English", proficiency: "Full professional proficiency (C1/C2)" }
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
    projects: "Projekty",
    skills: "Dovednosti",
    certifications: "Certifikace",
    competitions: "Soutěže",
    contact: "Kontakt"
  },
  hero: {
    summary: "Student víceletého gymnázia se zájmem o propojení moderního HR, programování (Python, C), webového vývoje (HTML, CSS, JavaScript) a technologií Microsoft (Power BI, Azure).",
    downloadCV: "Stáhnout CV (PDF)",
    copyEmail: "Kopírovat e-mail",
    copiedLabel: "Zkopírováno!",
    copiedNotice: "E-mailová adresa byla zkopírována do schránky!",
    contactMe: "Napsat zprávu"
  },
  sections: {
    projectsTitle: "GitHub projekty",
    projectsSubtitle: "Ukázky softwarových projektů, hardwarové architektury a práce s Microsoft technologiemi.",
    skillsTitle: "Klíčové kompetence",
    skillsSubtitle: "Vyvážený mix technologických schopností, moderních HR postupů a analytických oborů.",
    certificationsTitle: "Certifikace",
    certificationsSubtitle: "Ověřené kurzy a mezinárodní zkoušky.",
    competitionsTitle: "Soutěže",
    competitionsSubtitle: "Soutěžní úspěchy a ocenění.",
    viewCertificate: "Zobrazit certifikát",
    visitWebsite: "Navštívit web",
    contactTitle: "Spojme se",
    contactSubtitle: "Jsem otevřen diskusím, stážovým příležitostem a zajímavým projektům."
  },
  projects: [
    {
      name: "gyri_meal",
      description: "Python scraper, který stahuje denní menu školní jídelny Gyri, rozpoznává názvy jídel a alergeny a posílá naformátovaný přehled obědů včetně vygenerovaného obrázku menu do telefonu přes ntfy.",
      tech: ["Python", "BeautifulSoup", "Requests", "Pillow", "Web scraping"],
      githubUrl: "https://github.com/rixicz/gyri_meal"
    },
    {
      name: "pid_train_delay",
      description: "Python automatizace, která sleduje zpoždění daného spoje pomocí živé mapy od Pražské integrované dopravy (PID).",
      tech: ["Python", "YAML"],
      githubUrl: "https://github.com/rixicz/pid_train_delay_public"
    },
    {
      name: "Nand2Tetris",
      description: "Sestavení kompletního 16bitového počítače Hack od základních logických hradel až po ALU, procesor, paměťovou hierarchii a assembler.",
      tech: ["HDL", "Architektura počítačů", "Simulace HW", "Assembler"],
      githubUrl: "https://github.com/rixicz/Nand2Tetris"
    },
    {
      name: "MicrosoftTechLearn",
      description: "Praktické projekty a materiály zaměřené na technologie Microsoft, cloudové služby v Microsoft Azure a pokročilou vizualizaci dat v Power BI.",
      tech: ["Power BI", "Microsoft Azure", "Cloud", "Analytika dat"],
      githubUrl: "https://github.com/rixicz/MicrosoftTechLearn"
    },
    {
      name: "Calculator",
      description: "Webová kalkulačka s důrazem na korektní ošetření chybových stavů, podporu klávesnice, plovoucí desetinnou čárku a čistý design.",
      tech: ["JavaScript", "CSS", "UI Design"],
      githubUrl: "https://github.com/rixicz/calculator"
    },
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
      badgeLabel: "Linuxové systémy",
      certificateUrl: "https://www.credly.com/earner/earned/badge/79582e9b-51f6-4859-afd7-ad889ac5ac58"
    },
    {
      name: "Introduction to Programming",
      issuer: "University of Helsinki (MOOC.fi)",
      category: "tech",
      badgeLabel: "Python MOOC · 5 ECTS",
      certificateUrl: "https://certificates.mooc.fi/validate/z0nkvqxaeo8"
    },
    {
      name: "AP Psychology",
      issuer: "College Board / Advanced Placement",
      category: "psychology",
      badgeLabel: "Psychologie",
    },
    {
      name: "First Certificate in English (FCE)",
      issuer: "Cambridge English",
      category: "language",
      badgeLabel: "Grade A · C1",
    }
  ],
  competitions: [
    {
      name: "Biomechaton",
      organizer: "Soutěž v biomechanice",
      badgeLabel: "Biomechanika",
      year: 2026,
      websiteUrl: "https://www.biomechanika.cz/"
    },
    {
      name: "Best in English",
      organizer: "Czech-us / Institut kompetencí a rozvoje",
      badgeLabel: "Jazyková excelence",
      year: 2025,
      websiteUrl: "https://bestinenglish.org/"
    },
    {
      name: "Cyber Security Competition",
      organizer: "Centrum kybernetické bezpečnosti",
      badgeLabel: "2. místo · krajské kolo",
      year: 2025,
      websiteUrl: "https://www.kybersoutez.cz/"
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
