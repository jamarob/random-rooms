import styled from 'styled-components/macro'
import CopyToClipboardButton from './CopyToClipboardButton'

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
  const appUrlClipboard = window.location + appUrl
  const imageUrlClipboard = window.location + imageUrl

  return (
    <Wrapper>
      <div>
        <Link href={appUrl} target="_blank" rel="noreferrer noopener">
          Shareable link
        </Link>
        <CopyToClipboardButton value={appUrlClipboard} />
      </div>
      <div>
        <Link href={imageUrl} target="_blank" rel="noreferrer noopener">
          Link to image
        </Link>
        <CopyToClipboardButton value={imageUrlClipboard} />
      </div>
    </Wrapper>
  )
}

function toUriEncodedJson(obj: any) {
  return encodeURI(JSON.stringify(obj))
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Link = styled.a`
  color: var(--color-orange);
  margin-right: 12px;

  &:visited {
    color: var(--color-orange);
  }
`
