import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // StrictMode does not render any visible UI.
  //It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    {/* Mount the App component to the root div defined in public/index.html */}
    <App />
  </React.StrictMode>
);
