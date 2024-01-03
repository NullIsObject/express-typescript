import * as fs from "fs"
import config  from "./config.js"

function main() {
  if(!fs.existsSync(config.output.dir)) return
  const filePath = `${process.cwd()}/package.json`
  getPackageConfig(filePath)
    .then(packageConfig => {
      packageConfig = changeConfig(packageConfig)
      outPackageConfig(packageConfig)
      console.log("已生成package.json")
    })
}

/**
 * @param filePath {string}
 * @return {Promise<Object>}
 */
function getPackageConfig(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) reject(`读取文件出错：${err}`)
      try {
        const packageConfig = JSON.parse(data)
        resolve(packageConfig)
      } catch (e) {
        reject(`解析JSON错误：${e}`)
      }
    })
  })
}

/**
 * 修改package.json配置
 * @param packageConfig {Object}
 */
function changeConfig(packageConfig) {
  packageConfig = deepCloneObj(packageConfig)
  packageConfig.scripts = config.scripts
  delete packageConfig.devDependencies
  return packageConfig
}

/**
 * 输出package.json文件
 * @param packageConfig {Object}
 */
function outPackageConfig(packageConfig) {
  fs.writeFile(`${config.output.dir}/package.json`, JSON.stringify(packageConfig, null, 2), err => {
    if (err) throw err
  })
}

function deepCloneObj(obj) {
  return JSON.parse(JSON.stringify(obj))
}

main()