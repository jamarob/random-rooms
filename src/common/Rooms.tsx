import RoomsList from './RoomsList'
import ShareableLink from './ShareableLink'

interface Props {
  rooms: string[]
  studentGroups: string[][]
}

export default function Rooms({ rooms, studentGroups }: Props) {
  return (
    <section>
      <h2>Rooms</h2>
      <ShareableLink rooms={rooms} groups={studentGroups} />
      <RoomsList rooms={rooms} groups={studentGroups} />
    </section>
  )
}
