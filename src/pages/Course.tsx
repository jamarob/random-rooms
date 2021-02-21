import styled from 'styled-components'
import ListInput from '../common/ListInput'

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
  return (
    <Main>
      <section>
        <h2>Students</h2>
        <ListInput items={students} onChange={onStudentsChange} />
      </section>

      <section>
        <h2>Rooms</h2>
        <ListInput items={rooms} onChange={onRoomsChange} />
      </section>
    </Main>
  )
}

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
`
