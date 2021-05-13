import { useState } from 'react'
import styled from 'styled-components/macro'

interface Props {
  value: string
}

export default function CopyToClipboardButton({ value }: Props) {
  const [showCopySuccessMessage, setShowCopySuccessMessage] = useState(false)

  const activateSuccessMessage = () => {
    setShowCopySuccessMessage(true)
    setTimeout(() => setShowCopySuccessMessage(false), 2000)
  }

  const handleClick = () =>
    navigator.clipboard.writeText(value).then(() => activateSuccessMessage())

  return showCopySuccessMessage ? (
    <SuccessMessage>✅ copied</SuccessMessage>
  ) : (
    <button onClick={handleClick}>copy</button>
  )
}

const SuccessMessage = styled.span`
  font-size: 0.75em;
`
