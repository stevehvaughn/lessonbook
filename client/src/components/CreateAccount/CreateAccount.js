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
    const [selectedFile, setSelectedFile] = useState("")
    // const [fileAsUrl, setFileAsUrl] = useState("")
    const [errors, setErrors] = useState([])
    const [success, setSuccess] = useState(false)
    const [fileUploadSuccess, setFileUploadSuccess] = useState(false)
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
       setFileUploadSuccess(false)
    }

    function handleFileUpload(e) {
        e.preventDefault()
        setErrors([])
        if (selectedFile.type === undefined) {
            setErrors(['Please select a file to upload'])
        } else if  (selectedFile.type !== 'image/jpeg') {
            setErrors([`Please upload a .jpeg image, this file type is: ${selectedFile.type}`])
        } else {
            const uploadTask = storage.ref(`/images/${selectedFile.name}`).put(selectedFile)

            uploadTask.on('state_changed', 
            (snapShot) => {}, (err) => {console.log(err)}, () => {
                storage.ref('images').child(selectedFile.name).getDownloadURL()
                .then(fireBaseUrl => {
                    // setFileAsUrl(fireBaseUrl)
                    setNewUserData({...newUserData, 
                        picture_url: fireBaseUrl
                    })
                    setErrors([])
                    setFileUploadSuccess(true)
                })
            })
        }
    }
  
    return (
        <div>
            <h1 className='page-header'>Create New Account</h1>
            <form onSubmit={handleNewUserSubmit}>
                <div className='sub-div'>
                    <div className='form-div'>
                        <label htmlFor='first_name'>First Name:</label>
                        <input type='text' name='first_name' value={newUserData.first_name} onChange={handleNewUserData}></input>
                    </div>
                    <div className='form-div'>
                        <label htmlFor='last_name'>Last Name:</label>
                        <input type='text' name='last_name' value={newUserData.last_name} onChange={handleNewUserData}></input>
                    </div>
                    <div className='form-div'>
                        <label htmlFor='username'>Username:</label>
                        <input type='text' name='username' value={newUserData.username} onChange={handleNewUserData}></input>
                    </div>
                    <div className='form-div'>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' name='password' value={newUserData.password} onChange={handleNewUserData}></input>
                    </div>
                    <div className='form-div'>
                        <label htmlFor='email'>Email:</label>
                        <input type='text' name='email' value={newUserData.email} onChange={handleNewUserData}></input>
                    </div>
                    <div id='upload-pic-div' className='form-div'>
                        <label id='upload-label' htmlFor='picture_url'>Upload Profile Picture:</label>
                        <input type='file' name='picture_url' onChange={handleFileSelected}></input>
                        <button id='upload-button' className='form-button' type='submit' onClick={handleFileUpload}>Upload</button>
                    </div>
                </div><br/>
                { fileUploadSuccess && <h3>File Uploaded Successfully!</h3>}
                <div className='form-div'>
                    <label htmlFor='is_teacher'>Student or Teacher?</label>
                    <select id='students' name='is_teacher' onChange={handleSetIsTeacher}>
                        <option defaultValue value="true">Choose</option>
                        <option value="true">Teacher</option>
                        <option value="">Student</option>
                    </select>
                </div>
                { isTeacher 
                ?   null
                :   <>
                    <div className='sub-div'>
                        <div className='form-div'>
                            <label htmlFor='year_in_school'>Year in School:</label>
                            <select id='year' name='year_in_school' onChange={handleNewUserData}>
                                <option defaultValue value="">Choose a Year</option>
                                {yearInSchoolOptions.map(yearInSchool => { return (
                                    <option value={yearInSchool}>{yearInSchool}</option>
                                )})}
                            </select>
                        </div>
                        <div className='form-div'>
                            <label htmlFor='teacher_id'>Teacher:</label>
                            <select id='teachers' name='teacher_id' onChange={handleNewUserData}>
                                <option defaultValue value="">Choose a Teacher</option>
                                {teachers.map(teacher => { return (
                                    <option value={teacher.id}>{teacher.combined_name}</option>
                                )})}
                            </select>
                        </div>
                        <div className='form-div'>
                            <label htmlFor='lesson_day'>Lesson Day:</label>
                            <select id='day' name='lesson_day' onChange={handleNewUserData}>
                                <option defaultValue value="">Choose a Day</option>
                                <option value='monday'>Monday</option>
                                <option value='tuesday'>Tuesday</option>
                                <option value='wednesday'>Wednesday</option>
                                <option value='thursday'>Thursday</option>
                                <option value='friday'>Friday</option>
                            </select>
                        </div>
                        <div className='form-div'>
                            <label htmlFor='lesson_time'>Lesson Time:</label>
                            <select id='time' name='lesson_time' onChange={handleNewUserData}>
                                <option defaultValue value="">Choose a Time</option>
                                {lessonTimes.map(time => { return (
                                    <option value={time}>{time}</option>
                                )})}
                            </select>
                        </div>
                    </div><br/>
                    </>
                }
                <button className='form-button' type='submit'>Create Account</button><br/>
                <Link style={{ textDecoration: 'none' }} to="/" >
                    <button className='form-button'>Already Have an Account?</button>
                </Link>
            </form><br/>
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
        </div>
    )
}

export default CreateAccount
