import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { ThemeProvider } from "./ThemeContext";
import { ToastProvider } from "./ToastContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ToastProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ToastProvider>
  </ThemeProvider>,
);
