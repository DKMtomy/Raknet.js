import { Packet, Serialize } from '../../BasePacket'
import { OnlinePacket } from '../OnlinePacket'
import { Long } from 'binarystream.js'

@Packet(0x00)
class ConnectedPing extends OnlinePacket {
  @Serialize(Long) public time!: bigint
}

export {
  ConnectedPing,
}