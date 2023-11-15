import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const ThemeContext2 = createContext(null);
const ThemeContexts = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const themeValue = { theme, toggleTheme };
  return (
    <div>
      <ThemeContext2.Provider value={themeValue}>
        {children}
      </ThemeContext2.Provider>
    </div>
  );
};

export default ThemeContexts;
