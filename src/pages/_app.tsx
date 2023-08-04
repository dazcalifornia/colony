// _app.js
import { useEffect } from "react";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTranslation from "../../locales/en.json";
import thTranslation from "../../locales/th.json";
import jpTranslation from "../../locales/jp.json";

const resources = {
  en: { translation: enTranslation },
  th: { translation: thTranslation },
  jp: { translation: jpTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  interpolation: {
    escapeValue: false,
  },
});

function MyApp({ Component, pageProps }: any) {
  const { t } = useTranslation();

  useEffect(() => {
    // Preload other languages
    i18n.loadLanguages("th");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
