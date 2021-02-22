import RoomsList from './RoomsList'
import ShareableLinks from './ShareableLinks'

interface Props {
  rooms: string[]
  studentGroups: string[][]
}

export default function Rooms({ rooms, studentGroups }: Props) {
  return (
    <section>
      <h2>Rooms</h2>
      <ShareableLinks rooms={rooms} groups={studentGroups} />
      <RoomsList rooms={rooms} groups={studentGroups} />
    </section>
  )
}
