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

    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();    
        return isNaN(dayOfWeek) ? null : 
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
      }

      function getFormattedDate(date) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        let input = date.split("-")
        
        let year = input[0]
        const month = monthNames[input[1] - 1]
        let day = input[2]
      
        return month + " " + day + ', ' + year;
    }

    const sortLessons = (lessons) => {
        lessons.sort(function(a, b){
            return new Date(a.date) - new Date(b.date)
        })
    }
    sortLessons(lessons)

    return (
        <div className='single-student-container'>
            <img className='avatar-picture' src={picture_url} alt={last_name}></img>
            <h3>{first_name} {last_name} - {year_in_school}</h3>
            <h4>Lesson Time: {capitalizeFirstLetterOfString(lesson_day)} at {lesson_time}</h4>
            { lessons.length ? <button onClick={handleShowLessons}>{ showLessons ? "Hide Lessons" : "Show Lessons" }</button> : <p>No lessons to display</p> }
            { showLessons 
            ? 
                <div className='students-lessons-container'>
                    <h5>Click a lesson to see details</h5>
                    <ul className='students-lessons-list'>
                        {lessons.map(lesson => { return (
                            <li id={lesson.id} key={lesson.id} className='single-lesson' onClick={renderFullLesson}>
                                {getDayOfWeek(lesson.date), getFormattedDate(lesson.date)}
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
