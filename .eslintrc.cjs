/** @type {import("eslint").Linter.Config} */

const config = {
    env: { browser: true, es2020: true, node: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "prettier",
        "plugin:prettier/recommended", // must be the last extension
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    plugins: ["react-refresh", "prettier"],
    rules: {
        "react-refresh/only-export-components": "warn",
        "prettier/prettier": ["warn", { singleQuote: false }],
    },
    settings: {
        "import/resolver": {
            typescript: {},
        },
    },
};

module.exports = config;
