export interface Settings {
  seed: string
  groups: number
  students: string[]
  absentStudents: string[]
  rooms: string[]
}

export type Key = 'groups' | 'seed' | 'students' | 'absentStudents' | 'rooms'

export const initialSettings: Settings = {
  seed: '',
  groups: 1,
  students: [],
  absentStudents: [],
  rooms: [],
}
