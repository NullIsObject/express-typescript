import clear       from "rollup-plugin-clear"
import typescript  from "rollup-plugin-typescript2"
import nodeResolve from "@rollup/plugin-node-resolve"
import commonjs    from "rollup-plugin-commonjs"
import json        from "@rollup/plugin-json"
import copy        from "rollup-plugin-copy"
import config      from "./build/config.js"

export default {
  input: "src/bin/www.ts",
  output: {
    file: `${config.output.dir}/${config.output.file}`,
    format: config.type
  },
  plugins: [
    clear({
      targets: [config.output.dir]
    }),
    typescript(),
    nodeResolve({
      preferBuiltins: true,
    }),
    commonjs({
      include: "node_modules/**",
    }),
    json(),
    copy({
      targets: [
        {
          src: `./src/views/*`,
          dest: `${config.output.dir}/views`,
        },
        {
          src: `./build/install.md`,
          dest: `${config.output.dir}`,
        }
      ],
      hook: "writeBundle",
      verbose: true
    })
  ]
}
