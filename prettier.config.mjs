/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  importOrder: ["^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
}

export default config
