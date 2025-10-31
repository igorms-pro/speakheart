import { usePostHog as usePostHogHook } from 'posthog-react-native';
import { useCallback } from 'react';

/**
 * Custom hook for PostHog analytics
 * Usage:
 *   const posthog = usePostHog();
 *   posthog.capture('event_name', { prop: 'value' });
 */
export const usePostHog = () => {
  const posthog = usePostHogHook();

  const captureEvent = useCallback(
    (eventName: string, properties?: Record<string, any>) => {
      if (!posthog) return;
      posthog.capture(eventName, properties);
    },
    [posthog],
  );

  const identify = useCallback(
    (userId: string, traits?: Record<string, any>) => {
      if (!posthog) return;
      posthog.identify(userId, traits);
    },
    [posthog],
  );

  const reset = useCallback(() => {
    if (!posthog) return;
    posthog.reset();
  }, [posthog]);

  return {
    posthog,
    captureEvent,
    identify,
    reset,
    isReady: !!posthog,
  };
};

