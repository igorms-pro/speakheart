import * as Sentry from '@sentry/react-native';
import * as SentryExpo from 'sentry-expo';

// Initialize Sentry
export const initSentry = () => {
  if (__DEV__) {
    // Disable Sentry in development or use a dev DSN
    console.log('Sentry disabled in development');
    return;
  }

  SentryExpo.init({
    dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
    enableInExpoDevelopment: false,
    debug: false,
    // Set tracesSampleRate to 1.0 to capture 100% of the transactions for performance monitoring.
    tracesSampleRate: 0.2, // 20% of transactions for production
    // Set profilesSampleRate to 1.0 to profile 100% of sampled transactions.
    profilesSampleRate: 0.1, // 10% of sampled transactions
    environment: process.env.EXPO_PUBLIC_APP_ENV || 'production',
    enableAutoSessionTracking: true,
    enableOutOfMemoryTracking: true,
    // Configure release
    dist: process.env.EXPO_PUBLIC_APP_VERSION || undefined,
  });
};

// Export Sentry for use in components
export { Sentry };

