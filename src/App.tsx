import Nav from './common/Nav'
import useSettings from './hooks/useSettings'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Home from './pages/Home'
import Presence from './pages/Presence'
import Course from './pages/Course'
import styled from 'styled-components'
import Share from './pages/Share'

export default function App() {
  const {
    settings: { students, absentStudents, rooms, groups, seed },
    update,
    togglePresence,
  } = useSettings()

  const hasRoomsAndStudents = rooms.length !== 0 && students.length !== 0

  const presentStudents = students.filter(
    (student) => !absentStudents.includes(student)
  )

  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route exact path="/">
            {!hasRoomsAndStudents && <Redirect to="/course" />}
            <Nav />
            <Home
              students={presentStudents}
              rooms={rooms}
              seed={seed}
              groups={groups}
              onSeedChange={update('seed')}
              onGroupsChange={update('groups')}
            />
          </Route>
          <Route exact path="/presence">
            {!hasRoomsAndStudents && <Redirect to="/course" />}
            <Nav />
            <Presence
              students={students}
              absentStudents={absentStudents}
              togglePresence={togglePresence}
            />
          </Route>
          <Route exact path="/course">
            <Nav />
            <Course
              students={students}
              onStudentsChange={update('students')}
              rooms={rooms}
              onRoomsChange={update('rooms')}
            />
          </Route>
          <Route path="/share">
            <Share />
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  )
}

const PageLayout = styled.div`
  text-align: center;
`
