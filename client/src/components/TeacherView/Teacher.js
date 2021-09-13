import { useSelector } from 'react-redux'
import { useState } from 'react'
import SelectedLesson from './SelectedLesson'
import StudentOfTeacher from './StudentOfTeacher'
import './TeacherView.css'

const Teacher = () => {

    const teacher = useSelector(state => state.user)
    const students = useSelector(state => state.user.students)

    const [selectedLesson, setSelectedLesson] = useState(null)

    // function convertDayOfWeekToInteger(day) {
    //     switch (day) {
    //         case 'monday':
    //             return 1;
    //         case 'tuesday':
    //             return 2;
    //         case 'wednesday':
    //             return 3;
    //         case 'thursday':
    //             return 4;
    //         case 'friday': 
    //             return 5;
    //         default: 
    //             return 0;
    //     }
    // }

    // const sortedByDay = students.sort(function(a, b){
    //     let c = convertDayOfWeekToInteger(a.lesson_day)
    //     let d = convertDayOfWeekToInteger(b.lesson_day)

    //     if (c > d) {
    //         return 1
    //     } else {
    //         return -1
    //     }
    // })

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    
    function renderFullLesson(e) {
        const clickedLesson = parseInt(e.target.id)
        fetch(`/lessons/${clickedLesson}`)
        .then(resp => resp.json())
        .then(data => {
            setSelectedLesson(data)
            window.scroll({
                top: document.body.offsetHeight,
                left: 0, 
                behavior: 'smooth',
        })
        });
    }

    return (
        <div>
            <div className='teacher-header'>
                <img className="avatar-picture" src={teacher.picture_url} alt="teacher_picture"></img>
                <h1 id="teacher-header-text" className='teacher-text'>  Professor {teacher.last_name}'s Studio</h1>
            </div>
            <h1 className='teacher-text'>Current Students</h1>
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
