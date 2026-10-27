import { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext.js";
import ar from "./ar/ui.json";
import en from "./en/ui.json";

const strings = { en, ar };

function readSavedLanguage() {
  try {
    return localStorage.getItem("lang") === "ar" ? "ar" : "en";
  } catch {
    return "en";
  }
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readSavedLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
  }, [lang]);

  const value = {
    lang,
    t: strings[lang],
    pick: (text) => text[lang],
    toggle: () => setLang(lang === "en" ? "ar" : "en"),
  };

  return <LanguageContext value={value}>{children}</LanguageContext>;
}
