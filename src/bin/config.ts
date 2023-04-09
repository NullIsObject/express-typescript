import path from 'path';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
// 路径别名配置
export const moduleAliasConfig = {
  '@': path.join(__dirname, '../')
}
// 数据库配置
export const mysqlConfig = {
  host: 'localhost',
  port: 3306,
  user: '',
  password: '',
  database: ''
}
//server配置
export const serverConfig = (() => {
  const host = args.host || '127.0.0.1';
  const port = args.port || process.env.PORT || '3000';
  return {
    host,
    port
  }
})()