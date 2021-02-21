import styled from 'styled-components'
import StudentList from '../components/StudentList'

interface Props {
  students: string[]
  absentStudents: string[]
  togglePresence: (student: string) => void
}

export default function Presence({
  students,
  absentStudents,
  togglePresence,
}: Props) {
  const presentStudents = students.filter(
    (student) => !absentStudents.includes(student)
  )

  return (
    <Main>
      <section>
        <h2>Present</h2>
        <StudentList
          students={presentStudents}
          onStudentClick={togglePresence}
        />
      </section>
      <section>
        <h2>Absent</h2>
        <StudentList
          absentList
          students={absentStudents}
          onStudentClick={togglePresence}
        />
      </section>
    </Main>
  )
}

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
