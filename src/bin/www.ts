import {AddressInfo} from "net"
import http          from "http"
import minimist      from "minimist"
import {
  serverConfig
}                    from "src/bin/config"
import app           from "src/app"

/**
 * 端口和IP设置
 */
const {host, port} = serverConfig
const args = minimist(process.argv.slice(2))
app.set("port", port)

const server = http.createServer(app)

server.listen({
  port,
  host
})
server.on("error", onError)
server.on("listening", onListening)

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
  if (error.syscall !== "listen") {
    throw error
  }

  const bind = typeof port === "string"
    ? "Pipe " + port
    : "Port " + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges")
      process.exit(1)
      break
    case "EADDRINUSE":
      console.error(bind + " is already in use")
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address()
  const bind = typeof addr === "string"
    ? "pipe " + addr
    : "port " + (addr as AddressInfo).port
  console.log(`http://${host}:${port}`)
}