import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { initSentry } from '../lib/sentry';
import '../lib/i18n'; // Initialize i18n

export default function RootLayout() {
  useEffect(() => {
    // Initialize Sentry on app start
    initSentry();
  }, []);

  return (
    <ErrorBoundary>
      <Stack screenOptions={{ headerShown: false }} />
    </ErrorBoundary>
  );
}

