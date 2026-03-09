import { Student } from '../../types/Student'
import StudentRow from './StudentRow'

interface Props {
    students: Student[]
    onEdit: (student: Student) => void
    onDelete: (id: string) => void
}

const StudentTable = ({
    students,
    onEdit,
    onDelete
}: Props) => {
    return (
        <div className="table-wrapper">

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                        <StudentRow
                            key={student.id}
                            student={student}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentTable