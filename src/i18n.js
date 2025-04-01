import { createI18n } from "vue-i18n";

const messages = {
    en: {
        home: "Home",
        rules: "10 Rules",
        cheatSheets: "Cheat Sheets",
        editor: "Editor",
        language: "Choose your language",
        welcome: "Welcome!",
        siteDescription: "On this page you will find information about Regex",
    },
    de: {
        home: "Startseite",
        rules: "10 Regeln",
        cheatSheets: "Cheat Sheets",
        editor: "Editor",
        language: "Wählen Sie Ihre Sprache",
        welcome: "Willkommen!",
        siteDescription: "Auf dieser Seite findest du Infos über Regex",
    },
};
const i18n = createI18n({
    locale: "en", // default english
    messages
});

export default i18n;
