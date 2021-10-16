import '../TeacherView/TeacherView.css' 
import { getFormattedDate } from '../TeacherView/StudentOfTeacher';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import Avatar from 'react-avatar';

const Student = () => {
    const student = useSelector(state => state.user)
    const [isHovering, setIsHovering] = useState(false)
    const [hoveringID, setHoveringID] = useState("")
    const [pageX, setPageX] = useState("")
    const [pageY, setPageY] = useState("")

    function handleMouseOver(e) {
        setHoveringID(e.target.id)
        setPageX(e.pageX)
        setPageY(e.pageY)
        setIsHovering(true)
    }

    function handleMouseOut(e) {
        setIsHovering(false)
    }

    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();    
        return isNaN(dayOfWeek) ? null : 
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
      }

      const sortLessons = (lessons) => {
        lessons.sort(function(a, b){
            return new Date(b.date) - new Date(a.date)
        })
    }
    sortLessons(student.lessons)

    const upcomingLessons = student.lessons.filter(lesson => new Date(lesson.date) > new Date())
    const priorLessons = student.lessons.filter(lesson => new Date(lesson.date) < new Date())
    
    return (
        <div>
             <div className='teacher-header'>
                { student.picture_url ? <img className="avatar-picture" src={student.picture_url} alt="student_picture"></img> : <Avatar round='50%' name={student.combined_name} /> }
                <h1 id="teacher-header-text">Welcome {student.first_name}!</h1>
            </div>
            <p>Hover over a lesson to see that lesson's objective and assignment or click the lesson to see full details</p>
            <h2 className='page-header'>Upcoming Lessons</h2>
            <div className='students-lessons-container'>
                <ul className='students-lessons-list'>
                    {upcomingLessons.map(lesson => { return (
                        <>
                        <li id={lesson.id} key={lesson.id} className='single-lesson' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            {getDayOfWeek(lesson.date), getFormattedDate(lesson.date)}
                        </li>
                        {isHovering === true && lesson.id === parseInt(hoveringID) ? <p className='hover-text' style={{ left: parseInt(pageX), top: parseInt(pageY) + 10 }}>{lesson.objective}<br/><br/>{lesson.assignment}</p> : null}
                        </>
                    )})}
                </ul>
            </div>
            <h2 className='page-header'>Prior Lessons</h2>
            <div className='students-lessons-container'>
                <ul className='students-lessons-list'>
                    {priorLessons.map(lesson => { return (
                        <>
                        <li id={lesson.id} key={lesson.id} className='single-lesson' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            {getDayOfWeek(lesson.date), getFormattedDate(lesson.date)}
                        </li>
                        {isHovering === true && lesson.id === parseInt(hoveringID) ? <p className='hover-text' style={{ left: parseInt(pageX), top: parseInt(pageY) + 10 }}>{lesson.objective}<br/><br/>{lesson.assignment}</p> : null}
                        </>
                    )})}
                </ul>
            </div>
        </div>
    )
}

export default Student
