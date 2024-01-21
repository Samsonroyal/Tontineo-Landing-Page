import { createRoot } from "react-dom/client";
import TontinePageLayout from "./components/TontinePageLayout";
import { mockData } from "./mockData";
import "./styles/reset.css";
import "./styles/variables.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "1440px", height: "5051px" }} data-ignore="used only for top most containter width">
    <TontinePageLayout {...mockData} />
  </div>
);
