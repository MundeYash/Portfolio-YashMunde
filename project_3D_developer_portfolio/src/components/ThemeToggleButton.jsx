// src/components/ThemeToggleButton.jsx
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleClick = () => {
    if (theme === "light") {
      console.log("Switching to light mode");

      toggleTheme();
    } else {
      console.log("Switching to dark mode");
      toggleTheme();
    }
  };

  return (
    <button
      onClick={toggleTheme && handleClick}
      className="p-2 px-4 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition"
    >
      {theme === "light" ? "☀️  Switch to Light Mode" : "🌙 Switch to Dark Mode"}
    </button>
  );
};

export default ThemeToggleButton;
