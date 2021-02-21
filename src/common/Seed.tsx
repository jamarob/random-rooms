import styled from 'styled-components/macro'
import Button from './Button'

interface Props {
  seed: string
  onChange: (seed: string) => void
  rng: () => number
}

export default function Seed({ seed, onChange, rng }: Props) {
  const seedWithDate = () => onChange(new Date().toLocaleDateString())
  const seedRandomly = () => onChange(rng().toString().slice(2))

  return (
    <section>
      <h2>Seed</h2>
      <Input
        type="text"
        value={seed}
        onChange={({ target }) => onChange(target.value)}
      />
      <Button onClick={seedWithDate}>daily</Button>
      <Button onClick={seedRandomly}>random</Button>
    </section>
  )
}

const Input = styled.input`
  padding: 8px;
  font-size: 1em;
  font-family: inherit;
  border: 1px solid white;
  color: var(--color-blue);
`
