import './TeacherView.css'
import { useDispatch, useSelector } from "react-redux"
import { deleteLesson } from "../../redux/actions/lessonActions"
import { getFormattedDate } from './StudentOfTeacher'


const SelectedLesson = ({selectedLesson, setSelectedLesson}) => {  
    const dispatch = useDispatch()

    const students = useSelector(state => state.students)
  
    function handleDeleteLesson(e) {
        const selectedLessonId = parseInt(e.target.id)
        const arrayIndexOfStudent = students.findIndex(student => student.id === parseInt(selectedLesson.student.id))
        console.log(arrayIndexOfStudent)
        setSelectedLesson(null)
        dispatch(deleteLesson(selectedLessonId, arrayIndexOfStudent))
    }

    return (
        <div className='selected-lesson-container'>
            <h2>Selected Lesson</h2>
            <p>Student: {selectedLesson.student.combined_name}</p>
            <p>Date: {getFormattedDate(selectedLesson.date)}</p>
            <p>Objective: {selectedLesson.objective}</p>
            <p>Repertoire: {selectedLesson.repertoire}</p>
            <p>Assignment: {selectedLesson.assignment}</p>
            {/* {selectedLesson.earned_grade 
            ?   <>
                <h3>Grade: {selectedLesson.earned_grade}</h3>
                </>
            :   <>
                <h3>No Grade Assigned</h3><button className='show-lessons-button'>Assign Grade</button>
                </>
            } */}
            <button className='delete-button' id={selectedLesson.id} onClick={handleDeleteLesson}>Delete Lesson</button>
        </div>
    )
}

export default SelectedLesson
