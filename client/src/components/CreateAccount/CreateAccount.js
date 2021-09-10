import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllTeachers } from '../../redux/actions/userActions';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
    const [newUserData, setNewUserData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
        is_teacher: "",
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTeachers())
    }, [])
    
    const [isTeacher, setIsTeacher] = useState(null)

    function handleSetIsTeacher(e) {
        setIsTeacher(Boolean(e.target.value))
    }

    function handleNewUserData(e) {
        setNewUserData({...newUserData,
            [e.target.name] : e.target.value
        })
    }

    function handleRadioButton(e) {
        setNewUserData({...newUserData,
            [e.target.name] : Boolean(e.target.value)
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    console.log(newUserData)
    
    return (
        <div>
            <h3>Create New Account</h3>
            <form onSubmit={handleSubmit}>
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
                <label htmlFor='is_teacher'>Are you a Student or Teacher?</label><br/>
                <select id='students' name='is_teacher' onChange={handleSetIsTeacher}>
                <option value="true">Choose</option>
                    <option value="true">Teacher</option>
                    <option value="">Student</option>
                </select><br/>
                { isTeacher 
                ?   null
                :   <>
                    <h3>Please Select Your Teacher</h3>
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
