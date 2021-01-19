import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function AppHeader() {
  return (
    <Nav>
      <NavLink exact to="/">
        Home
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
    text-decoration: none;
    color: white;

    &:visited {
      color: white;
    }

    &.active {
      color: white;
      font-weight: 600;
      border-bottom: 2px solid var(--color-orange);
    }
  }
`
