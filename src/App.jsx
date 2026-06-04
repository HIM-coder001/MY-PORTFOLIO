import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProjectShowcase from './components/ProjectShowcase.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Skills from './components/Skills.jsx';
import ContactFooter from './components/ContactFooter.jsx';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-svh flex-col items-center bg-bg text-white">
      <Navbar />

      <main className="w-full max-w-[1200px] px-5 pt-24">
        <Hero />
        <ProjectShowcase />
        <Services />
        <Process />
        <Skills />
      </main>

      <ContactFooter />
    </div>
  );
}
