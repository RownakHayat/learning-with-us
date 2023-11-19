import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const ThemeContext = createContext(null);
const ThemeContexts = ({ children }) => {
  const [isDrakMode, setIsDrakMode] = useState("light");

  const toggleDrakMode = () => {
    setIsDrakMode(prevDrakMode => !prevDrakMode );
  };

  
  return (
    <div>
      <ThemeContext.Provider >
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeContexts;
