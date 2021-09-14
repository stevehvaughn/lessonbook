import './TeacherView.css'
import { useDispatch, useSelector } from "react-redux"
import { deleteLesson } from "../../redux/actions/lessonActions"


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
            <h1 className='teacher-text'>Selected Lesson</h1>
            <h3>Student: {selectedLesson.student.combined_name}</h3>
            <h3>Date of Lesson: {selectedLesson.date}</h3>
            <h3>Lesson Objective: {selectedLesson.objective}</h3>
            <h3>Repertoire: {selectedLesson.repertoire}</h3>
            <h3>Assignment: {selectedLesson.assignment}</h3>
            {selectedLesson.earned_grade 
            ?   <>
                <h3>Grade: {selectedLesson.earned_grade}</h3>
                </>
            :   <>
                <h3>No Grade Assigned</h3><button className='show-lessons-button'>Assign Grade</button>
                </>
            }
            <button className='show-lessons-button' id={selectedLesson.id} onClick={handleDeleteLesson}>Delete Lesson</button>
        </div>
    )
}

export default SelectedLesson
