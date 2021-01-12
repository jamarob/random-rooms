export interface Settings {
  course: string
  seed: string
  groups: number
  students: string[]
  absentStudents: string[]
  rooms: string[]
}

export type Key =
  | 'course'
  | 'groups'
  | 'seed'
  | 'students'
  | 'absentStudents'
  | 'rooms'

export const initialSettings: Settings = {
  course: '',
  seed: '',
  groups: 1,
  students: [],
  absentStudents: [],
  rooms: [],
}
