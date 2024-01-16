import path, {dirname} from 'path'
import express         from 'express'
import indexRouter     from './routes/index'
import {fileURLToPath} from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
// view模板路径和后缀设置
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
//路由
app.use('/', indexRouter)

export default app