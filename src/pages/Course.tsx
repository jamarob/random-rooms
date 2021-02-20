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

  const handleListChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) =>
    setInput({ ...input, [target.name]: target.value })

  const resetStudents = () => setInput({ ...input, students: join(students) })
  const saveStudents = () => onStudentsChange(split(input.students))

  const resetRooms = () => setInput({ ...input, rooms: join(rooms) })
  const saveRooms = () => onRoomsChange(split(input.rooms))

  return (
    <Main>
      <section className="input-group">
        <h2>Students</h2>
        <Textarea
          rows={20}
          name="students"
          value={input.students}
          onChange={handleListChange}
        />
        <Button disabled={!studentsDirty} onClick={resetStudents}>
          cancel
        </Button>
        <Button disabled={!studentsDirty} onClick={saveStudents}>
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
        />
        <Button disabled={!roomsDirty} onClick={resetRooms}>
          cancel
        </Button>
        <Button disabled={!roomsDirty} onClick={saveRooms}>
          save
        </Button>
      </section>
    </Main>
  )
}

function split(linesString: string) {
  return linesString
    .split('\n')
    .map((val) => val.trim())
    .filter((val) => val !== '')
}

function join(lines: string[]) {
  return lines.join('\n')
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
