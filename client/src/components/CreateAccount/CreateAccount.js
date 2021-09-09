import { useState } from 'react';
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

    function handleNewUserData(e) {
        setNewUserData({...newUserData,
            [e.target.name] : [e.target.value]
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
                <h3>Are you a Student or Teacher?</h3>
                <label htmlFor='is_teacher'>Teacher</label><br/>
                <input type='radio' name='is_teacher' value="true" onChange={handleRadioButton}></input><br/>
                <label htmlFor='is_teacher'>Student</label><br/>
                <input type='radio' name='is_teacher' value="" onChange={handleRadioButton}></input><br/>
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
