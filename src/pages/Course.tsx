import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

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
      <section>
        <h2>Students</h2>
        <textarea
          rows={20}
          name="students"
          value={input.students}
          onChange={handleListChange}
        ></textarea>
        <br />
        <button
          disabled={!studentsDirty}
          onClick={() => setInput({ ...input, students: join(students) })}
        >
          cancel
        </button>
        <button
          disabled={!studentsDirty}
          onClick={() => onStudentsChange(split(input.students))}
        >
          save
        </button>
      </section>

      <section>
        <h2>Rooms</h2>
        <textarea
          rows={20}
          name="rooms"
          value={input.rooms}
          onChange={handleListChange}
        ></textarea>
        <br />
        <button
          disabled={!roomsDirty}
          onClick={() => setInput({ ...input, rooms: join(rooms) })}
        >
          cancel
        </button>
        <button
          disabled={!roomsDirty}
          onClick={() => onRoomsChange(split(input.rooms))}
        >
          save
        </button>
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

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  textarea {
    padding: 8px;
    line-height: 1.1em;
  }
`
