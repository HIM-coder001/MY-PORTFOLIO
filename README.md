# Joseph Maina — Portfolio

Personal portfolio site built with React, Vite, and Tailwind CSS v4.

Live at: [josephmaina.dev](https://my-portfolio-delta-brown-80.vercel.app/) <!-- update with your actual domain when live -->

---

## Sections

- **Hero** — intro, availability status, resume link, and social links
- **About** — background, focus areas, and graduation timeline
- **Projects** — vertical card layout with screenshots, live demo links, stack chips, outcome and role details
- **Services** — accordion listing of what I offer
- **Process** — 4-step workflow from discovery to launch
- **Skills** — animated marquee of tools and technologies
- **Contact** — email form via EmailJS and direct social links

## Tech stack

- React 19
- Vite 8
- Tailwind CSS v4
- Framer Motion (3D tilt, scroll animations)
- Lenis (smooth scroll)
- EmailJS (contact form)

## Project structure

```
src/
  components/     # one file per section
  data/
    siteConfig.js # all personal info, copy, and config
    projects.js   # project entries
    techStack.js  # skills marquee data
  assets/         # hero image
public/
  projects/       # project screenshots
  resume.pdf
```

## Customization

All personal content lives in two files:

- `src/data/siteConfig.js` — name, title, bio, services, process steps, social links
- `src/data/projects.js` — project entries (title, description, stack, image, links)

To add a project, drop a screenshot in `public/projects/` and add an entry to `projects.js`.

## Getting started

```bash
npm install
npm run dev
```

```bash
npm run build   # production build to /dist
```

## Deployment

Connect the repo to Vercel or Netlify. Set the build command to `npm run build` and publish directory to `dist`. No environment variables required unless you swap out the EmailJS keys in `ContactFooter.jsx`.
