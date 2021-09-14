export function studentsReducer(state = [], action) {
    switch (action.type) {
        case "GET_USERS_STUDENTS":
            return action.payload
        case "ADD_LESSON":
            state[action.studentIndex].lessons.push(action.payload)    
            return state   
        default: 
            return state
    }
}