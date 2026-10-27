import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { projectHash } from "./hooks/useHashModal.js";
import LanguageProvider from "./i18n/LanguageProvider.jsx";
import "./styles/tokens.css";
import "./styles/global.css";

// Old per-project URLs (e.g. /morseCode) now open that project's popup on the home page.
const legacyPaths = {
  "/morsecode": "morse-code",
  "/digitaldoodle": "digital-doodle",
  "/blurdocs": "live-coding-blur",
  "/slenderman": "slenderman",
  "/fifirobot": "fifi-robot",
};
const legacyId = legacyPaths[window.location.pathname.toLowerCase()];
if (legacyId) {
  window.history.replaceState(null, "", `/${projectHash(legacyId)}`);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
