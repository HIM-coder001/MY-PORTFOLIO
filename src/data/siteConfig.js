export const siteConfig = {
  name: 'Joseph Maina',
  title: 'Software Engineer',
  location: 'Eldoret, Kenya',
  availabilityLine1: 'Available for',
  availabilityLine2: 'new projects',
  heroHeadline: 'Building Scalable Systems.',
  heroSubtitle: 'Full-Stack & Systems Architecture',
  heroDescription:
    'I build deliberate, production-ready software. I enjoy creating innovative solutions and tackling complex challenges — from relational databases and REST APIs to responsive React frontends.',
  servicesIntro: "Let's bring your ideas to life, together",
  processIntro:
    'Approach that guarantees smooth collaboration and exceptional results.',
  skillsIntro: 'Here are my tech stack skills, which drive better results',
  projectsIntro:
    'Check out some of my favorite & most recent projects.',
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
        'Fast, responsive UI built with React and Tailwind — polished experiences with modern patterns and accessible design.',
      icon: 'frontend',
    },
    {
      title: 'Mobile Development',
      description:
        'Cross-platform experiences with React Native and Expo when your product needs to reach users on the go.',
      icon: 'mobile',
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
        'I analyze your business, understand user needs, and define clear objectives.',
      icon: 'discover',
    },
    {
      step: '02',
      title: 'Plan & Design',
      description:
        'I architect scalable foundations and plan optimal technical stacks for your goals.',
      icon: 'plan',
    },
    {
      step: '03',
      title: 'Build',
      description:
        'I engineer high-performance solutions using clean code and modern infrastructure.',
      icon: 'build',
    },
    {
      step: '04',
      title: 'Launch',
      description:
        'I deploy secure systems and provide seamless delivery to get your product live.',
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
  yearsExperience: 7,
  satisfactionRate: 87,
  contactFormEndpoint: '',
  resumeUrl: '/resume.pdf',
  githubUrl: 'https://github.com/HIM-coder001',
  linkedinUrl: 'https://www.linkedin.com/in/joseph-maina-dev',
  email: 'josekamaemaina2005@gmail.com',
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
