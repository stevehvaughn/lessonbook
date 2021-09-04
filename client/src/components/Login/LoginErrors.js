import { useSelector } from "react-redux"

const LoginErrors = () => {
    const errors = useSelector(state => state.user.errors)
    
    return (
        <div>
            <h1>{errors}</h1>
        </div>
    )
}

export default LoginErrors
