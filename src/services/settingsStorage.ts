import { Settings } from '../models/Settings'

const ROOM_RANDOMIZER = 'ROOM_RANDOMIZER'

export function loadFromLocal(): Settings | null {
  const json = localStorage.getItem(ROOM_RANDOMIZER)
  try {
    return json && JSON.parse(json)
  } catch (error) {
    console.error(error)
    return null
  }
}

export function saveToLocal(settings: Settings) {
  localStorage.setItem(ROOM_RANDOMIZER, JSON.stringify(settings))
}
