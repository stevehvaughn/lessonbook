import "./Login.css"
import "../CreateAccount/CreateAccount.css"
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { loginAction } from "../../redux/actions/userActions"
import LoginErrors from "./LoginErrors"

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const dispatch = useDispatch()
    
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(loginAction(formData))
        setFormData({
            username: "", 
            password: ""
        })
    }

    function handleFormData(event) {
        setFormData({...formData,
            [event.target.name] : event.target.value
        })
    }
    
    return (
        <div className='login-container'>
            <h1 className='page-header'>Login</h1>
            <form onSubmit={handleSubmit}>
            <div className='form-div'>
                <label className='new-account-label' htmlFor='username'>Username:</label>
                <input className='new-account-input' type='text' name='username' value={formData.username} onChange={handleFormData}></input>
            </div>
            <div className='form-div'>
                <label className='new-account-label' htmlFor='password'>Password:</label>
                <input className='new-account-input' type='password' name='password' value={formData.password} onChange={handleFormData}></input>
            </div><br/>
                <button id='login-button' className='form-button' type='submit'>Login</button>
            </form>
           <LoginErrors />
        </div>
    )
}

export default Login
