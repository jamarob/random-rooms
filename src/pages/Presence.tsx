import styled from 'styled-components'

interface StudentsProps {
  students: string[]
  absentStudents: string[]
  togglePresence: (student: string) => void
}

export default function Students({
  students,
  absentStudents,
  togglePresence,
}: StudentsProps) {
  const presentStudents = students.filter(
    (student) => !absentStudents.includes(student)
  )

  return (
    <Main>
      <section>
        <h2>Present</h2>
        <ul>
          {presentStudents.map((student) => {
            return (
              <li
                className="present"
                key={student}
                onClick={() => togglePresence(student)}
              >
                {student}
              </li>
            )
          })}
        </ul>
      </section>
      <section>
        <h2>Absent</h2>
        <ul className="absent">
          {absentStudents.map((student) => {
            return (
              <li
                className="absent"
                key={student}
                onClick={() => togglePresence(student)}
              >
                {student}
              </li>
            )
          })}
        </ul>
      </section>
    </Main>
  )
}

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 8px;
  }

  li:hover {
    font-size: 1.1em;
  }

  li.present:hover {
    ::before,
    ::after {
      content: ' 🤒 ';
    }
  }

  li.absent:hover {
    ::before,
    ::after {
      content: ' 😌 ';
    }
  }
`
