import styled from 'styled-components/macro'

interface ShareableLinkProps {
  rooms: string[]
  groups: string[][]
}

export default function ShareableLink({ rooms, groups }: ShareableLinkProps) {
  const roomString = toUriEncodedJson(rooms)
  const groupsString = toUriEncodedJson(groups)

  const url = `share?rooms=${roomString}&groups=${groupsString}`

  return (
    <Link href={url} target="_blank" rel="noreferrer noopener">
      Shareable link
    </Link>
  )
}

function toUriEncodedJson(obj: any) {
  return encodeURI(JSON.stringify(obj))
}

const Link = styled.a`
  color: var(--color-orange);

  &:visited {
    color: var(--color-orange);
  }
`
