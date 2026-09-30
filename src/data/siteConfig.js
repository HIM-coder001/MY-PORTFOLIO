export const siteConfig = {
  name: 'Joseph Maina',
  title: 'Final-year Software Engineer',
  location: 'Eldoret, Kenya',
  availabilityLine1: 'Available for',
  availabilityLine2: 'graduate roles & projects',
  heroHeadline: 'Full-stack web systems built for real business workflows.',
  heroSubtitle: 'React frontends, stable APIs, and practical business tools',
  heroDescription:
    'I am a final-year software developer building reliable web apps, dashboards, APIs, and internal tools that help teams reduce manual work and move faster.',
  aboutIntro:
    'I enjoy turning real problems into clear, maintainable web products. My work focuses on full-stack systems where thoughtful interfaces, dependable APIs, and useful data all need to work together.',
  servicesIntro: "Let's build something useful, together",
  processIntro:
    'A simple, collaborative workflow that turns ideas into working software.',
  skillsIntro: 'Here are the tools I use to turn ideas into working software',
  projectsIntro:
    'Selected builds that show how I turn messy workflows into usable, maintainable software.',
  contactIntro:
    'Have a project in mind or want to discuss potential opportunities? Feel free to reach out!',
  services: [
    {
      title: 'Back-End Development',
      description:
        'Stable APIs, scalable data layers, and secure systems built with Node.js, Express, and Prisma for production-ready services.',
      icon: 'backend',
    },
    {
      title: 'Front-End Development',
      description:
        'Fast, responsive UI built with React and Tailwind, polished experiences with modern patterns and accessible design.',
      icon: 'frontend',
    },
    {
      title: 'Deployment & Maintenance',
      description:
        'Reliable hosting, CI/CD workflows, and monitoring so your product stays stable after launch.',
      icon: 'deployment',
    },
    {
      title: 'Performance Optimization',
      description:
        'System audits, query tuning, and code-level improvements for faster, more reliable user experiences.',
      icon: 'performance',
    },
    {
      title: 'Data-driven Systems',
      description:
        'Practical database modeling and reporting workflows for school management, e-commerce, and business tooling.',
      icon: 'analytics',
    },
  ],
  processSteps: [
    {
      step: '01',
      title: 'Discover',
      description:
        'We talk through the problem, who the users are, and what success looks like before writing a single line of code.',
      icon: 'discover',
    },
    {
      step: '02',
      title: 'Plan',
      description:
        'I map out the data model, pick the right stack, and sketch the key screens so there are no surprises mid-build.',
      icon: 'plan',
    },
    {
      step: '03',
      title: 'Build',
      description:
        'I write clean, tested code in focused sprints and share progress so you can give feedback early.',
      icon: 'build',
    },
    {
      step: '04',
      title: 'Launch',
      description:
        'I deploy, run final checks, and stay available after go-live to handle anything that comes up.',
      icon: 'launch',
    },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Express',
    'React',
    'Tailwind CSS',
    'Prisma',
    'MySQL',
    'MongoDB',
    'HTML5',
    'CSS3',
    'Git',
  ],
  yearsExperience: 0,
  contactFormEndpoint: '',
  resumeUrl: '/resume.pdf',
  githubUrl: 'https://github.com/HIM-coder001',
  linkedinUrl: 'https://www.linkedin.com/in/joseph-maina-dev',
  email: 'josekamaemaina2005@gmail.com',
  calUrl: 'https://cal.com/joseph-maina',
  calLink: 'joseph-maina',
  calNamespace: 'schedule-call',
  projectStats: [
    { value: 'Final year', label: 'Graduating Dec 2026' },
    { value: '4', label: 'Product areas' },
    { value: 'Full-stack', label: 'Scope owned' },
  ],
  socialLinks: [
    { label: 'Email', href: 'mailto:josekamaemaina2005@gmail.com', icon: 'email' },
    { label: 'GitHub', href: 'https://github.com/HIM-coder001', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joseph-maina-dev', icon: 'linkedin' },
  ],
};

export function getMailtoUrl(email = siteConfig.email) {
  return `mailto:${email}`;
}

export function getGmailComposeUrl(email = siteConfig.email) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
}
