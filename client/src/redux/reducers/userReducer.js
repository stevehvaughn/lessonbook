const initialState = {
    isLoggedIn: false
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_USER":
            return {isLoggedIn: true, userInfo: action.payload}
        case "LOGOUT_USER":
            return {}
        case "SIGNUP_NEW_USER":
            return {}
        case "LOGIN_ERROR":
            return {...state, errors: action.payload}
        default: 
            return state
    }
}