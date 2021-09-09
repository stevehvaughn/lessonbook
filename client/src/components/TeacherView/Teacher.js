import { useSelector } from 'react-redux'
import StudentOfTeacher from './StudentOfTeacher'
import './TeacherView.css'

const Teacher = () => {
    const students = useSelector(state => state.user.userInfo.students)
    const teacher = useSelector(state => state.user.userInfo)
    
    const sortedStudentsByLessonTime = students.sort(function(a, b){
        let c = Date.parse('06/06/2019 ' + a.lesson_time)
        let d = Date.parse('06/06/2019 ' + b.lesson_time)
        if (c > d) {
            return 1
        } else {
            return -1
        }
    })

    return (
        <div>
            <h1>Professor {teacher.last_name}'s Studio</h1>
            <img className="avatar-picture" src={teacher.picture_url} alt="teacher_picture"></img>
            <h3>Current Students</h3>
            <div className='students-container'>
                {students.map(student => {return (
                    <StudentOfTeacher 
                        key = {student.id}
                        first_name = {student.first_name}
                        last_name = {student.last_name}
                        picture_url = {student.picture_url}
                        username = {student.username}
                        lessons = {student.lessons}
                        lesson_time = {student.lesson_time}
                        year_in_school = {student.year_in_school}
                    />
                )})}
            </div>
            <h3>Upcoming Lessons</h3>
        </div>
    )
}

export default Teacher
