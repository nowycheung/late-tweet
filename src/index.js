import express from 'express'
import http from 'http'
import SocketIO from 'socket.io'
import path from 'path'
import { socketConnectionHandler } from './websocket'
import { port, delayInSeconds, staticFolder } from './config'
import compression from 'compression'

const app = express()
const server = http.Server(app)
const io = new SocketIO(server)

app.use(compression())

app.use(express.static(path.join(__dirname, staticFolder)))

io.on('connection', (socket) => socketConnectionHandler(socket, io, delayInSeconds))

server.listen(port, () => console.log(`[INFO] Listening on port ${port}`))
