import seedrandom from 'seedrandom'
import styled from 'styled-components/macro'
import Groups from '../common/Groups'
import Rooms from '../common/Rooms'
import Seed from '../common/Seed'
import { distribute, shuffle } from '../services/list'

interface Props {
  rooms: string[]
  students: string[]
  seed: string
  onSeedChange: (seed: string) => void
  groups: number
  onGroupsChange: (groups: number) => void
}

export default function Home({
  rooms,
  students,
  seed,
  onSeedChange,
  groups,
  onGroupsChange,
}: Props) {
  const rng = seedrandom(seed)
  const studentGroups = distribute(shuffle(seed, students), groups)

  return (
    <Main>
      <Seed seed={seed} onChange={onSeedChange} rng={rng} />
      <Groups
        groups={groups}
        maxGroups={rooms.length}
        onChange={onGroupsChange}
      />
      <Rooms rooms={rooms} studentGroups={studentGroups} />
    </Main>
  )
}

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;

  .groups {
    padding: 0 16px;
    color: var(--color-orange);
  }

  > :last-child {
    grid-column: span 2;
  }
`
