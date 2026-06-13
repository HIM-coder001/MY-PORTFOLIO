import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { siteConfig } from '../data/siteConfig.js';
import heroImage from '../assets/hero.jpg';


const EMAILJS_SERVICE_ID = 'service_t0avuq8';
const EMAILJS_TEMPLATE_ID = 'template_d4tft7v';
const EMAILJS_PUBLIC_KEY = 'AxNLKI8gaDZ6bhKyh';


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

// Spinner SVG shown during sending
function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

// Checkmark SVG shown after sent
function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ContactFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // sendStatus: 'idle' | 'sending' | 'sent' | 'error'
  const [sendStatus, setSendStatus] = useState('idle');
  const year = new Date().getFullYear();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setSendStatus('error');
      return;
    }

    setSendStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
          to_name: siteConfig.name,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setSendStatus('sent');
      setFormData({ name: '', email: '', message: '' });

      // Reset button back to idle after 4 seconds
      setTimeout(() => setSendStatus('idle'), 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setSendStatus('error');
    }
  };

  // Button label / icon based on status  
  const buttonContent = () => {
    switch (sendStatus) {
      case 'sending':
        return (
          <>
            <Spinner />
            Sending…
          </>
        );
      case 'sent':
        return (
          <>
            <CheckIcon />
            Sent!
          </>
        );
      default:
        return 'Send Message';
    }
  };

  const buttonDisabled = sendStatus === 'sending' || sendStatus === 'sent';

  const buttonClass = [
    'btn-primary w-fit flex items-center gap-2 cursor-pointer transition-all duration-200',
    sendStatus === 'sent' ? 'bg-green-600 hover:bg-green-600' : '',
    sendStatus === 'sending' ? 'opacity-75 cursor-not-allowed' : '',
  ]
    .filter(Boolean)
    .join(' ');

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

              <button
                type="submit"
                disabled={buttonDisabled}
                className={buttonClass}
              >
                {buttonContent()}
              </button>

              {sendStatus === 'error' && (
                <p className="text-sm text-red-400">
                  {!formData.name || !formData.email || !formData.message
                    ? 'Please fill out all fields before sending.'
                    : 'Something went wrong. Please try again or email me directly.'}
                </p>
              )}

              {sendStatus === 'sent' && (
                <p className="text-sm text-green-400">
                  Message received! I'll get back to you soon.
                </p>
              )}
            </form>

            <div className="mt-10">
              <p className="text-sm text-muted">Or reach out directly:</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {siteConfig.socialLinks.map((link) => (
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
