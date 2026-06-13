import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig.js';

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="m7 7 10 10" />
      <path d="M17 7v10H7" />
    </svg>
  );
}

function bootCalEmbed() {
  if (typeof window === 'undefined' || !siteConfig.calLink) return;

  if (!window.Cal) {
    window.Cal = function CalEmbed() {
      const cal = window.Cal;
      const args = arguments;

      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        const script = document.createElement('script');
        script.src = 'https://app.cal.com/embed/embed.js';
        script.async = true;
        document.head.appendChild(script);
        cal.loaded = true;
      }

      if (args[0] === 'init') {
        const namespace = args[1];
        const api = function namespaceApi() {
          api.q.push(arguments);
        };
        api.q = api.q || [];

        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api;
          cal.ns[namespace].q.push(args);
          cal.q.push(['initNamespace', namespace]);
          return;
        }
      }

      cal.q.push(args);
    };
  }

  window.Cal('init', siteConfig.calNamespace, { origin: 'https://cal.com' });
  window.Cal.ns[siteConfig.calNamespace]('ui', {
    layout: 'month_view',
    theme: 'dark',
  });
  window.Cal.ns[siteConfig.calNamespace]('preload', {
    calLink: siteConfig.calLink,
    type: 'modal',
  });
}

export default function ScheduleCallLink({ className = '' }) {
  useEffect(() => {
    bootCalEmbed();
  }, []);

  if (!siteConfig.calLink) return null;

  function openScheduleModal() {
    bootCalEmbed();
    window.Cal.ns[siteConfig.calNamespace]('modal', {
      calLink: siteConfig.calLink,
      calOrigin: 'https://cal.com',
      config: {
        layout: 'month_view',
        useSlotsViewOnSmallScreen: 'true',
        theme: 'dark',
      },
    });
  }

  return (
    <button
      type="button"
      onClick={openScheduleModal}
      data-cal-link={siteConfig.calLink}
      data-cal-namespace={siteConfig.calNamespace}
      data-cal-origin="https://cal.com"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
      className={`schedule-call-pill ${className}`}
    >
      <span>Schedule call</span>
      <span className="schedule-call-icon">
        <ArrowIcon />
      </span>
    </button>
  );
}
