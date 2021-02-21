import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

interface Props {
  items: string[]
  onChange: (items: string[]) => void
}

export default function ListInput({ items, onChange }: Props) {
  const [input, setInput] = useState(join(items))

  const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) =>
    setInput(target.value)

  const handleSave = () => onChange(split(input))
  const handleReset = () => setInput(join(items))

  const isDirty = input !== join(items)

  return (
    <Wrapper>
      <Textarea rows={20} value={input} onChange={handleChange} />
      <Button disabled={!isDirty} onClick={handleReset}>
        cancel
      </Button>
      <Button disabled={!isDirty} onClick={handleSave}>
        save
      </Button>
    </Wrapper>
  )
}

function split(linesString: string) {
  return linesString
    .split('\n')
    .map((val) => val.trim())
    .filter((val) => val !== '')
}

function join(lines: string[]) {
  return lines.join('\n')
}

const Textarea = styled.textarea`
  font-size: 1em;
  font-family: inherit;
  padding: 1px;
  border: 1px solid white;
  line-height: 1.1em;
  color: var(--color-blue);
`

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, min-content);

  ${Textarea} {
    grid-column: span 2;
  }
`
