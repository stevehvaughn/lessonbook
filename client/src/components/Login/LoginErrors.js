import { useSelector } from "react-redux"
import './Login.css'

const LoginErrors = () => {
    const errors = useSelector(state => state.user.errors)
    
    return (
        <div>
            <h3 className='errors'>{errors}</h3>
        </div>
    )
}

export default LoginErrors
