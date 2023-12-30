# 项目介绍
## 这是一个使用express+ts的后端基本环境配置
## 注意：
### 路径别名须同时在tsconfig.json配置和在src/config.ts 通过"moduleAliasConfig"配置
### "moduleAliasConfig"配置项为"module-alias"模块配置，在src/bin/www.ts引入并配置
### "module-alias"模块配置参见："https://www.npmjs.com/package/module-alias"
## 下载模板后需修改配置：
### package.json
+ name
+ version
# 项目运行
## 开发环境
	npm i
	npm i -g nodemon
	npm run dev
## 打包
	npm run dist
#
# 目录结构
	└─root
			│  .gitignore
			│  package.json
			│  tsconfig.json
			│
      ├─build //存放打包脚本
			├─dist //打包后的输出目录
			└─src	//存放源码
					│  app.ts
					│  config.ts	//项目统一配置
					│
					├─bin
					│      www.ts	//项目启动页
					│
					├─controller
					├─model
					├─public	//视图层资源
					├─routes	//存放路由
					│      index.ts
					│
					└─views	// 视图层
									index.ejs
