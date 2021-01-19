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
  const { settings, update, togglePresence } = useSettings()

  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route exact path="/">
            {(settings.rooms.length === 0 ||
              settings.students.length === 0) && <Redirect to="/course" />}
            <Nav />
            <Home
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
            <Nav />
            <Presence
              students={settings.students}
              absentStudents={settings.absentStudents}
              togglePresence={togglePresence}
            />
          </Route>
          <Route exact path="/course">
            <Nav />
            <Course
              students={settings.students}
              onStudentsChange={update('students')}
              rooms={settings.rooms}
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
