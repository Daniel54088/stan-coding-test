import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import ErrorBoundary from "./components/error-boundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
