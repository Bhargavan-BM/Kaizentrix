import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";   // 👈 ADD THIS
import App from "./app/App";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <HashRouter>   {/* 👈 WRAP APP */}
    <App />
  </HashRouter>
);