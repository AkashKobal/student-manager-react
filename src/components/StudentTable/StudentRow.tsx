import { Student } from '../../types/Student'

interface Props {
    student: Student
    onEdit: (student: Student) => void
    onDelete: (id: string) => void
}

const StudentRow = ({ student, onEdit, onDelete }: Props) => {
    return (
        <tr>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.age}</td>

            <td>
                <div className="actions">
                    <button
                        className="btn-edit"
                        onClick={() => onEdit(student)}
                    >
                        Edit
                    </button>

                    <button
                        className="btn-danger"
                        onClick={() => onDelete(student.id)}
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default StudentRow