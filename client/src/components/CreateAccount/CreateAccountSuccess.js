import { Link } from 'react-router-dom'
import './CreateAccount.css'

const CreateAccountSuccess = () => {
    return (
        <div>
            <h3 className='success'>Your Account was Created Successfully!</h3>
            <Link to="/" >
                <button className='form-button'>Click here to Login</button>
            </Link>
        </div>
    )
}

export default CreateAccountSuccess
