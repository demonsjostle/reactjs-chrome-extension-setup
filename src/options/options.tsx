import React from "react";
import { createRoot } from "react-dom/client";
const test = <div>options</div>;

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);
