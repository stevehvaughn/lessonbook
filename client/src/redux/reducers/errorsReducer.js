export function errorsReducer(state = [], action) {
    switch (action.type) {
        case "LOGIN_ERROR":
            return action.payload
        case "ADD_LESSON_ERROR":
            return action.payload
        case "LOGIN_USER":
            return []
        default: 
            return state
    }
}