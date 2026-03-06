import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  // 1. Base JavaScript recommended rules
  js.configs.recommended,

  // 2. React recommended rules
  pluginReact.configs.flat.recommended,

  // 3. React JSX Runtime (This specifically removes the 'React must be in scope' errors)
  pluginReact.configs.flat['jsx-runtime'],

  // 4. Your specific project configurations and settings
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect", // Automatically detects your React version to clear the warning
      },
    },
  },
];