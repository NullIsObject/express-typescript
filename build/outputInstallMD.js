import fs              from "fs"
import {fileURLToPath} from "url"
import {dirname}       from "path"
import config          from "./config.js"

const __dirname = getDirname()

function main() {
  fs.existsSync(config.output.dir) && copyFile(`${__dirname}/install.md`, `${config.output.dir}/install.md`)
}

/**
 * @param source {string}
 * @param target {string}
 */
function copyFile(source, target) {
  const data = fs.readFileSync(source, "utf8")
  fs.writeFileSync(target, data, "utf8")
}

function getDirname() {
  const __filename = fileURLToPath(import.meta.url)
  return dirname(__filename)
}

main()