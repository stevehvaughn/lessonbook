export function studentsReducer(state = [], action) {
    switch (action.type) {
        case "GET_USERS_STUDENTS":
            return action.payload
        case "ADD_LESSON":
            state[action.studentIndex].lessons.push(action.payload)    
            return state 
        case "DELETE_LESSON":
            const lessonsWithoutDeletedLesson = state[action.studentIndex].lessons.filter(lesson => lesson.id !== action.payload)
            state[action.studentIndex].lessons = lessonsWithoutDeletedLesson;
            return state
        case "DELETE_STUDENT":
            const studentsWithoutDeletedStudent = state.filter(student => student.id !== action.payload)
            return studentsWithoutDeletedStudent
        default: 
            return state
    }
}