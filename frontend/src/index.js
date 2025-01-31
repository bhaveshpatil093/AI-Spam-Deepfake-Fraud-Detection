import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Import the main App component
import "./styles/index.css"; // Import global styles (optional)

// Render the App component into the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
