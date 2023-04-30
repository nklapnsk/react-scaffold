/// <reference types="vitest" />

import million from "million/compiler";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [million.vite({ mode: "react" }), react()],
    test: {
        globals: true,
        environment: "happy-dom",
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, "./src"),
        },
    },
});
