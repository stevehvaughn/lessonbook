import { useSelector } from "react-redux"
import './Login.css'

const LoginErrors = () => {
    const errors = useSelector(state => state.errors)
    
    return (
        <div>
            {errors.map(err => {return (
                <h3 className='errors'>{err}</h3>
            )})}
        </div>
    )
}

export default LoginErrors
