import { useState } from 'react';

const SelectedLesson = ({selectedLesson}) => {  
    console.log(selectedLesson)
    
    return (
        <div className='selected-lesson-container'>
            <h2 className='teacher-text'>Selected Lesson</h2>
            <h4>Student: {selectedLesson.student.combined_name}</h4>
            <h4>Date of Lesson: {selectedLesson.date}</h4>
            <h4>Lesson Objective: {selectedLesson.objective}</h4>
            <h4>Repertoire: {selectedLesson.repertoire}</h4>
            <h4>Assignment: {selectedLesson.assignment}</h4>
            {selectedLesson.earned_grade 
            ?   <h4>Grade: {selectedLesson.earned_grade}</h4>
            :   <>
                <h4>No Grade Assigned</h4><button>Assign Grade</button>
                </>
            }
        </div>
    )
}

export default SelectedLesson
