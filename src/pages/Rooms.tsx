import { ReactNode } from 'react'
import seedrandom from 'seedrandom'
import styled from 'styled-components/macro'
import { distribute, shuffle } from '../services/list'

interface RoomsProps {
  rooms: string[]
  students: string[]
  seed: string
  onSeedChange: (seed: string) => void
  groups: number
  onGroupsChange: (groups: number) => void
}

export default function Rooms({
  rooms,
  students,
  seed,
  onSeedChange,
  groups,
  onGroupsChange,
}: RoomsProps) {
  const rng = seedrandom(seed)
  const studentGroups = distribute(shuffle(seed, students), groups)

  return (
    <Main>
      <section>
        <h2>Seed</h2>
        <input
          type="text"
          value={seed}
          onChange={({ target }) => onSeedChange(target.value)}
        />
        <button onClick={() => onSeedChange(new Date().toLocaleDateString())}>
          daily
        </button>
        <button onClick={() => onSeedChange(rng().toString().slice(2))}>
          random
        </button>
      </section>
      <section>
        <h2>Number of Groups</h2>
        <button
          disabled={groups === 1}
          onClick={() => onGroupsChange(groups - 1)}
        >
          less
        </button>
        <span> {groups} </span>
        <button
          disabled={groups === rooms.length}
          onClick={() => onGroupsChange(groups + 1)}
        >
          more
        </button>
      </section>
      <section>
        <h2>Rooms</h2>
        <ul>
          {studentGroups.map((group, index) => {
            return (
              <li key={group.join()}>
                <b>{rooms[index]}</b>
                <br /> {group.reduce(join, [])}
              </li>
            )
          })}
        </ul>
      </section>
    </Main>
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
    index === array.length - 1 ? null : <And> &amp; </And>,
  ]
}

const And = styled.span`
  font-size: 1.2em;
  color: gray;
`

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;

  > :last-child {
    grid-column: span 2;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    padding: 0 16px;
    list-style: none;
    text-align: center;
  }

  li {
    border: 1px solid black;
    border-radius: 8px;
    padding: 16px;
    line-height: 1.2em;
  }
`
