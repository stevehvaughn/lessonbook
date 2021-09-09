import { useSelector } from "react-redux"
import { useState } from "react"

const CreateLesson = () => {
    const [newLessonData, setNewLessonData] = useState({
        objective: "",
        repertoire: "",
        assignment: "",
        date: new Date().toISOString().slice(0, 10),
        user_id: null,
    })

    console.log(new Date().toISOString().slice(0, 10))
    console.log(newLessonData)

    const students = useSelector(state => state.user.userInfo.students)

    function handleNewLessonData(e) {
        setNewLessonData({...newLessonData,
            [e.target.name] : e.target.value
        })
    }

    function handleDropdownData(e) {
        setNewLessonData({...newLessonData,
            [e.target.name] : Boolean(e.target.value)
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
    }
    
    return (
        <div>
            <h3>New Lesson</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='date'>Date of Lesson:</label><br/>
                <input type='date' name='date' value={newLessonData.date} onChange={handleNewLessonData}></input><br/>
                <label htmlFor='objective'>Objective:</label><br/>
                <input type='text' name='objective' value={newLessonData.objective} onChange={handleNewLessonData}></input><br/>
                <label htmlFor='repertoire'>Repertoire:</label><br/>
                <input type='text' name='repertoire' value={newLessonData.repertoire} onChange={handleNewLessonData}></input><br/>
                <label htmlFor='assignment'>Assignment:</label><br/>
                <input type='text' name='assignment' value={newLessonData.assignment} onChange={handleNewLessonData}></input><br/>
                <label htmlFor='user_id'>Select a Student</label><br/>
                <select id='students' name='user_id' onChange={handleNewLessonData}>
                    {students.map(student => { return (
                        <option value={student.id}>{student.combined_name}</option>
                    )})}
                </select>
                <br/>
                <button type='submit'>Complete Lesson</button><br/>
            </form>
        </div>
    )
}

export default CreateLesson
