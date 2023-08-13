import React  from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { ThemeProvider } from "./ThemeContext";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  // document.getElementById("root")
);
