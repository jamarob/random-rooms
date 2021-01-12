import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function AppHeader() {
  return (
    <Nav>
      <NavLink exact to="/">
        Rooms
      </NavLink>
      <NavLink to="/presence">Presence</NavLink>
      <NavLink to="/course">Course</NavLink>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 16px;

  a {
    padding: 8px;
    border: 1px solid black;
    border-radius: 8px;
    text-decoration: none;

    &:visited {
      color: inherit;
    }

    &.active {
      color: white;
      background: black;
    }
  }
`
