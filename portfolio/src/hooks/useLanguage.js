import { use } from "react";
import { LanguageContext } from "../i18n/LanguageContext.js";

export default function useLanguage() {
  return use(LanguageContext);
}
