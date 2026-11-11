import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import ProjectShowcase from '../components/ProjectShowcase.jsx';
import Services from '../components/Services.jsx';
import Process from '../components/Process.jsx';
import Skills from '../components/Skills.jsx';
import ContactFooter from '../components/ContactFooter.jsx';

export default function HomePage() {
  return (
    <>
      <main className="w-full max-w-[1200px] px-5 pt-24">
        <Hero />
        <About />
        <ProjectShowcase />
        <Services />
        <Process />
        <Skills />
      </main>
      <ContactFooter />
    </>
  );
}