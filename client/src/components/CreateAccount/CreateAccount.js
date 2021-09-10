import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllTeachers } from '../../redux/actions/userActions';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
    useEffect(() => {
        dispatch(getAllTeachers())
    }, [])

    const [newUserData, setNewUserData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
        teacher_id: null,
    })
    const [isTeacher, setIsTeacher] = useState(true)
    const [selectedFile, setSelectedFile] = useState(null)

    const teachers = useSelector(state => state.teachers)

    const dispatch = useDispatch()

    function handleSetIsTeacher(e) {
        setIsTeacher(Boolean(e.target.value))
    }

    function handleNewUserData(e) {
        setNewUserData({...newUserData,
            [e.target.name] : e.target.value
        })
    }

    function handleNewUserSubmit(e) {
        e.preventDefault()
        fetch('/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserData)
        })
        .then(resp => {
            if (resp.ok) {
                resp.json().then(data => console.log(data))
            } else {
                resp.json().then(err => console.log(err))
            }
        })
    }

    function handleFileSelected(e) {
       setSelectedFile(e.target.files[0])
    }

    function handleFileUpload() {

    }
   
    return (
        <div>
            <h1>Create New Account</h1>
            <form onSubmit={handleNewUserSubmit}>
                <label htmlFor='first_name'>First Name:</label><br/>
                <input type='text' name='first_name' value={newUserData.first_name} onChange={handleNewUserData}></input><br/>
                <label htmlFor='last_name'>Last Name:</label><br/>
                <input type='text' name='last_name' value={newUserData.last_name} onChange={handleNewUserData}></input><br/>
                <label htmlFor='email'>Email:</label><br/>
                <input type='text' name='email' value={newUserData.email} onChange={handleNewUserData}></input><br/>
                <label htmlFor='username'>Username:</label><br/>
                <input type='text' name='username' value={newUserData.username} onChange={handleNewUserData}></input><br/>
                <label htmlFor='password'>Password:</label><br/>
                <input type='password' name='password' value={newUserData.password} onChange={handleNewUserData}></input><br/>
                <label htmlFor='picture_url'>Upload Profile Picture:</label><br/>
                <input type='file' name='picture_url'onChange={handleFileSelected}></input><br/>
                <button onClick={handleFileUpload}>Upload</button>
                <label htmlFor='is_teacher'>Are you a Student or Teacher?</label><br/>
                <select id='students' name='is_teacher' onChange={handleSetIsTeacher}>
                    <option selected value="true">Choose</option>
                    <option value="true">Teacher</option>
                    <option value="">Student</option>
                </select><br/><br/>
                { isTeacher 
                ?   null
                :   <>
                    <h3>Please Select Your Teacher</h3>
                    <select id='teachers' name='teacher_id' onChange={handleNewUserData}><br/>
                        {teachers.map(teacher => { return (
                            <option value={teacher.id}>{teacher.combined_name}</option>
                        )})}
                    </select><br/><br/>
                    </>
                }
                <button type='submit'>Create Account</button><br/>
                <Link to="/" >
                    <button>
                        Already Have an Account?
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default CreateAccount
