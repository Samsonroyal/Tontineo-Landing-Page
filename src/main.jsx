import { createRoot } from "react-dom/client";
// import App from "./app";
import { mockData } from "./mockData";
import "./styles/reset.css";
import "./styles/variables.css";
import TontinePageLayout from "./components/TontinePageLayout";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <div >
    <TontinePageLayout {...mockData} />
  </div>
);
