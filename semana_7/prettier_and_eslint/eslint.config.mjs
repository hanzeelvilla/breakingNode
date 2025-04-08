import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs}"] },
    {
        files: ["**/*.{js,mjs,cjs}"],
        languageOptions: { globals: globals.browser },
    },
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: { js },
        extends: ["js/recommended"],
    },
    eslintPluginPrettier,

    {
        rules: {
            "no-var": "error",
        },
    },
]);
