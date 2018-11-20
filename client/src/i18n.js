/* eslint-disable camelcase */

import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'

// Import locales
import locale_EN from './locales/en'
import locale_DE from './locales/de'

// Setup internationalization
i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    resources: {
      en: { translation: locale_EN },
      de: { translation: locale_DE }
    }
  })

export default i18n
