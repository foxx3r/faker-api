const app = require("./middlewares/app")
const http = require("http")
require("dotenv").config()

const server = http.createServer(app)
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1"
const PORT = process.env.PORT || 8080

server.listen(PORT, HOSTNAME, () => {
  console.log(`Servidor rodando na url http://${HOSTNAME}:${PORT}`)
})

