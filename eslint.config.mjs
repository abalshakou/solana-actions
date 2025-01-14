import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Правило для обработки неиспользуемых переменных в TypeScript
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          // Игнорировать переменные, начинающиеся с "err"
          argsIgnorePattern: "^err",
          varsIgnorePattern: "^err",
          caughtErrorsIgnorePattern: "^err",
        },
      ],
    },
  },
];

export default eslintConfig;