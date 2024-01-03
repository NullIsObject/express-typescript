import typescript  from "rollup-plugin-typescript2"
import nodeResolve from "@rollup/plugin-node-resolve"
import commonjs    from "rollup-plugin-commonjs"
import json        from "@rollup/plugin-json"
import config      from "./build/config.js"

export default {
  input: "src/bin/www.ts",
  output: {
    file: `${config.output.dir}/${config.output.file}`,
    format: "es"
  },
  plugins: [
    typescript(),
    nodeResolve({
      preferBuiltins: true,
    }),
    commonjs({
      include: "node_modules/**",
    }),
    json(),
  ]
}