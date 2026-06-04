import { useState } from 'react';
import { siteConfig, getGmailComposeUrl } from '../data/siteConfig.js';
import heroImage from '../assets/hero.jpg';

function SocialLinkIcon({ icon }) {
  const cls = 'h-5 w-5';

  switch (icon) {
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.112.82-.262.82-.582 0-.288-.01-1.048-.015-2.058-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.806 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404 11.48 11.48 0 0 1 3 .404c2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.624-5.476 5.92.43.37.815 1.104.815 2.227 0 1.61-.015 2.91-.015 3.31 0 .322.218.698.825.58C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12Z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M20.447 20.452H17.3v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.45-2.136 2.947v5.659H9.2V9.5h3.038v1.5h.043c.423-.8 1.455-1.645 2.997-1.645 3.205 0 3.8 2.107 3.8 4.845v6.698Z" />
          <path d="M5.337 8.003a1.76 1.76 0 1 1 .001-3.522 1.76 1.76 0 0 1-.001 3.522Z" />
          <path d="M6.8 20.452H3.874V9.5H6.8v10.952Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 7.5v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9" />
          <path d="m3 7.5 9 5.5 9-5.5" />
        </svg>
      );
  }
}

export default function ContactFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const year = new Date().getFullYear();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus('Please fill out all fields before sending.');
      return;
    }

    const subject = `Portfolio inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Opening your mail client...');
  };

  return (
    <footer id="contact" className="section-pad border-t border-border-muted">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">{siteConfig.contactIntro}</p>

            <form onSubmit={handleSubmit} className="mt-10 grid gap-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                className="w-full rounded-2xl border border-border bg-bg-card px-5 py-4 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                className="w-full rounded-2xl border border-border bg-bg-card px-5 py-4 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <textarea
                rows={5}
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                className="w-full rounded-2xl border border-border bg-bg-card px-5 py-4 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button type="submit" className="btn-primary w-fit">
                Send Message
              </button>
              {status && <p className="text-sm text-primary">{status}</p>}
            </form>

            <div className="mt-10">
              <p className="text-sm text-muted">Or reach out directly:</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={getGmailComposeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline gap-2"
                >
                  <SocialLinkIcon icon="email" />
                  Email
                </a>
                {siteConfig.socialLinks
                  .filter((l) => l.icon !== 'email')
                  .map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline gap-2"
                    >
                      <SocialLinkIcon icon={link.icon} />
                      {link.label}
                    </a>
                  ))}
              </div>
            </div>
          </div>

          <aside className="flex flex-col items-center rounded-2xl border border-border bg-bg-card p-8 text-center lg:sticky lg:top-28 lg:self-start">
            <img
              src={heroImage}
              alt={siteConfig.name}
              className="h-28 w-28 rounded-full object-cover ring-2 ring-primary/30"
            />
            <p className="mt-6 text-xl font-bold text-white">{siteConfig.name}</p>
            <p className="text-muted">{siteConfig.title}</p>
            <p className="mt-2 text-sm text-muted">{siteConfig.location}</p>
          </aside>
        </div>

        <p className="mt-16 border-t border-border-muted pt-8 text-center text-xs text-muted">
          &copy; {year} {siteConfig.name}. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
