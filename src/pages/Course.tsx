import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import Button from '../common/Button'

interface SetupProps {
  students: string[]
  rooms: string[]
  onStudentsChange: (students: string[]) => void
  onRoomsChange: (rooms: string[]) => void
}

export default function Setup({
  students,
  onStudentsChange,
  rooms,
  onRoomsChange,
}: SetupProps) {
  const [input, setInput] = useState({
    students: join(students),
    rooms: join(rooms),
  })

  const studentsDirty = input.students !== join(students)
  const roomsDirty = input.rooms !== join(rooms)

  return (
    <Main>
      <section className="input-group">
        <h2>Students</h2>
        <Textarea
          rows={20}
          name="students"
          value={input.students}
          onChange={handleListChange}
        ></Textarea>
        <Button
          disabled={!studentsDirty}
          onClick={() => setInput({ ...input, students: join(students) })}
        >
          cancel
        </Button>
        <Button
          disabled={!studentsDirty}
          onClick={() => onStudentsChange(split(input.students))}
        >
          save
        </Button>
      </section>

      <section className="input-group">
        <h2>Rooms</h2>
        <Textarea
          rows={20}
          name="rooms"
          value={input.rooms}
          onChange={handleListChange}
        ></Textarea>
        <Button
          disabled={!roomsDirty}
          onClick={() => setInput({ ...input, rooms: join(rooms) })}
        >
          cancel
        </Button>
        <Button
          disabled={!roomsDirty}
          onClick={() => onRoomsChange(split(input.rooms))}
        >
          save
        </Button>
      </section>
    </Main>
  )

  function handleListChange({ target }: ChangeEvent<HTMLTextAreaElement>) {
    setInput({ ...input, [target.name]: target.value })
  }
}

function split(csv: string) {
  return csv
    .split('\n')
    .map((val) => val.trim())
    .filter((val) => val !== '')
}

function join(csv: string[]) {
  return csv.join('\n')
}

const Textarea = styled.textarea`
  font-size: 1em;
  font-family: inherit;
  padding: 1px;
  border: 1px solid white;
  line-height: 1.1em;
  color: var(--color-blue);
`

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;

  .input-group {
    display: grid;
    grid-template-columns: repeat(2, min-content);

    h2,
    ${Textarea} {
      grid-column: span 2;
    }
  }
`
