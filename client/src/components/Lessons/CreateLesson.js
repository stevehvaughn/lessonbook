import { useSelector } from "react-redux"
import { useState } from "react"
// import { addLessonToStudent } from "../../redux/actions/lessonActions"
import CreateLessonSuccess from "./CreateLessonSuccess"
import CreateAccountErrors from "../CreateAccount/CreateAccountErrors"

const CreateLesson = () => {
    const [newLessonData, setNewLessonData] = useState({
        objective: "",
        repertoire: "",
        assignment: "",
        date: new Date().toISOString().slice(0, 10),
        user_id: "",
        earned_grade: ""
    })
    // const dispatch = useDispatch()
    const students = useSelector(state => state.user.students)
    
    const [errors, setErrors] = useState([])
    const [success, setSuccess] = useState(false)

    console.log(new Date().toISOString().slice(0, 10))


    function handleNewLessonData(e) {
        setNewLessonData({...newLessonData,
            [e.target.name] : e.target.value
        })
    }

    // function handleNewLessonNumberData(e) {
    //     setNewLessonData({...newLessonData, 
    //     [e.target.name] : parseInt(e.target.value)
    //     })
    // }

    function handleSubmit(e) {
        e.preventDefault()
        // dispatch(addLessonToStudent(newLessonData))
        fetch('/lessons', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLessonData)
        })
        .then(resp => {
            if (resp.ok) {
                resp.json().then(setSuccess(true))
                setNewLessonData({...newLessonData, 
                    objective: "",
                    repertoire: "",
                    assignment: "",
                    date: new Date().toISOString().slice(0, 10),
                    user_id: "",
                    earned_grade: ""
                })
            } else {
                resp.json().then(err => setErrors(err.errors))
            }
        })
    }
    
    return (
        <div>
            <h3>New Lesson</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='date'>Date of Lesson:</label>
                        <input type='date' name='date' value={newLessonData.date} onChange={handleNewLessonData}></input>
                    </div>
                    <div>
                        <label htmlFor='objective'>Objective:</label>
                        <input type='text' name='objective' value={newLessonData.objective} onChange={handleNewLessonData}></input>
                    </div>
                    <div>
                        <label htmlFor='repertoire'>Repertoire:</label>
                        <input type='text' name='repertoire' value={newLessonData.repertoire} onChange={handleNewLessonData}></input>
                    </div>
                    <div>
                        <label htmlFor='assignment'>Assignment:</label>
                        <input type='text' name='assignment' value={newLessonData.assignment} onChange={handleNewLessonData}></input>
                    </div>
                    <div>
                        <label htmlFor='user_id'>Student:</label>
                        <select id='students' name='user_id' onChange={handleNewLessonData}>
                            <option defaultValue value="">Please Select a Student</option>
                            {students.map(student => { return (
                                <option key={student.id} value={student.id}>{student.combined_name}</option>
                                )})}
                        </select>
                    </div>
                    <div>
                        <label htmlFor='earned_grade'>Grade:</label>
                        <input type='number' name='earned_grade' value={newLessonData.earned_grade} onChange={handleNewLessonData}></input>
                    </div>
                        <button type='submit'>Complete Lesson</button><br/>
                </form>
            { success 
                ? <CreateLessonSuccess />
                : 
                <>
                {errors.map(error => { return (
                    <CreateAccountErrors
                        key = {error}
                        error = {error}
                    />
                )})}
                </>
                }
        </div>
    )
}

export default CreateLesson
