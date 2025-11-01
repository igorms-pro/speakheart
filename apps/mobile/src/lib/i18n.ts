import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

// Import translation files
import enTranslations from '../locales/en.json';
import frTranslations from '../locales/fr.json';
import esTranslations from '../locales/es.json';
import ptTranslations from '../locales/pt.json';
import ptBRTranslations from '../locales/pt-BR.json';
import jaTranslations from '../locales/ja.json';
import zhTranslations from '../locales/zh.json';
import deTranslations from '../locales/de.json';
import itTranslations from '../locales/it.json';
import ruTranslations from '../locales/ru.json';

// Get device locale
const deviceLocale = Localization.getLocales()[0]?.languageCode || 'en';

// Configure i18next
i18n
  .use(initReactI18next)
  .init({
    // Available languages
    supportedLngs: ['en', 'fr', 'es', 'pt', 'pt-BR', 'ja', 'zh', 'de', 'it', 'ru'],

    // Default language (device locale or fallback to 'en')
    lng: deviceLocale,
    fallbackLng: 'en',

    // Debug mode (disable in production)
    debug: __DEV__,

    // Interpolation options
    interpolation: {
      escapeValue: false, // React Native already escapes values
    },

    // Translation resources
    resources: {
      en: {
        translation: enTranslations,
      },
      fr: {
        translation: frTranslations,
      },
      es: {
        translation: esTranslations,
      },
      pt: {
        translation: ptTranslations,
      },
      'pt-BR': {
        translation: ptBRTranslations,
      },
      ja: {
        translation: jaTranslations,
      },
      zh: {
        translation: zhTranslations,
      },
      de: {
        translation: deTranslations,
      },
      it: {
        translation: itTranslations,
      },
      ru: {
        translation: ruTranslations,
      },
    },

    // React integration
    react: {
      useSuspense: false, // Disable Suspense for better error handling
    },
  });

export default i18n;

