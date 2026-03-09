import { Student } from '../types/Student'
import initialStudents from '../data/students.json'

const STORAGE_KEY = 'students_data'

export const loadStudents = (): Student[] => {
  const data = localStorage.getItem(STORAGE_KEY)
  if (data) return JSON.parse(data)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialStudents))
  return initialStudents
}

export const saveStudents = (students: Student[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students))
}