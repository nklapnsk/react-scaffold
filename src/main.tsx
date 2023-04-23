import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { ROOT_NODE_ID } from "./config.ts";

const rootNode = document.getElementById(ROOT_NODE_ID) as HTMLElement;

ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
