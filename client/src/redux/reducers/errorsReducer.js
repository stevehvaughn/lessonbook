export function errorsReducer(state = [], action) {
    switch (action.type) {
        case "LOGIN_ERROR":
            return action.payload
        case "ADD_LESSON_ERROR":
            return action.payload
        default: 
            return state
    }
}