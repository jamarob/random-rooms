import styled from 'styled-components/macro'
import { useState } from 'react'

interface ShareableLinkProps {
  rooms: string[]
  groups: string[][]
}

export default function ShareableLinks({ rooms, groups }: ShareableLinkProps) {

  const [showCopySuccessMessage, setShowCopySuccessMessage] = useState(false)

  const roomString = toUriEncodedJson(rooms)
  const groupsString = toUriEncodedJson(groups)
  const query = `?rooms=${roomString}&groups=${groupsString}`
  const appUrl = 'share' + query
  const imageUrl = 'api/image' + query
  const imageUrlClipboard = window.location + imageUrl

  const activateSuccessMessage = () => {
    setShowCopySuccessMessage(true)
    setTimeout(() => {
      setShowCopySuccessMessage(false)
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
          copy
        </Button>
        {showCopySuccessMessage && <SuccessMessage>✅ copied</SuccessMessage>}
      </div>
    </Wrapper>
  )
}

function toUriEncodedJson(obj: any) {
  return encodeURI(JSON.stringify(obj))
}

const Button = styled.button`
  margin-left: 12px;
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
