const path = require('path');
const express = require('express');
const app = express();
// view模板路径和后缀设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//路由
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

export default app