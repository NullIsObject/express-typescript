import rollupConfig from "./rollup.config.js"

export default {
  ...rollupConfig,
  external: [/node_modules/],
}