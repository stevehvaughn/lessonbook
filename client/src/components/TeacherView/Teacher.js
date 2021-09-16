import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getUsersStudents } from '../../redux/actions/userActions'
import Avatar from 'react-avatar';
import SelectedLesson from './SelectedLesson'
import StudentOfTeacher from './StudentOfTeacher'
import './TeacherView.css'

const Teacher = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsersStudents())
      }, [dispatch])

    const teacher = useSelector(state => state.user)
    const students = useSelector(state => state.students)

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
        { selectedLesson && clickedLesson === selectedLesson.id ? setSelectedLesson(null) 
        : 
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
    }

    return (
        <div>
            <div className='teacher-header'>
                { teacher.picture_url ? <img className="avatar-picture" src={teacher.picture_url} alt="teacher_picture"></img> : <Avatar round='50%' name={combined_name} /> }
                <h1 id="teacher-header-text">  Professor {teacher.last_name}'s Studio</h1>
            </div>
            <h2 className='page-header'>Current Students</h2>
            <p>Click Show Lessons to display all of the lessons for that student</p>
            <p>Hover over a lesson to see that lesson's objective and assignment or click the lesson to see full details</p>
            <div className='students-container'>
                {students.map(student => {return (
                    <StudentOfTeacher 
                        key = {student.id}
                        id = {student.id}
                        students = {students}
                        first_name = {student.first_name}
                        last_name = {student.last_name}
                        combined_name = {student.combined_name}
                        picture_url = {student.picture_url}
                        username = {student.username}
                        lesson_time = {student.lesson_time}
                        lesson_day = {student.lesson_day}
                        year_in_school = {student.year_in_school}
                        renderFullLesson = {renderFullLesson}
                        setSelectedLesson = {setSelectedLesson}
                    />
                )})}
            </div>
            { selectedLesson 
            ?   <SelectedLesson 
                    selectedLesson = {selectedLesson}
                    setSelectedLesson = {setSelectedLesson}
                />
            : null 
            }
        </div>
    )
}

export default Teacher
