import { ChangeEvent, useState } from 'react'

interface Props {
  items: string[]
  onChange: (items: string[]) => void
}

export default function useList({ items, onChange }: Props) {
  const [value, setValue] = useState(join(items))

  const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(target.value)

  const handleSave = () => onChange(split(value))
  const handleReset = () => setValue(join(items))

  const isDirty = value !== join(items)

  return { value, handleChange, handleSave, handleReset, isDirty }
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
