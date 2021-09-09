import './TeacherView.css'
import Lesson from '../Lessons/Lesson'
import { useState } from 'react'

const StudentOfTeacher = ({first_name, last_name, picture_url, lessons, username, lesson_time, year_in_school }) => {
    const [showLessons, setShowLessons] = useState(false)

    function handleShowLessons() {
        setShowLessons(!showLessons)
    }

    return (
        <div className='single-student-container'>
            <img className='student-avatar-picture' src={picture_url} alt={last_name}></img>
            <h5>{first_name} {last_name} - {year_in_school}</h5>
            <h5>Lesson Time: {lesson_time}</h5>
            <button onClick={handleShowLessons}>{ showLessons ? "Hide Lessons" : "Show Lessons" }</button>
            { showLessons 
            ? 
                <div>
                    {lessons.map(lesson => { return (
                        <Lesson 
                            key = {lesson.id}
                            assignment = {lesson.assignment}
                            objective = {lesson.objective}
                            repertoire = {lesson.repertoire}
                            earned_grade = {lesson.earned_grade}
                            date = {lesson.date}
                        />
                    )})}
                </div>
            : null
            }
        </div>
    )
}

export default StudentOfTeacher
