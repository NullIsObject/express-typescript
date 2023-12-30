import fs     from "fs"
import config from "./config.js"

function main() {
  fs.existsSync(config.output.dir) && deleteDir(config.output.dir)
}

/**
 * @param dirPath {string}
 */
function deleteDir(dirPath) {
  const fileNameList = fs.readdirSync(dirPath)
  fileNameList.forEach(fileName => {
    const filePath = `${dirPath}/${fileName}`
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) deleteDir(filePath)
    else fs.unlinkSync(filePath)
  })
  fs.rmdirSync(dirPath)
}

main()