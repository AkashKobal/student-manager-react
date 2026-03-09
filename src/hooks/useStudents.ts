import { useEffect, useState } from 'react'
import { Student } from '../types/Student'
import { loadStudents, saveStudents } from '../services/studentStorage'
import { v4 as uuid } from 'uuid'

export const useStudents = () => {
    const [students, setStudents] = useState<Student[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setStudents(loadStudents())
    }, [])

    const simulate = async () => {
        setLoading(true)
        await new Promise((r) => setTimeout(r, 600))
        setLoading(false)
    }

    const addStudent = async (data: Omit<Student, 'id'>) => {
        await simulate()

        const newStudent: Student = {
            ...data,
            id: uuid()
        }

        const updated = [...students, newStudent]

        setStudents(updated)
        saveStudents(updated)
    }

    const updateStudent = async (student: Student) => {
        await simulate()

        const updated = students.map((s) =>
            s.id === student.id ? student : s
        )

        setStudents(updated)
        saveStudents(updated)
    }

    const deleteStudent = async (id: string) => {
        await simulate()

        const updated = students.filter((s) => s.id !== id)

        setStudents(updated)
        saveStudents(updated)
    }

    return {
        students,
        loading,
        addStudent,
        updateStudent,
        deleteStudent
    }
}