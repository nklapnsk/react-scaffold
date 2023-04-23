/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
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
