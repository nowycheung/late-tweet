import { scheduler } from './scheduler'

export const socketConnectionHandler = (socket, io, delayInSeconds) => {
  socket.on('tweet', (msg) => {
    const { lat, lon } = socket.handshake.query
    scheduler(delayInSeconds, () => tweet(msg, {lat, lon}, io))
  })
}

export const tweet = (msg, {lat, lon}, io) => {
  const location = `${lat}:${lon}`

  io.emit('tweet', `${location}  ${msg}`)
}
