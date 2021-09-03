import "./Login.css"

const Login = () => {
    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
    }
    
    return (
        <div>
            <h3>Log in</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label><br/>
                <input type='text' id='username' value=''></input><br/>
                <label htmlFor='password'>Password:</label><br/>
                <input type='password' id='password'></input><br/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
