const initialState = {
    isLoggedIn: false,
    username: "",
    password: ""
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                isLoggedIn: true, 
                username: action.payload.username,
                password: action.payload.password
            }
        case "LOGOUT_USER":
            return {}
        case "SIGNUP_NEW_USER":
            return {}
        default: 
            return state
    }
}