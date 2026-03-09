import { useState } from 'react'
import { useStudents } from '../hooks/useStudents'
import StudentTable from '../components/StudentTable/StudentTable'
import StudentForm from '../components/StudentForm/StudentForm'
import ConfirmDialog from '../components/ConfirmDialog/ConfirmDialog'
import Loader from '../components/Loader/Loader'
import SearchBar from '../components/SearchBar/SearchBar'
import { exportStudentsToExcel } from '../utils/excelExport'
import { Student } from '../types/Student'

const Dashboard = () => {
    const { students, loading, addStudent, updateStudent, deleteStudent } =
        useStudents()

    const [editing, setEditing] = useState<Student | null>(null)
    const [deleteId, setDeleteId] = useState<string | null>(null)
    const [search, setSearch] = useState('')

    const filtered = students.filter(
        (s) =>
            s.name.toLowerCase().includes(search.toLowerCase()) ||
            s.email.toLowerCase().includes(search.toLowerCase())
    )

    const submit = (data: Omit<Student, 'id'>) => {
        if (editing) {
            updateStudent({ ...editing, ...data })
            setEditing(null)
        } else {
            addStudent(data)
        }
    }


    return (
        <div className="container">
            <h1 className="title">Students Dashboard</h1>

            <div className="toolbar">
                <SearchBar value={search} onChange={setSearch} />
                <button
                    className="btn-primary"
                    onClick={() => exportStudentsToExcel(filtered)}
                >
                    Export Excel
                </button>
            </div>

            {loading && <Loader />}

            <StudentForm onSubmit={submit} defaultValues={editing} />

            <StudentTable
                students={filtered}
                onEdit={setEditing}
                onDelete={(id) => setDeleteId(id)}
            />

            <ConfirmDialog
                open={!!deleteId}
                onConfirm={() => {
                    if (deleteId) deleteStudent(deleteId)
                    setDeleteId(null)
                }}
                onCancel={() => setDeleteId(null)}
            />
        </div>
    )

}

export default Dashboard