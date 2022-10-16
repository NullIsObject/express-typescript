import { AddressInfo } from 'net';
import http from 'http';
import minimist from 'minimist';
import moduleAlias from 'module-alias';
import path from 'path';
// 路径别名配置
moduleAlias.addAliases({
  '@': path.join(__dirname, '../')
});
import app from '@/app';
/**
 * 端口和IP设置
 */
const args = minimist(process.argv.slice(2));
const host = args.host || '127.0.0.1';
const port = args.port || process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen({
  port,
  host
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + (addr as AddressInfo).port;
  console.log(`http://${host}:${port}`);
}