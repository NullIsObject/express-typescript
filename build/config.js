import {readJSONFileSync} from "./readJSONFile.js"

const packageFilePath = `${process.cwd()}/package.json`
const packageConfig = readJSONFileSync(packageFilePath)
export default {
  output: {
    dir: `${process.cwd()}/dist`,
    file: "www.js"
  },
  scripts: {
    start: "node www.js",
  },
  type: packageConfig.type || "module"
}