import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import i18n from "./i18n";

// Set initial document language and direction based on i18n
document.documentElement.lang = i18n.language || "ar";
document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";

// Update direction when language changes
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
});

createRoot(document.getElementById("root")!).render(<App />);
