export const projects = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'Personal portfolio',
    type: 'Frontend build',
    discipline: 'frontend',
    description:
      'A responsive portfolio showcasing my frontend work, services, selected projects, and contact information.',
    outcome:
      'Gives visitors a clear overview of my work and an easy way to get in touch.',
    role: 'Built the responsive portfolio experience, including the project showcase and contact section.',
    stack: ['React', 'CSS3'],
    gradient: 'from-fuchsia-500 via-violet-700 to-slate-950',
    imageUrl: '/projects/portfolio-website.png',
    repoUrl: 'https://github.com/HIM-coder001/Portfolio-website',
    liveUrl: 'https://portfolio-website-w2h1.vercel.app/',
    isPrivate: false,
    comingSoon: false,
  },
  {
    id: 'movie-app',
    title: 'Movie Discovery App',
    category: 'Entertainment',
    type: 'Personal build',
    discipline: 'frontend',
    description:
      'A movie discovery platform powered by the TMDB API with trending charts, genre filtering, and search, all in a clean, fast UI.',
    outcome:
      'Delivers a smooth browsing experience where users can find trending films, filter by genre, and search any title without page reloads.',
    role: 'Full frontend build: API integration, search logic, genre filtering, trending section, and responsive UI',
    stack: ['React', 'Tailwind CSS', 'TMDB API'],
    gradient: 'from-violet-500 via-purple-700 to-slate-950',
    imageUrl: '/projects/movie-app.png',
    repoUrl: 'https://github.com/HIM-coder001',
    liveUrl: 'https://movie-application-xi-drab.vercel.app/',
    isPrivate: false,
    comingSoon: false,
  },
  {
    id: 'imagify',
    title: 'Imagify',
    category: 'AI image generation',
    type: 'Full-stack build',
    discipline: 'fullstack',
    description:
      'Generates images from text prompts with Clipdrop, saves results to a personal gallery, and supports credit purchases through M-Pesa.',
    outcome:
      'Brings image generation, a personal gallery, and M-Pesa credit purchases together in one responsive app.',
    role: 'Full-stack implementation across the client, authenticated image generation, gallery, credits, and M-Pesa STK push.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    gradient: 'from-fuchsia-500 via-violet-700 to-slate-950',
    imageUrl: '/projects/imagify.png',
    repoUrl: 'https://github.com/HIM-coder001/IMAGIFY',
    liveUrl: 'https://imgfy.vercel.app/',
    isPrivate: false,
    comingSoon: false,
  },
  {
    id: 'educity-university-website',
    title: 'Educity University Website',
    category: 'Education website',
    type: 'Personal build',
    discipline: 'frontend',
    description:
      'Responsive university website presenting academic programs, campus life, student testimonials, and an inquiry form.',
    outcome:
      'Brings essential university information together in an engaging, responsive experience for prospective students.',
    role: 'React frontend, responsive page sections, smooth navigation, and student inquiry form.',
    stack: ['React', 'CSS3'],
    gradient: 'from-amber-400 via-orange-600 to-slate-950',
    imageUrl: '/projects/educity.png',
    repoUrl: 'https://github.com/HIM-coder001/EDUCITY--University-Website',
    liveUrl: 'https://educity-university-website.vercel.app/',
    isPrivate: false,
    comingSoon: false,
  },
];

export const disciplineMeta = {
  frontend: { label: 'Frontend', accent: 'frontend' },
  backend: { label: 'Back-end', accent: 'backend' },
  fullstack: { label: 'Full-stack', accent: 'fullstack' },
};

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Back-end' },
  { id: 'fullstack', label: 'Full-stack' },
];
