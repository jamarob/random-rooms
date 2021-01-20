import { useLocation } from 'react-router-dom'
import Rooms from '../common/Rooms'

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
      <h2>Rooms</h2>
      <Rooms rooms={rooms} groups={groups} />
    </section>
  )
}

function parseUriEncodedJson(str: string) {
  return JSON.parse(decodeURI(str))
}
