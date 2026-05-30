import {
  siteConfig,
  getGmailComposeUrl,
  getMailtoUrl,
} from '../data/siteConfig.js';

const contactLinks = [
  {
    label: 'Email',
    href: getGmailComposeUrl(),
    external: true,
    primary: true,
    title: 'Compose in Gmail (opens in a new tab)',
  },
  {
    label: 'GitHub',
    href: siteConfig.githubUrl,
    external: true,
  },
  ...(siteConfig.linkedinUrl
    ? [
        {
          label: 'LinkedIn',
          href: siteConfig.linkedinUrl,
          external: true,
        },
      ]
    : []),
];

export default function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-border-slate px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-emerald-accent">
            Get in touch
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Let&apos;s build something scalable
          </h2>
          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            Open to full-stack roles, contract work, and ambitious product teams.
          </p>
          <p className="mt-1 font-mono text-xs text-slate-500">
            {siteConfig.location} ·{' '}
            <a
              href={getMailtoUrl()}
              className="text-slate-400 transition hover:text-emerald-accent"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>

        <div className="flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              title={link.title}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className={
                link.primary
                  ? 'inline-flex min-h-12 flex-1 items-center justify-center rounded-md border border-emerald-accent bg-emerald-accent px-8 text-sm font-semibold text-obsidian transition hover:border-emerald-dim hover:bg-emerald-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-accent sm:min-w-[140px] sm:flex-none'
                  : 'inline-flex min-h-12 flex-1 items-center justify-center rounded-md border border-border-slate px-8 text-sm font-semibold text-white transition hover:border-emerald-accent hover:text-emerald-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-accent sm:min-w-[140px] sm:flex-none'
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-slate-600">
          <a
            href={getMailtoUrl()}
            className="text-slate-500 transition hover:text-emerald-accent"
          >
            Open in mail app
          </a>
          {' · '}
          &copy; {year} {siteConfig.name}. Crafted with React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
