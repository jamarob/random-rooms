import Button from './Button'

interface Props {
  groups: number
  onChange: (groups: number) => void
  maxGroups: number
}

export default function Groups({ groups, maxGroups, onChange }: Props) {
  return (
    <section>
      <h2>Number of Groups</h2>
      <Button disabled={groups === 1} onClick={() => onChange(groups - 1)}>
        less
      </Button>
      <span className="groups"> {groups} </span>
      <Button
        disabled={groups >= maxGroups}
        onClick={() => onChange(groups + 1)}
      >
        more
      </Button>
    </section>
  )
}
