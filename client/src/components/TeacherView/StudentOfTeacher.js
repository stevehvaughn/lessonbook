import './TeacherView.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Avatar from 'react-avatar';
import { deleteStudent } from '../../redux/actions/userActions';

export function getFormattedDate(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    let input = date.split("-")
    
    let year = input[0]
    const month = monthNames[input[1] - 1]
    let day = input[2]
  
    return month + " " + day + ', ' + year;
}

const StudentOfTeacher = ({first_name, last_name, combined_name, picture_url, id, students, username, lesson_time, lesson_day, year_in_school, renderFullLesson }) => {
    const [showLessons, setShowLessons] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const [hoveringID, setHoveringID] = useState("")
    const dispatch = useDispatch()

    const currentStudent = students.filter(student => student.id === id)
    let lessons = currentStudent[0].lessons

    function handleMouseOver(e) {
        setHoveringID(e.target.id)
        setIsHovering(true)
    }

    function handleMouseOut(e) {
        setIsHovering(false)
    }

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

    const sortLessons = (lessons) => {
        lessons.sort(function(a, b){
            return new Date(a.date) - new Date(b.date)
        })
    }
    sortLessons(lessons)

    function handleAreYouSureDelete(e) {
        if (window.confirm("Are you sure you want to delete this student?")) {
            const clickedUserId = parseInt(e.target.id)
            const arrayIndexOfStudent = students.findIndex(student => student.id === clickedUserId)
            dispatch(deleteStudent(clickedUserId, arrayIndexOfStudent))
        }
    }

    return (
        <div className='single-student-container'>
            {picture_url ? <img className='avatar-picture' src={picture_url} alt={last_name}></img> : <Avatar round='50%' name={combined_name} /> }
            <h4>{combined_name} - {year_in_school}</h4>
            <h5>Lesson Time: {capitalizeFirstLetterOfString(lesson_day)} at {lesson_time}</h5><br/>
            { lessons.length ? <button className='show-lessons-button' onClick={handleShowLessons}>{ showLessons ? "Hide Lessons" : "Show Lessons" }</button> : <p>No lessons to display</p> }
            { showLessons 
            ? 
                <div className='students-lessons-container'>
                    <ul className='students-lessons-list'>
                        {lessons.map(lesson => { return (
                            <>
                            <li id={lesson.id} key={lesson.id} className='single-lesson' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={renderFullLesson}>
                                {getDayOfWeek(lesson.date), getFormattedDate(lesson.date)}
                            </li>
                            {isHovering === true && lesson.id === parseInt(hoveringID) ? <p className='hover-text'>{lesson.objective}<br/><br/>{lesson.assignment}</p> : null}
                            </>
                        )})}
                    </ul>
                </div>
            : null
            }
            <button id={id} onClick={(e) => {handleAreYouSureDelete(e)}} className='delete-button'>Delete Student</button>
        </div>
    )
}

export default StudentOfTeacher
