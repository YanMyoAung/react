import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";


import ToDo from "./ToDo";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ToDo />
  </StrictMode>
);
