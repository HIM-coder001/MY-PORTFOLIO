export const siteConfig = {
  name: 'Joseph Maina',
  title: 'Software Developer',
  location: 'Eldoret, Kenya',
  heroDescription:
    'While my day-to-day focus is deep in backend architectures, databases, and APIs, I build full-stack web applications from the ground up-stitching clean server logic to responsive user interfaces.',
  aboutIntro:
    'I’m a software engineer who loves figuring out how complex systems fit together under the hood. While I work across the full stack building clean, responsive frontends when a project needs them my real comfort zone is deep in the backend.\n\nWhether I’m designing multi-table relational database schemas, engineering REST APIs, or wiring up third-party payment integrations like M-Pesa, I focus on building software that is predictable, secure, and easy to maintain. I treat backend development like building a solid engine: if the architecture, data models, and error handling are handled correctly, everything on top runs effortlessly.',
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
