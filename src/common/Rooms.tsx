import { ReactNode } from 'react'
import styled from 'styled-components/macro'

interface RoomsProps {
  rooms: string[]
  groups: string[][]
}

export default function Rooms({ rooms, groups }: RoomsProps) {
  return (
    <ul>
      {groups.map((group, index) => {
        return (
          <li key={rooms[index]}>
            <RoomName>{rooms[index]}</RoomName>
            <br /> {group.reduce(join, [])}
          </li>
        )
      })}
    </ul>
  )
}

function join(
  nodes: ReactNode[],
  name: string,
  index: number,
  array: string[]
): ReactNode[] {
  return [
    ...nodes,
    name,
    index === array.length - 1 ? null : <And key={name}> &amp; </And>,
  ]
}

const RoomName = styled.span`
  color: var(--color-orange);
`

const And = styled.span`
  font-size: 0.8em;
  margin: 0 8px;
  color: var(--color-orange);
`
