import styled from 'styled-components/macro'
import HeaderLink from './HeaderLink'

export default function AppHeader() {
  return (
    <Nav>
      <HeaderLink title="Home" path="/" />
      <HeaderLink title="Presence" path="/presence" />
      <HeaderLink title="Course" path="/course" />
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 16px;
`
