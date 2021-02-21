import styled from 'styled-components'
import useList from '../hooks/useList'
import Button from './Button'

interface Props {
  items: string[]
  onChange: (items: string[]) => void
}

export default function ListInput(props: Props) {
  const { value, handleChange, handleSave, handleReset, isDirty } = useList(
    props
  )

  return (
    <Wrapper>
      <Textarea rows={20} value={value} onChange={handleChange} />
      <Button disabled={!isDirty} onClick={handleReset}>
        cancel
      </Button>
      <Button disabled={!isDirty} onClick={handleSave}>
        save
      </Button>
    </Wrapper>
  )
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
