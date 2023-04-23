import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { APP_ROOT_NODE_ID } from "src/shared/config";

const rootNode = document.getElementById(APP_ROOT_NODE_ID) as HTMLElement;

ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
