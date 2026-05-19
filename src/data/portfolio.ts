import { 
  Database, Globe, Lightbulb, Workflow, 
  ShieldCheck, LayoutTemplate
} from "lucide-react";

export const portfolioData = {
  hero: {
    name: "Catriel Bartezaghi",
    headline: "I build backend systems for business-critical workflows",
    subtitle: "Computer Engineer and backend-oriented Full Stack Developer focused on PHP/Laravel, SQL, automation, integrations, CI/CD, and maintainable web applications.",
    supportingText: "I help turn complex business processes into reliable software used in real operations.",
    tags: [
      { label: "PHP", type: "primary" },
      { label: "Laravel", type: "primary" },
      { label: "MySQL", type: "primary" },
      { label: "Docker", type: "primary" },
      { label: "GitLab CI/CD", type: "primary" },
      { label: "OpenAI API", type: "secondary" },
      { label: "Twilio", type: "secondary" },
      { label: "Next.js", type: "secondary" },
      { label: "FastAPI", type: "secondary" }
    ]
  },
  about: {
    paragraphs: [
      "I am a Computer Engineer and backend-oriented Full Stack Developer focused on building reliable software for business operations.",
      "My work centers on translating complex workflows into maintainable systems: data modeling, SQL optimization, migrations, API integrations, automated validations, and production-oriented web applications.",
      "I have experience working with legacy PHP/MySQL systems, Laravel applications, WordPress-based corporate websites, Docker environments, GitLab CI/CD pipelines, and AI-powered workflow automation using OpenAI and Twilio."
    ],
    quickFacts: [
      { label: "Computer Engineer", icon: "school" },
      { label: "Based in Argentina", icon: "public" },
      { label: "Backend-oriented Full Stack Developer", icon: "code" },
      { label: "English & Spanish", icon: "language" },
      { label: "Business workflow automation", icon: "workflow" },
      { label: "SQL & data modeling focus", icon: "database" }
    ]
  },
  expertise: [
    {
      title: "Business Logic",
      description: "Turning real-world workflows into maintainable backend systems."
    },
    {
      title: "Data & SQL",
      description: "Modeling data, writing reliable queries, and improving data-heavy views."
    },
    {
      title: "Automation",
      description: "Reducing manual work through API integrations and workflow automation."
    },
    {
      title: "Reliability",
      description: "Using tests, CI/CD checks, migrations, and documentation to reduce production risk."
    }
  ],
  skills: [
    {
      title: "Backend & Data",
      icon: Database,
      items: ["PHP", "Laravel", "MySQL", "PostgreSQL", "REST APIs", "SQL Optimization", "Data Modeling", "Migrations"],
      colorClass: "text-primary",
      bgClass: "bg-primary"
    },
    {
      title: "Quality & Infrastructure",
      icon: ShieldCheck,
      items: ["PHPUnit", "Integration Tests", "GitLab CI/CD", "Docker", "Git", "Linux"],
      colorClass: "text-tertiary",
      bgClass: "bg-tertiary"
    },
    {
      title: "Frontend & Web",
      icon: Globe,
      items: ["JavaScript", "TypeScript", "Next.js", "React", "Tailwind CSS", "Bootstrap", "jQuery", "WordPress"],
      colorClass: "text-secondary",
      bgClass: "bg-secondary"
    },
    {
      title: "AI & Automation",
      icon: Lightbulb,
      items: ["OpenAI API", "Twilio API", "Workflow Automation", "NLP Integrations"],
      colorClass: "text-primary",
      bgClass: "bg-primary"
    }
  ],
  highlights: [
    { 
      title: "CI/CD & Quality Gates", 
      description: "Implemented GitLab CI/CD validation workflows with syntax checks, migration validation, PHPUnit, and integration tests.",
      keywords: ["GitLab CI/CD", "PHPUnit", "MySQL snapshots"],
      icon: ShieldCheck 
    },
    { 
      title: "SQL & Performance", 
      description: "Optimized reporting and dashboard views by refining SQL queries and adding database indexes for large datasets.",
      keywords: ["SQL", "Indexes", "Data-heavy views"],
      icon: Database 
    },
    { 
      title: "Legacy Modernization", 
      description: "Modernized legacy interfaces from Bootstrap 2 and jQuery 1.7 to Bootstrap 5 and jQuery 3.x.",
      keywords: ["Bootstrap", "jQuery", "Maintainability"],
      icon: LayoutTemplate 
    },
    { 
      title: "Business Workflow Automation", 
      description: "Built automations and integrations that transform manual business processes into structured software workflows.",
      keywords: ["OpenAI API", "Twilio", "Automation"],
      icon: Workflow 
    }
  ],
  projects: [
    {
      title: "Business-Critical Intranet Modules",
      type: "Professional Work - Serfe",
      badge: "Corporate",
      description: "Built internal modules for manufacturing workflows, including traceability, inventory, recipes, production processes, stock transfers, and supply control.",
      focus: [
        "Legacy PHP/MySQL systems",
        "Data modeling and migrations",
        "SQL reliability",
        "Testing and validation workflows"
      ],
      tags: ["PHP", "MySQL", "JavaScript", "Legacy Systems", "SQL", "GitLab CI/CD", "PHPUnit"],
      link: {
        href: "https://www.serfe.com/",
        label: "Company Website",
        kind: "external"
      }
    },
    {
      title: "WhatsApp Finance Assistant",
      type: "Professional Work - Cipax",
      badge: "FinTech",
      description: "Built a Laravel-based accounting workflow that integrates Twilio and OpenAI APIs to capture financial transactions from WhatsApp messages using natural language.",
      focus: [
        "Laravel business logic",
        "WhatsApp-based workflow automation",
        "OpenAI and Twilio integrations",
        "Structured accounting operations from natural language input"
      ],
      tags: ["Laravel", "FilamentPHP", "MySQL", "OpenAI API", "Twilio", "WhatsApp", "Docker"],
      link: {
        href: "https://cipax.dev/",
        label: "Company Website",
        kind: "external"
      }
    },
    {
      title: "TallyNorth",
      type: "Personal Project",
      badge: "Product",
      description: "A full-stack personal finance platform for cash flow projection, multi-currency accounts, recurring expenses, and credit card installment tracking.",
      focus: [
        "Backend API design",
        "Financial logic",
        "Modern full-stack architecture",
        "Product thinking"
      ],
      tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "SQLAlchemy", "Tailwind CSS", "shadcn/ui"],
      link: {
        href: "https://tally-north.vercel.app/",
        label: "Live App",
        kind: "external"
      }
    },
    {
      title: "Intelligent Investment Decision System",
      type: "Academic Project",
      badge: "Academic",
      description: "A decision support system for financial markets using machine learning models on time series data.",
      focus: [
        "Data preprocessing",
        "Model experimentation",
        "Evaluation",
        "Software packaging"
      ],
      tags: ["Python", "PyTorch", "SQLite", "Docker", "Machine Learning", "Time Series"],
      link: {
        href: "/catriel-bartezaghi-investment-decision-system-thesis.pdf",
        label: "Read Thesis",
        kind: "document"
      }
    }
  ],
  experience: [
    {
      year: "Apr 2025 - Present",
      role: "Full Stack Developer",
      company: "Serfe",
      bullets: [
        "Develop and maintain PHP/MySQL business applications and WordPress websites for external clients.",
        "Build internal modules for traceability, inventory, production workflows, stock transfers, and supply control.",
        "Improve reliability through data modeling, migrations, PHPUnit, integration tests, and GitLab CI/CD validation workflows.",
        "Optimize SQL queries and database indexes for data-heavy reporting and dashboard views."
      ],
      current: true
    },
    {
      year: "Jan 2024 - Apr 2025",
      role: "Full Stack Developer",
      company: "Cipax",
      bullets: [
        "Built and maintained a Laravel 10 accounting management system using FilamentPHP, MySQL, Docker, JavaScript, and Bootstrap.",
        "Developed accounting workflows, current accounts, internal dashboards, and business logic modules.",
        "Integrated Twilio and OpenAI APIs to record financial transactions from WhatsApp messages using natural language.",
        "Improved production systems with a focus on usability, stability, and maintainability."
      ],
      current: false
    }
  ],
  contact: {
    headline: "Interested in building reliable business software?",
    description: "I'm open to backend-oriented full stack roles where I can work on business logic, data-heavy systems, automation, integrations, and maintainable web applications.",
    email: "catriel.barte@gmail.com",
    links: {
      linkedin: "https://linkedin.com/in/catrielbartezaghi/",
      github: "https://github.com/catrielbartezaghi",
      resume: "/catriel-bartezaghi-resume.pdf"
    }
  },
  footer: {
    phrase: "Built for reliability, maintainability, and real-world workflows."
  }
};
