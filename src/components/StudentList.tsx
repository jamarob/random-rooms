import styled from 'styled-components/macro'

interface Props {
  students: string[]
  onStudentClick: (student: string) => void
  absentList?: boolean
}

export default function StudentList({
  students,
  onStudentClick,
  absentList,
}: Props) {
  const className = absentList ? 'absent' : 'present'
  return (
    <List>
      {students.map((student) => (
        <li
          key={student}
          onClick={() => onStudentClick(student)}
          className={className}
        >
          {student}
        </li>
      ))}
    </List>
  )
}

const List = styled.ul`
  list-style: none;
  padding: 0;

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
