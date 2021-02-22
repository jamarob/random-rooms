import styled from 'styled-components/macro'

interface ShareableLinkProps {
  rooms: string[]
  groups: string[][]
}

export default function ShareableLinks({ rooms, groups }: ShareableLinkProps) {
  const roomString = toUriEncodedJson(rooms)
  const groupsString = toUriEncodedJson(groups)

  const query = `?rooms=${roomString}&groups=${groupsString}`

  const appUrl = 'share' + query

  const imageUrl = 'api/image' + query

  return (
    <Wrapper>
      <Link href={appUrl} target="_blank" rel="noreferrer noopener">
        Shareable link
      </Link>
      <Link href={imageUrl} target="_blank" rel="noreferrer noopener">
        Link to image
      </Link>
    </Wrapper>
  )
}

function toUriEncodedJson(obj: any) {
  return encodeURI(JSON.stringify(obj))
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const Link = styled.a`
  color: var(--color-orange);

  &:visited {
    color: var(--color-orange);
  }
`
