import './TeacherView.css'
import { useDispatch } from "react-redux"
import { deleteLesson } from "../../redux/actions/lessonActions"


const SelectedLesson = ({selectedLesson}) => {  
    const dispatch = useDispatch()
    
    function handleDeleteLesson(e) {
        const selectedLesson = parseInt(e.target.id)
        dispatch(deleteLesson(selectedLesson))
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
