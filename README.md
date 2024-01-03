# 项目介绍
## 这是一个使用express+ts的后端基本环境配置
## 注意：
````
rollup的"@rollup/plugin-node-resolve"插件似乎默认支持"src"路径别名。
同时，路径别名可以直接在tsconfig.json配置
````
## 下载模板后需修改配置：
### package.json
+ name
+ version
# 项目运行
## 开发环境
````shell
npm i
npm i -g nodemon
npm run dev:build
npm run dev:start
````
## 打包
````shell
npm run dist
````
#
# 目录结构
````
  └─root
    │
    ├─build //存放打包脚本
    ├─dist //打包后的输出目录
    └─src	//存放源码
      │  app.ts
      │  config.ts	//项目统一配置
      │
      ├─bin
      │  www.ts	//项目启动页
      │
      ├─controller
      ├─model
      ├─public	//视图层资源
      ├─routes	//存放路由
      │  index.ts
      │
      └─views	// 视图层
      │  index.ejs
````