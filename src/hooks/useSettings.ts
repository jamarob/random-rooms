import { useEffect, useState } from 'react'
import { initialSettings, Key, Settings } from '../models/Settings'
import { toggle } from '../services/list'
import { loadFromLocal, saveToLocal } from '../services/settingsStorage'

export default function useSettings() {
  const [settings, setSettings] = useState<Settings>(
    loadFromLocal() ?? initialSettings
  )

  useEffect(() => {
    saveToLocal(settings)
  }, [settings])

  function update<T>(key: Key) {
    return (value: T) => setSettings({ ...settings, [key]: value })
  }

  const presentStudents = settings.students.filter(
    (student) => !settings.absentStudents.includes(student)
  )

  const togglePresence = (student: string) => {
    setSettings({
      ...settings,
      absentStudents: toggle(settings.absentStudents, student),
    })
  }

  return { settings, update, togglePresence }
}
