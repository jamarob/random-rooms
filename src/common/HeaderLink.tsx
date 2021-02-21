import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'

interface Props {
  title: string
  path: string
}

export default function HeaderLink({ title, path }: Props) {
  const isActive = path === useLocation().pathname

  return (
    <Link exact to={path} as={isActive ? Heading : undefined}>
      {title}
    </Link>
  )
}

const Heading = styled.h1`
  font-size: 1em;
  font-weight: 600;
  margin: 0;
  padding: 8px;
  border-bottom: 2px solid var(--color-orange);
`

const Link = styled(NavLink)`
  padding: 8px;
  text-decoration: none;
  color: inherit;
`
