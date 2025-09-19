/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-tailwindcss'],
  rules: {
    'import-notation': 'string'
    // "at-rule-no-unknown": [true, { ignoreAtRules: ["theme", "utility", "layer", "custom-variant"] }],
  }
};
