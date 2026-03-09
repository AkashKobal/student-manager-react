import { useForm } from 'react-hook-form'
import { Student } from '../../types/Student'
import { emailRegex } from '../../utils/validators'

interface Props {
    onSubmit: (data: Omit<Student, 'id'>) => void
    defaultValues?: Student | null
}

const StudentForm = ({ onSubmit, defaultValues }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Omit<Student, 'id'>>({
        defaultValues: defaultValues || {
            name: '',
            email: '',
            age: 0
        }
    })

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input
                placeholder="Name"
                {...register('name', { required: true })}
            />
            {errors.name && <p>Name required</p>}

            <input
                placeholder="Email"
                {...register('email', {
                    required: true,
                    pattern: emailRegex
                })}
            />
            {errors.email && <p>Invalid email</p>}

            <input
                type="number"
                placeholder="Age"
                {...register('age', { required: true, min: 1 })}
            />
            {errors.age && <p>Age required</p>}

            <button type="submit">
                {defaultValues ? 'Update' : 'Add'}
            </button>
        </form>
    )
}

export default StudentForm