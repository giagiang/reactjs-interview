import { createContext, useState } from "react";

const ThemeContext = createContext()

function ThemeProvider({children}) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log("toggle fire")
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const value = {
    theme,
    toggleTheme,
  }
  console.log("value from theme context:", value)
  return (
    <div id="theme-provider">
    <ThemeContext.Provider value={value}>
    {children}
    </ThemeContext.Provider></div>
  );
}
export { ThemeContext, ThemeProvider };
