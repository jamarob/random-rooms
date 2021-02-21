import { ReactNode } from 'react'
import styled from 'styled-components/macro'

interface Props {
  rooms: string[]
  groups: string[][]
}

export default function RoomsList({ rooms, groups }: Props) {
  return (
    <List>
      {groups.map((group, index) => {
        return (
          <li key={rooms[index]}>
            <RoomName>{rooms[index]}</RoomName>
            <br /> {group.reduce(join, [])}
          </li>
        )
      })}
    </List>
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

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  padding: 0 16px;
  list-style: none;
  text-align: center;

  > li {
    b {
      text-transform: uppercase;
    }

    border: 1px solid white;
    border-radius: 8px;
    padding: 16px;
    line-height: 1.2em;
  }
`

const RoomName = styled.span`
  color: var(--color-orange);
`

const And = styled.span`
  font-size: 0.8em;
  margin: 0 8px;
  color: var(--color-orange);
`
