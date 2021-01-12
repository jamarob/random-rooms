import Nav from './common/Nav'
import useSettings from './hooks/useSettings'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Rooms from './pages/Rooms'
import Presence from './pages/Presence'
import Course from './pages/Course'
import styled from 'styled-components'

export default function App() {
  const { settings, update, togglePresence } = useSettings()

  return (
    <Router>
      <PageLayout>
        <Nav />
        <Switch>
          <Route exact path="/">
            {(settings.rooms.length === 0 ||
              settings.students.length === 0) && <Redirect to="/course" />}
            <Rooms
              students={settings.students.filter(
                (student) => !settings.absentStudents.includes(student)
              )}
              rooms={settings.rooms}
              seed={settings.seed}
              groups={settings.groups}
              onSeedChange={update('seed')}
              onGroupsChange={update('groups')}
            />
          </Route>
          <Route exact path="/presence">
            {(settings.rooms.length === 0 ||
              settings.students.length === 0) && <Redirect to="/course" />}
            <Presence
              students={settings.students}
              absentStudents={settings.absentStudents}
              togglePresence={togglePresence}
            />
          </Route>
          <Route exact path="/course">
            <Course
              students={settings.students}
              onStudentsChange={update('students')}
              rooms={settings.rooms}
              onRoomsChange={update('rooms')}
            />
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  )
}

const PageLayout = styled.div`
  text-align: center;
`
