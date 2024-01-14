import typescript  from "@rollup/plugin-typescript"
import nodeResolve from "@rollup/plugin-node-resolve"
import commonjs    from "@rollup/plugin-commonjs"
import json        from "@rollup/plugin-json"
import {
  clearDir
}                  from "./build/fileCRUD.js"
import config      from "./build/config.js"

export default {
  input: "src/bin/www.ts",
  output: {
    file: `${config.output.dir}/${config.output.file}`,
    format: config.type
  },
  plugins: [
    {
      name: "fileCRUD",
      load() {
        clearDir(config.output.dir)
      },
    },
    typescript(),
    nodeResolve({
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
  ]
}
