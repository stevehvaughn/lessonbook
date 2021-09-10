import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllTeachers } from '../../redux/actions/userActions';
import { Link } from 'react-router-dom';
import { storage } from '../../firebase/firebase';
import CreateAccountErrors from './CreateAccountErrors';
import CreateAccountSuccess from './CreateAccountSuccess';
import './CreateAccount.css'

const CreateAccount = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTeachers())
        setSuccess(false)
    }, [dispatch])
    const [isTeacher, setIsTeacher] = useState(true)
    const [selectedFile, setSelectedFile] = useState(null)
    const [fileAsUrl, setFileAsUrl] = useState("")
    const [errors, setErrors] = useState([])
    const [success, setSuccess] = useState(false)
    const teachers = useSelector(state => state.teachers)
    const lessonTimes = ['08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm']
    const yearInSchoolOptions = ["Freshman", "Sophomore", "Junior", "Senior", "1st Year Masters", "2nd Year Masters", "1st Year Doctorate", "2nd Year Doctorate", "3rd Year Doctorate", "4th+ Year Doctorate"]
    const [newUserData, setNewUserData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
        teacher_id: null,
        picture_url: "",
        lesson_day: null,
        lesson_time: null,
    })

    function handleSetIsTeacher(e) {
        setIsTeacher(Boolean(e.target.value))
        if (Boolean(e.target.value) === true) {
            setNewUserData({...newUserData,
                teacher_id: null
            })
        }
    }

    function handleNewUserData(e) {
        setNewUserData({...newUserData,
            [e.target.name] : e.target.value
        })
    }

    function handleNewUserSubmit(e) {
        e.preventDefault()
        setErrors([])
        fetch('/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserData)
        })
        .then(resp => {
            if (resp.ok) {
                resp.json().then(setSuccess(true))
            } else {
                resp.json().then(err => setErrors(err.errors))
            }
        })
    }

    function handleFileSelected(e) {
       setSelectedFile(e.target.files[0])
    }

    function handleFileUpload(e) {
        e.preventDefault()
        console.log('start of upload')
        if (selectedFile.type !== 'image/jpeg' ) {
            setErrors([`Please upload a .jpeg image, this file type is: ${selectedFile.type}`])
        } else {
            const uploadTask = storage.ref(`/images/${selectedFile.name}`).put(selectedFile)

            uploadTask.on('state_changed', 
            (snapShot) => {
            //takes a snap shot of the process as it is happening
            }, (err) => {
            //catches the errors
            console.log(err)
            }, () => {
            // gets the functions from storage refences the image storage in firebase by the children
            // gets the download url then sets the image from firebase as the value for the imgUrl key:
            storage.ref('images').child(selectedFile.name).getDownloadURL()
            .then(fireBaseUrl => {
                setFileAsUrl(fireBaseUrl)
                setNewUserData({...newUserData, 
                    picture_url: fireBaseUrl
                })
                setErrors([])
            })
            })
        }
    }

    console.log(newUserData)
   
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
                <input type='file' name='picture_url' onChange={handleFileSelected}></input><br/>
                <button type='submit' onClick={handleFileUpload}>Upload</button>
                <label htmlFor='is_teacher'>Are you a Student or Teacher?</label><br/>
                <select id='students' name='is_teacher' onChange={handleSetIsTeacher}>
                    <option defaultValue value="true">Choose</option>
                    <option value="true">Teacher</option>
                    <option value="">Student</option>
                </select><br/><br/>
                { isTeacher 
                ?   null
                :   <>
                    <h3>What Year in School are you?</h3>
                    <select id='year' name='year_in_school' onChange={handleNewUserData}><br/>
                        <option defaultValue value="">Pick One</option>
                        {yearInSchoolOptions.map(yearInSchool => { return (
                            <option value={yearInSchool}>{yearInSchool}</option>
                        )})}
                    </select><br/>
                    <h3>Please Select Your Teacher</h3>
                    <select id='teachers' name='teacher_id' onChange={handleNewUserData}><br/>
                        <option defaultValue value="">Choose a Teacher</option>
                        {teachers.map(teacher => { return (
                            <option value={teacher.id}>{teacher.combined_name}</option>
                        )})}
                    </select><br/>
                    <h3>What Day is your Lesson?</h3>
                    <select id='day' name='lesson_day' onChange={handleNewUserData}><br/>
                        <option defaultValue value="">Choose a Day</option>
                        <option value='monday'>Monday</option>
                        <option value='tuesday'>Tuesday</option>
                        <option value='wednesday'>Wednesday</option>
                        <option value='thursday'>Thursday</option>
                        <option value='friday'>Friday</option>
                    </select><br/>
                    <h3>What Time is your Lesson?</h3>
                    <select id='time' name='lesson_time' onChange={handleNewUserData}><br/>
                        <option defaultValue value="">Choose a Time</option>
                        {lessonTimes.map(time => { return (
                            <option value={time}>{time}</option>
                        )})}
                    </select><br/>
                    </>
                }
                <button type='submit'>Create Account</button><br/>
                <Link to="/" >
                    <button>Already Have an Account?</button>
                </Link>
                { success 
                ? <CreateAccountSuccess />
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
            </form>
        </div>
    )
}

export default CreateAccount
