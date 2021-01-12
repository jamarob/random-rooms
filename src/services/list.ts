import seedrandom from 'seedrandom'

export function shuffle<T>(seed: string, list: T[]) {
  const rng = seedrandom(seed)
  return [...list].sort(() => rng() - 0.5)
}

export function distribute<T>(list: T[], numberOfGroups: number) {
  const groups: T[][] = [...new Array(numberOfGroups)].map(() => [])

  list.forEach((item, index) => groups[index % numberOfGroups].push(item))

  return groups
}

export function toggle<T>(list: T[], valueToToggle: T) {
  return list.includes(valueToToggle)
    ? list.filter((value) => value !== valueToToggle)
    : [...list, valueToToggle]
}
