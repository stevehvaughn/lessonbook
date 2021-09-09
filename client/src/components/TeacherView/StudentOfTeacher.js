import './TeacherView.css'
import { useState } from 'react'

const StudentOfTeacher = ({first_name, last_name, picture_url, lessons, username, lesson_time, lesson_day, year_in_school, renderFullLesson }) => {
    const [showLessons, setShowLessons] = useState(false)

    function handleShowLessons() {
        setShowLessons(!showLessons)
    }

    function capitalizeFirstLetterOfString(str) {
        const lower = str.toLowerCase()
        return str.charAt(0).toUpperCase() + lower.slice(1)
    }

    return (
        <div className='single-student-container'>
            <img className='student-avatar-picture' src={picture_url} alt={last_name}></img>
            <h5>{first_name} {last_name} - {year_in_school}</h5>
            <h5>Lesson Time: {capitalizeFirstLetterOfString(lesson_day)} at {lesson_time}</h5>
            <button onClick={handleShowLessons}>{ showLessons ? "Hide Lessons" : "Show Lessons" }</button>
            { showLessons 
            ? 
                <div className='students-lessons-container'>
                    <ul className='students-lessons-list'>
                        {lessons.map(lesson => { return (
                            <li id={lesson.id} key={lesson.id} className='single-lesson' onClick={renderFullLesson}>
                                Lesson Date: {lesson.date}
                            </li>
                        )})}
                    </ul>
                </div>
            : null
            }
        </div>
    )
}

export default StudentOfTeacher
