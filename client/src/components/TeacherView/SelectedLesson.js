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
            <h2 className='teacher-text'>Selected Lesson</h2>
            <h4>Student: {selectedLesson.student.combined_name}</h4>
            <h4>Date of Lesson: {selectedLesson.date}</h4>
            <h4>Lesson Objective: {selectedLesson.objective}</h4>
            <h4>Repertoire: {selectedLesson.repertoire}</h4>
            <h4>Assignment: {selectedLesson.assignment}</h4>
            {selectedLesson.earned_grade 
            ?   <>
                <h4>Grade: {selectedLesson.earned_grade}</h4><br/>
                </>
            :   <>
                <h4>No Grade Assigned</h4><button>Assign Grade</button><br/>
                </>
            }
            <button id={selectedLesson.id} onClick={handleDeleteLesson}>Delete Lesson</button>
        </div>
    )
}

export default SelectedLesson
