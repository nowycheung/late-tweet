import { scheduler } from './scheduler'

export const socketConnectionHandler = (socket, io, delayInSeconds) => {
  socket.on('tweet', (msg) => {
    const { lat, lon } = socket.handshake.query
    scheduler(delayInSeconds, () => tweet(msg, {lat, lon}, io))
  })
}

export const tweet = (msg, {lat, lon}, io) => io.emit('tweet', `${lat}:${lon}  ${msg}`)
