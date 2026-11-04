// ============================================================
// portfolioData.js — Personal Portfolio Data
// All content and configuration for the portfolio website.
// ============================================================

export const personalInfo = {
  name: "Divya K J",
  firstName: "Divya",
  brandName: "Divya K J", // shown in the preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Bengaluru, India",
  phone: "+918088654502",
  emails: {
    primary: "divyakjdivyakj46@gmail.com",
    secondary: "",
  },
  summary:
    "Computer Science Engineering student (CGPA 8.8) and Java Full Stack Development Intern with hands-on experience building web applications using Java, JDBC, Hibernate, MySQL, HTML, CSS, JavaScript and ReactJS. Passionate about building reliable, user-focused applications.",
  resumeUrl: "/Divya_K_J_Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "Tap Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/divyakj680",
  linkedin: "https://www.linkedin.com/in/divya-kj-818940314",
  instagram: "https://www.instagram.com/",
};

export const heroContent = {
  greeting: "Hi, I'm Divya K J",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "Computer Science Engineering student & Java Full Stack Intern crafting responsive, scalable web applications with Java, Hibernate, MySQL, and modern frontend technologies.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:divyakjdivyakj46@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Divya,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Divya_K_J_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Divya K J</span>, a motivated Computer Science Engineering student (CGPA 8.8) and Java Full Stack Developer based in Bengaluru, India. With intensive hands-on training from Tap Academy and Rooman Technologies, I specialize in architecting full-stack web applications using Java, JDBC, Servlets, Hibernate, MySQL, and frontend technologies like ReactJS, HTML5, CSS3, and JavaScript. I am passionate about writing clean, maintainable code to solve real-world problems.`,
  techStack: ["Java", "JDBC", "Servlets", "Hibernate", "MySQL", "ReactJS", "JavaScript", "HTML5", "CSS3", "Git"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A disciplined, step-by-step engineering approach to designing and deploying robust software.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyze business requirements, study domain logic, and plan database models and system architecture.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architect RESTful API contracts, relational schemas, and responsive UI wireframes for seamless user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Implement scalable backend logic with Java, JDBC, and Hibernate, integrating with responsive frontend interfaces and secure databases.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Test API endpoints thoroughly, perform end-to-end integration testing, and deliver production-ready applications.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Languages",
      skills: [{ name: "Java" }, { name: "JavaScript" }, { name: "SQL" }],
    },
    {
      title: "Backend",
      skills: [{ name: "JDBC" }, { name: "Servlets" }, { name: "JSP" }, { name: "Hibernate (ORM)" }],
    },
    {
      title: "Frontend",
      skills: [{ name: "ReactJS" }, { name: "JavaScript" }, { name: "HTML5" }, { name: "CSS3" }],
    },
    {
      title: "Databases & Tools",
      skills: [{ name: "MySQL" }, { name: "Git" }, { name: "GitHub" }, { name: "VS Code" }, { name: "Eclipse" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "TCS iON National Qualifier Test (NQT)",
    description:
      "Achieved 68.02% overall with 79.10% in Advanced Quantitative & Reasoning and successfully cleared the Java hands-on assessment (Sep 2026).",
    role: "National Qualifier",
    badge: "TCS iON NQT",
  },
  {
    title: "NSQF Level 5 Certified Application Developer",
    description:
      "Cleared the comprehensive sector skill assessment with Grade A, awarded by IT-ITeS Sector Skill Council (NASSCOM) / Skill India.",
    role: "Grade A Certified",
    badge: "NASSCOM / Skill India",
  },
  {
    title: "Full Stack Java Development",
    description:
      "Completed an intensive 84.5-hour professional curriculum covering Java architecture, OOP concepts, collections, and database connectivity.",
    role: "Udemy Certified",
    badge: "84.5 Hours",
  },
];

export const internshipsList = [
  {
    organization: "Tap Academy",
    role: "Java Full Stack Development Intern",
    duration: "Mar 2026 – Sep 2026",
    skills: [
      "Built responsive web applications using HTML, CSS and Java on real-world projects",
      "Integrated frontend interfaces with backend logic to deliver working end-to-end features",
      "Created reusable UI components and applied optimizations to improve website performance",
      "Used Git and GitHub for version control and team collaboration across project work",
    ],
    tech: ["Java", "JDBC", "Servlets", "JSP", "Hibernate", "MySQL", "HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
  },
  {
    organization: "Rooman Technologies",
    role: "Application Developer (Web & Mobile)",
    duration: "6 Months (Apr 2025)",
    skills: [
      "Completed a 540-hour, 6-month NSQF Level 5 program in web and mobile application development",
      "Cleared the sector skill assessment with Grade A, certified by IT-ITeS Sector Skill Council (NASSCOM) / Skill India",
      "Gained hands-on experience in full-cycle web and mobile application development and UI workflows",
    ],
    tech: ["Web & Mobile Dev", "HTML5", "CSS3", "JavaScript", "UI Components", "APIs"],
  },
];

export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaks down complex requirements and technical bugs into structured, logical solutions." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborates actively with peers to solve software engineering challenges and reach project goals." },
  { name: "Communication", icon: "💬", desc: "Articulates technical concepts and progress clearly within technical and cross-functional teams." },
  { name: "Time Management", icon: "⏱️", desc: "Prioritizes development tasks effectively to deliver robust code within expected timelines." },
];

export const projects = [
  {
    id: "foodify-delivery-application",
    number: "01",
    badge: "🚀 Flagship Project", // use null for no badge
    title: "Foodify – Food Delivery Application",
    description:
      "Built a full-stack food delivery web application featuring user registration, authentication, restaurant listings, menu browsing, cart management, and order placement. Designed a normalized MySQL relational schema covering users, restaurants, menus, orders, and payments with a responsive interface.",
    techTags: ["Java", "JDBC", "Servlets", "JSP", "MySQL", "HTML5", "CSS3"],
    links: {
      github: "https://github.com/divyakj680/Foodify-Food-Delivery-Application",
      demo: "",
    },
    isFlagship: true,
  },
  {
    id: "ecommerce-website",
    number: "02",
    badge: null,
    title: "E-Commerce Shopping Platform",
    description:
      "Developed an online shopping platform using Java and SQL. Implemented comprehensive product catalog management, dynamic keyword search, and shopping cart functionality with robust relational data operations.",
    techTags: ["Java", "SQL", "Relational Database", "Web UI"],
    links: {
      github: "https://github.com/divyakj680",
      demo: "",
    },
    isFlagship: false,
  },
  {
    id: "portfolio-website",
    number: "03",
    badge: null,
    title: "Personal Developer Portfolio",
    description:
      "Designed and built a modern, responsive personal developer portfolio with smooth animations, fluid cursor interactions, dynamic data architecture, and integrated contact messaging.",
    techTags: ["ReactJS", "Tailwind CSS", "Framer Motion", "JavaScript"],
    links: {
      github: "https://github.com/divyakj680",
      demo: "",
    },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/divya-kj-818940314",
};

export const education = {
  degree: "Bachelor of Engineering, Computer Science Engineering",
  institution: "R. R. Institute of Technology, Bengaluru",
  cgpa: "CGPA: 8.8 (2023 – 2027)",
  graduation: "2027",
  twelfth: "Manasa PU College — Pre-University Course (PUC): 84.5% (2021 – 2023)",
  tenth: "Swarna High School — SSLC: 76% (2021)",
};

export const footerContent = {
  taglines: ["Java Full Stack Developer", "Hibernate · MySQL · ReactJS", "Building reliable, user-focused software"],
  credential: "B.E. Computer Science Engineering (CGPA 8.8)",
  copyright: `© ${new Date().getFullYear()} Divya K J | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
