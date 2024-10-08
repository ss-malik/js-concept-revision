import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

let personData = [
  { name: "s", branch: "mech" },
  { name: "sa", branch: "mech" },
  { name: "sal", branch: "mech" },
  { name: "salm", branch: "mech" },
  { name: "salma", branch: "mech" },
  { name: "salman", branch: "mech" },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App personData={personData} />
  </StrictMode>
);
