import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const LOCALES = ["fr-FR"];

const Auth_fr_FR = require("./fr-Fr/Auth.json");

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "fr-FR",
  fallbackLng: "fr-FR",
  supportedLngs: LOCALES,
  resources: {
    "fr-FR": {
      Auth: Auth_fr_FR,
    },
  },
  debug: false,
  load: "currentOnly",
  defaultNS: "Common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
