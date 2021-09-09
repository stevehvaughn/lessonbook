import React from 'react'

const SelectedLesson = ({selectedLesson}) => {
    console.log(selectedLesson)
    
    return (
        <div className='selected-lesson-container'>
            <h2>Selected Lesson</h2>
            <h4>Date of Lesson: {selectedLesson.date}</h4>
            <h4>Lesson Objective: {selectedLesson.objective}</h4>
            <h4>Repertoire: {selectedLesson.repertoire}</h4>
            <h4>Assignment: {selectedLesson.assignment}</h4>
            <h4>Grade: {selectedLesson.earned_grade ? selectedLesson.earned_grade : "No Grade Assigned" }</h4>
        </div>
    )
}

export default SelectedLesson
