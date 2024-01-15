import typescript  from "@rollup/plugin-typescript"
import nodeResolve from "@rollup/plugin-node-resolve"
import commonjs    from "@rollup/plugin-commonjs"
import json        from "@rollup/plugin-json"
import {
  clearDir, copy
}                  from "./build/fileCRUD.js"
import config      from "./build/config.js"

export default {
  input: "src/bin/www.ts",
  output: {
    file: `${config.output.dir}/${config.output.file}`,
    format: config.type,
    sourcemap: true,
  },
  external: [/node_modules/],
  plugins: [
    {
      name: "fileCRUD",
      load() {
        clearDir(config.output.dir)
      },
      writeBundle() {
        copy("./src/views", `${config.output.dir}/views`)
      }
    },
    typescript(),
    nodeResolve({
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
  ]
}
