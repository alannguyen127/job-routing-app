import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthProvider from "./auth/AuthProvider";
import ThemeProvider from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AuthProvider>
);
