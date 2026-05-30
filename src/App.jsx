import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import ProjectShowcase from './components/ProjectShowcase.jsx';
import ContactFooter from './components/ContactFooter.jsx';

export default function App() {
  return (
    <div className="min-h-svh bg-obsidian">
      <header className="sticky top-0 z-50 border-b border-border-slate/60 bg-obsidian/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#hero"
            className="font-mono text-sm font-semibold tracking-tight text-white"
          >
            <span className="text-emerald-accent">&lt;</span>
            JM
            <span className="text-emerald-accent"> /&gt;</span>
          </a>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="#about"
              className="text-sm text-slate-400 transition hover:text-emerald-accent"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-slate-400 transition hover:text-emerald-accent"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-400 transition hover:text-emerald-accent"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <ProjectShowcase />
      </main>

      <ContactFooter />
    </div>
  );
}
