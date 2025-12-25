declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, string | number | boolean>
    ) => void;
    dataLayer: unknown[];
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};

// Pre-defined events for consistency
export const analytics = {
  ctaClick: (location: string, action: string) =>
    trackEvent("cta_click", { location, action }),

  formSubmit: (formName: string) =>
    trackEvent("form_submit", { form_name: formName }),

  portfolioView: (projectName: string) =>
    trackEvent("portfolio_view", { project: projectName }),

  sectionView: (sectionName: string) =>
    trackEvent("section_view", { section: sectionName }),

  externalLinkClick: (url: string) =>
    trackEvent("external_link_click", { url }),
};