export function lessonsReducer(state = [], action) {
    switch (action.type) {
        case "ADD_LESSON":
            return action.payload
        default: 
            return state
    }
}