import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescriptConfig from "eslint-config-next/typescript";

const eslintConfig = [
  ...coreWebVitals,
  ...typescriptConfig,
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts", "public/**", "image-search/**"],
  },
  {
    rules: {
      // Client state that can only be read after mount (cookies, localStorage,
      // IntersectionObserver, speech synthesis support) is set in an effect on purpose,
      // so server and client render the same markup on the first pass.
      "react-hooks/set-state-in-effect": "off",
      // Open Sans is loaded with a stylesheet link rather than next/font so the build
      // stays reproducible without network access at build time.
      "@next/next/no-page-custom-font": "off",
    },
  },
];

export default eslintConfig;
