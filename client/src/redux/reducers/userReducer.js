export function userReducer(state = { active: false }, action) {
    switch (action.type) {
        case "LOGIN":
            return {}
        case "LOGOUT":
            return {}
        case "SIGNUP":
            return {}
        default: 
            return state
    }
}