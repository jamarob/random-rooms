import styled from 'styled-components/macro'
import { useState } from 'react'

interface ShareableLinkProps {
  rooms: string[]
  groups: string[][]
}

export default function ShareableLinks({ rooms, groups }: ShareableLinkProps) {

  const [showMessage, setShowMessage] = useState(false)

  const roomString = toUriEncodedJson(rooms)
  const groupsString = toUriEncodedJson(groups)
  const query = `?rooms=${roomString}&groups=${groupsString}`
  const appUrl = 'share' + query
  const imageUrl = 'api/image' + query
  const imageUrlClipboard = window.location.host + '/' + imageUrl

  const activateSuccessMessage = () => {
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 2000)
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(imageUrlClipboard).then(() => activateSuccessMessage())
  }

  return (
    <Wrapper>
      <Link href={appUrl} target='_blank' rel='noreferrer noopener'>
        Shareable link
      </Link>
      <div>
        <Link href={imageUrl} target='_blank' rel='noreferrer noopener'>
          Link to image
        </Link>
        <Button
          onClick={handleCopyClick}
        >
          🔗
        </Button>
        {showMessage && <SuccessMessage>✅ copied</SuccessMessage>}
      </div>
    </Wrapper>
  )
}

function toUriEncodedJson(obj: any) {
  return encodeURI(JSON.stringify(obj))
}

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

const SuccessMessage = styled.p`
  display: inline;
  font-size: 0.75em;
  padding-left: 5px;
`

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
