import fs   from "fs"
import path from "path"

/**
 * @param dirPath {string}
 */
export function deleteDir(dirPath) {
  clearDir(dirPath)
  fs.rmdirSync(dirPath)
}

/**
 * @param dirPath {string}
 */
export function clearDir(dirPath) {
  if (!fs.existsSync(dirPath)) return
  const fileNameList = fs.readdirSync(dirPath)
  fileNameList.forEach(fileName => {
    const filePath = `${dirPath}/${fileName}`
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) deleteDir(filePath)
    else fs.unlinkSync(filePath)
  })
}

/**
 * @param src {string}
 * @param dest {string}
 */
export function copy(src, dest) {
  if (!fs.existsSync(src)) throw `源目录 ${src} 不存在`
  fs.statSync(src).isDirectory() ? copyDir(src, dest) : copyFile(src, dest)
}

/**
 * @param src {string}
 * @param dest {string}
 */
export function copyDir(src, dest) {
  if (!fs.existsSync(src)) throw `源目录 ${src} 不存在`

  if (!fs.existsSync(dest)) fs.mkdirSync(dest)

  const files = fs.readdirSync(src)
  for (const file of files) {
    const srcPath = path.join(src, file)
    const destPath = path.join(dest, file)
    const stat = fs.statSync(srcPath)
    if (stat.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

/**
 * @param src {string}
 * @param dest {string}
 */
export function copyFile(src, dest) {
  if (!fs.existsSync(src)) throw `源目录 ${src} 不存在`
  fs.copyFileSync(src, dest)
}
