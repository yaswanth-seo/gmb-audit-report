import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Optional: overflow debugger (activate with ?debug=overflow)
if (window.location.search.includes("debug=overflow")) {
  import("./utils/overflow-debug").then((m) => {
    setTimeout(() => m.highlightOverflow(), 150);
    window.addEventListener("resize", () => m.highlightOverflow());
  });
}

