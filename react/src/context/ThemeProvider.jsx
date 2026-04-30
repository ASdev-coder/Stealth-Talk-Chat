import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setLightMode = () => setTheme("light");
  const setDarkMode = () => setTheme("dark");

  return (
    <ThemeContext.Provider value={{ theme, setLightMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
