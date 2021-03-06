import { useLocation } from 'react-router-dom'
import RoomsList from '../components/RoomsList'

export default function Share() {
  const { search } = useLocation()
  const query = new URLSearchParams(search)

  const roomsQuery = query.get('rooms')
  const groupsQuery = query.get('groups')

  if (!(roomsQuery && groupsQuery)) {
    return <p>malformed query</p>
  }

  let rooms: string[]
  let groups: string[][]

  try {
    rooms = parseUriEncodedJson(roomsQuery)
    groups = parseUriEncodedJson(groupsQuery)
  } catch (error) {
    return <p>malformed query</p>
  }

  return (
    <section>
      <h1>Rooms</h1>
      <RoomsList rooms={rooms} groups={groups} />
    </section>
  )
}

function parseUriEncodedJson(str: string) {
  return JSON.parse(decodeURI(str))
}
