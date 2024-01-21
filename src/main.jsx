import { createRoot } from "react-dom/client";
import App from "./app";
import { mockData } from "./mockData";
import "./styles/reset.css";
import "./styles/variables.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <div >
    <App {...mockData} />
  </div>
);
