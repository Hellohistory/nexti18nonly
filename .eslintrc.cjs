/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }]
  },
  ignorePatterns: ["*.config.*", "*.d.ts"]
};