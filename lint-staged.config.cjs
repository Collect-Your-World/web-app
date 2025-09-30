// lint-staged.config.js
module.exports = {
  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|tsx|js|jsx)": (filenames) => [
    `pnpm lint`,
    `prettier --write ${filenames.join(" ")}`
  ],
  // Format other files
  "**/*.(json|css|md)": (filenames) => [
    `prettier --write ${filenames.join(" ")}`
  ]
};
