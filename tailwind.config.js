/* eslint-disable @typescript-eslint/no-var-requires */
const kebabcase = require('lodash.kebabcase');
const variables = require('./src/variables')

const colors = Object.fromEntries(Object
  .values(variables.color)
  .flatMap(Object.values)
  .map(({ path, value }) => [
    kebabcase(path.join('-')), value
  ]));

module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors
    },
  },
  plugins: [],
}
