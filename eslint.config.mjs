import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // DECISIONS.md WD-121: correctness-first rule policy, explicitly named on top
  // of eslint-config-next's baseline (which already bundles React, React Hooks,
  // jsx-a11y, and @typescript-eslint per Next.js's own preset).
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "no-debugger": "error",
      "prefer-const": "error",
      "no-var": "error",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
