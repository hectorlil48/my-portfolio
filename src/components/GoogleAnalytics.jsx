// src/components/GoogleAnalytics.jsx
import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Load Google Tag script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-2Y2442B5QR";
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag after script loads
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-2Y2442B5QR");
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
