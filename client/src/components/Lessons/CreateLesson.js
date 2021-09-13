import './Lessons.css'
import '../CreateAccount/CreateAccount.css'
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

    console.log(newLessonData)
    
    return (
        <div>
            <h1>New Lesson</h1>
                <form className='form-container' onSubmit={handleSubmit}>
                    <div className='form-div'>
                        <label className='new-account-label' htmlFor='date'>Date of Lesson:</label>
                        <input className='new-account-input' type='date' name='date' value={newLessonData.date} onChange={handleNewLessonData}></input>
                    </div>
                    <div className='form-div'>
                        <label className='new-account-label' htmlFor='objective'>Objective:</label>
                        <textarea placeholder='ex: In this lesson the student will have a better understanding of marcato style' className='new-account-input large-input' type='text' name='objective' value={newLessonData.objective} onChange={handleNewLessonData}></textarea>
                    </div>
                    <div className='form-div'>
                        <label className='new-account-label' htmlFor='repertoire'>Repertoire:</label>
                        <textarea placeholder='Repertoire used in the lesson to acheive objective, and other materials you think the student may find helpful' className='new-account-input large-input' type='text' name='repertoire' value={newLessonData.repertoire} onChange={handleNewLessonData}></textarea>
                    </div>
                    <div className='form-div'>
                        <label className='new-account-label' htmlFor='assignment'>Assignment:</label>
                        <textarea placeholder="Materails in this section are assigned for the students' next lesson" className='new-account-input large-input' type='text' name='assignment' value={newLessonData.assignment} onChange={handleNewLessonData}></textarea>
                    </div>
                    <div className='form-div'>
                        <label className='new-account-label' htmlFor='user_id'>Student:</label>
                        <select className='new-account-input' id='students' name='user_id' onChange={handleNewLessonData}>
                            <option defaultValue value="">Please Select a Student</option>
                            {students.map(student => { return (
                                <option key={student.id} value={student.id}>{student.combined_name}</option>
                                )})}
                        </select>
                    </div>
                    <div className='form-div'>
                        <label className='new-account-label' htmlFor='earned_grade'>Grade:</label>
                        <input placeholder='Please enter a whole number, optional'className='new-account-input' type='number' name='earned_grade' value={newLessonData.earned_grade} onChange={handleNewLessonData}></input>
                    </div>
                </form><br/>
            <button className='form-button' type='submit'>Complete Lesson</button><br/>
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
