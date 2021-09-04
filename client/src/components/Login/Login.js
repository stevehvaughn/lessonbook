import "./Login.css"
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
        <div>
            <h3>Log in</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label><br/>
                <input type='text' name='username' value={formData.username} onChange={handleFormData}></input><br/>
                <label htmlFor='password'>Password:</label><br/>
                <input type='password' name='password' value={formData.password} onChange={handleFormData}></input><br/>
                <button type='submit'>Login</button>
                <LoginErrors />
            </form>
        </div>
    )
}

export default Login
