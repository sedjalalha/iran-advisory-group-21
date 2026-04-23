type EventPayload = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: EventPayload) => void;
    plausible?: (eventName: string, options?: { props?: EventPayload }) => void;
    va?: { track: (eventName: string, payload?: EventPayload) => void };
  }
}

export const trackEvent = (eventName: string, payload: EventPayload = {}) => {
  if (typeof window === "undefined") return;

  window.gtag?.("event", eventName, payload);
  window.plausible?.(eventName, { props: payload });
  window.va?.track(eventName, payload);

  window.dispatchEvent(
    new CustomEvent("arad-analytics-event", { detail: { eventName, payload } }),
  );

  if (import.meta.env.DEV) {
    // Local visibility helps validate tracking during implementation.
    console.debug("[analytics]", eventName, payload);
  }
};
