import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const ToggleLightDark = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="hover:text-primary focus-visible:ring-primary dark:text-heading flex items-center text-gray-400 focus:outline-none focus-visible:ring-2"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 cursor-pointer" />
      ) : (
        <Sun className="h-5 w-5 cursor-pointer" />
      )}
    </button>
  );
};

export default ToggleLightDark;
