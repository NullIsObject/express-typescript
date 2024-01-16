import fs from "fs"

/**
 * @param filePath {string}
 * @return {Promise<Object>}
 */
export function readJSONFileSync(filePath) {
  const jsonStr = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(jsonStr)
}

/**
 * @param filePath {string}
 * @return {Promise<Object>}
 */
export function readJSONFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, jsonStr) => {
      if (err) reject(`读取文件出错：${err}`)
      try {
        const jsonObj = JSON.parse(jsonStr)
        resolve(jsonObj)
      } catch (e) {
        reject(`解析JSON错误：${e}`)
      }
    })
  })
}

export default readJSONFile