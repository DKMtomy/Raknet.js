import { Raknet } from './Raknet'
import { RaknetEvent } from './constants'
import { BinaryStream } from 'binarystream.js'

const server = new Raknet(618, '1.20.32')

server.listen('127.0.0.1', 19132)

server.on(RaknetEvent.Listening, () => {
  console.log(`Listening on ${server.socket.address().address}:${server.socket.address().port}`)
})

server.on(RaknetEvent.ConnectionOpened, (connection) => {
  console.log(`New connection from ${connection.getAddress()}:${connection.getPort()}`)
})

server.on(RaknetEvent.ConnectionClosed, (connection) => {
  console.log(`Connection closed from ${connection.getAddress()}:${connection.getPort()}`)
})

server.on(RaknetEvent.GamePacket, (bin, size, connection) => {
  console.log(bin.byteLength === size)
  console.log('size:', size, 'bin:', bin)
  // const stream = new BinaryStream(packet.body)
  // stream.readUInt8() // Skip the game packet header
  // const bytes = stream.readUInt8() // Amount of bytes in the packet
  // const id = stream.readUInt8() // ID of the packet
  
  // // First packet of the minecraft login sequence
  // if (id === 0xC1) console.log('Got RequestNetworkSettings packet!', 'Size:', bytes)
})
