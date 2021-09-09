import { useSelector } from 'react-redux'
import StudentsOfTeacher from './StudentsOfTeacher'
import './TeacherView.css'

const Teacher = () => {
    const students = useSelector(state => state.user.userInfo.students)
    const teacher = useSelector(state => state.user.userInfo)
    
    return (
        <div>
            <h1>Signed in as {teacher.combined_name}</h1>
            <img className="avatar-picture" src={teacher.picture_url} alt="teacher_picture"></img>
            <h3>Current Students</h3>
            <div classname='students-container'>
                {students.map(student => {return (
                    <StudentsOfTeacher 
                        key = {student.id}
                        first_name = {student.first_name}
                        last_name = {student.last_name}
                        picture_url = {student.picture_url}
                        username = {student.username}
                        lessons = {student.lessons}
                    />
                )})}
            </div>
            <h3>Upcoming Lessons</h3>
        </div>
    )
}

export default Teacher
