import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { APP_ROOT_NODE_ID } from "src/shared/config";
import { App } from "./app";

const rootNode = document.getElementById(APP_ROOT_NODE_ID) as HTMLElement;

createRoot(rootNode).render(
    <StrictMode>
        <App />
    </StrictMode>
);
