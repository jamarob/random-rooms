import { ChangeEvent, useState } from 'react'

interface Props {
  items: string[]
  onChange: (items: string[]) => void
}

export default function useList({ items, onChange }: Props) {
  const [value, setValue] = useState(join(items))

  const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(target.value)

  const handleSave = () => {
    const splitted = split(value)
    onChange(splitted)
    setValue(join(splitted))
  }
  const handleReset = () => setValue(join(items))

  const hasUnsavedChanges = value !== join(items)

  return { value, handleChange, handleSave, handleReset, hasUnsavedChanges }
}

function split(linesString: string) {
  return linesString
    .split(/[\n,]/)
    .map((lines) => lines.trim())
    .filter((val) => val !== '')
}

function join(lines: string[]) {
  return lines.join('\n')
}
