import { Link } from 'react-router-dom'

const CreateAccountSuccess = () => {
    return (
        <div>
            <h1>Your Account was Created Successfully!</h1>
            <Link to="/" >
                <button>Click here to Login</button>
            </Link>
        </div>
    )
}

export default CreateAccountSuccess
