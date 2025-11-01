import { PostHogProvider } from 'posthog-react-native';

export const initPostHog = () => {
  const apiKey = process.env.EXPO_PUBLIC_POSTHOG_API_KEY;
  const host = process.env.EXPO_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

  if (!apiKey) {
    if (__DEV__) {
      console.warn('PostHog API key not set. Analytics disabled.');
    }
    return null;
  }

  return {
    apiKey,
    host,
    // Additional options
    enableSessionReplay: process.env.EXPO_PUBLIC_POSTHOG_REPLAY === 'true',
    autocapture: true,
    captureScreenViews: true,
    captureDeepLinks: true,
  };
};

export { PostHogProvider };

