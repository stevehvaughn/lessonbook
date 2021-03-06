const initialState = {
    isLoggedIn: false
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                isLoggedIn: true,
                id: action.payload.id,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                combined_name: action.payload.combined_name,
                email: action.payload.email,
                username: action.payload.email,
                picture_url: action.payload.picture_url,
                teacher: action.payload.teacher,
                lessons: action.payload.lessons
            }
        case "LOGOUT_USER":
            return initialState
        case "SIGNUP_NEW_USER":
            return {}
        default: 
            return state
    }
}