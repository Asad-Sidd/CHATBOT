import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

console.log(
  "%c✨ Developed by Asad-Sidd ✨\n%cDo not distribute or claim as your own.",
  "color: #f97316; font-size: 20px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);",
  "color: #a78bfa; font-size: 14px;"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);