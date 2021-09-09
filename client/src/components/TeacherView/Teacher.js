import { useSelector } from 'react-redux'
import { useState } from 'react'
import StudentOfTeacher from './StudentOfTeacher'
import SelectedLesson from './SelectedLesson'
import './TeacherView.css'

const Teacher = () => {
    const students = useSelector(state => state.user.userInfo.students)
    const teacher = useSelector(state => state.user.userInfo)

    const [selectedLesson, setSelectedLesson] = useState(null)

    function convertDayOfWeekToInteger(day) {
        switch (day) {
            case 'monday':
                return 1;
            case 'tuesday':
                return 2;
            case 'wednesday':
                return 3;
            case 'thursday':
                return 4;
            case 'friday': 
                return 5;
            default: 
                return 0;
        }
    }

    const sortedByDay = students.sort(function(a, b){
        let c = convertDayOfWeekToInteger(a.lesson_day)
        let d = convertDayOfWeekToInteger(b.lesson_day)

        if (c > d) {
            return 1
        } else {
            return -1
        }
    })

    function renderFullLesson(e) {
        const clickedLesson = parseInt(e.target.id)
        fetch(`/lessons/${clickedLesson}`)
        .then(resp => resp.json())
        .then(data => setSelectedLesson(data))
    }

    return (
        <div>
            <h1>Professor {teacher.last_name}'s Studio</h1>
            <img className="avatar-picture" src={teacher.picture_url} alt="teacher_picture"></img>
            <h2>Current Students</h2>
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
                        lesson_day = {student.lesson_day}
                        year_in_school = {student.year_in_school}
                        renderFullLesson = {renderFullLesson}
                    />
                )})}
            </div>
            { selectedLesson 
            ?   <SelectedLesson 
                    selectedLesson = {selectedLesson}
                />
            : null 
            }
        </div>
    )
}

export default Teacher
