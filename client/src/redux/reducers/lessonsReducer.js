export function lessonsReducer(state = [], action) {
    switch (action.type) {
        case "GET_LESSONS":
            return action.payload
        default: 
            return state
    }
}