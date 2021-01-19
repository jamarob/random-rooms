import seedrandom from 'seedrandom'
import styled from 'styled-components/macro'
import Button from '../common/Button'
import Rooms from '../common/Rooms'
import ShareableLink from '../common/ShareableLink'
import { distribute, shuffle } from '../services/list'

interface HomeProps {
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
}: HomeProps) {
  const rng = seedrandom(seed)
  const studentGroups = distribute(shuffle(seed, students), groups)

  return (
    <Main>
      <section>
        <h2>Seed</h2>
        <Input
          type="text"
          value={seed}
          onChange={({ target }) => onSeedChange(target.value)}
        />
        <Button onClick={() => onSeedChange(new Date().toLocaleDateString())}>
          daily
        </Button>
        <Button onClick={() => onSeedChange(rng().toString().slice(2))}>
          random
        </Button>
      </section>
      <section>
        <h2>Number of Groups</h2>
        <Button
          disabled={groups === 1}
          onClick={() => onGroupsChange(groups - 1)}
        >
          less
        </Button>
        <span className="groups"> {groups} </span>
        <Button
          disabled={groups === rooms.length}
          onClick={() => onGroupsChange(groups + 1)}
        >
          more
        </Button>
      </section>
      <section>
        <h2>Rooms</h2>
        <ShareableLink rooms={rooms} groups={studentGroups} />
        <Rooms rooms={rooms} groups={studentGroups} />
      </section>
    </Main>
  )
}

const Input = styled.input`
  padding: 8px;
  font-size: 1em;
  font-family: inherit;
  border: 1px solid white;
  color: var(--color-blue);
`
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
