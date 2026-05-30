export const siteConfig = {
  name: 'Joseph Maina',
  title: 'Full-Stack Engineer',
  location: 'Eldoret, Kenya',
  availability: 'Open to full-time, internship, and contract roles',
  tagline: 'Eldoret, Kenya · Full-Stack Engineer',
  headline:
    'Building scalable web applications and data-driven systems with React, Node.js, and MySQL.',
  about: [
    'I am a full-stack developer based in Eldoret, Kenya, with hands-on experience shipping end-to-end products — from relational database design and REST APIs to responsive React frontends.',
    'My recent work includes a CBC-based school management platform and reusable e-commerce engines. I care about clear architecture, role-based access, and maintainable code that teams can extend.',
  ],
  focusAreas: [
    'Full-stack web applications',
    'REST APIs & Express',
    'Prisma / MySQL data modeling',
    'React & Tailwind UI',
  ],
  resumeUrl: '/resume.pdf',
  githubUrl: 'https://github.com/HIM-coder001',
  linkedinUrl: 'https://www.linkedin.com/in/joseph-maina-dev',
  email: 'josekamaemaina2005@gmail.com',
};

export function getMailtoUrl(email = siteConfig.email) {
  return `mailto:${email}`;
}

export function getGmailComposeUrl(email = siteConfig.email) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
}
