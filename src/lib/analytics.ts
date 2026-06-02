const GTAG_ID = 'G-HH8635R9QF';

type GtagCommand = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagCommand;
  }
}

const getGtag = (): GtagCommand | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  return typeof window.gtag === 'function' ? window.gtag : null;
};

export const trackPageView = (path?: string): void => {
  const gtag = getGtag();
  if (!gtag) return;

  gtag('event', 'page_view', {
    send_to: GTAG_ID,
    page_path: path ?? window.location.pathname,
    page_title: typeof document !== 'undefined' ? document.title : undefined,
  });
};

export const trackLinkClick = (options: { label: string; destination: string }): void => {
  const gtag = getGtag();
  if (!gtag) return;

  gtag('event', 'select_content', {
    send_to: GTAG_ID,
    content_type: 'country_link',
    item_id: options.label,
    destination: options.destination,
  });
};

export {}; // Ensures this file is treated as a module.
