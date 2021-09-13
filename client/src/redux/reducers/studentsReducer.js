export function studentsReducer(state = [], action) {
    switch (action.type) {
        case "GET_USERS_STUDENTS":
            console.log(action.payload)
            return action.payload
        default: 
            return state
    }
}