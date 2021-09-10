export function teachersReducer(state = [], action) {
    switch (action.type) {
        case "GET_TEACHERS":
            return action.payload
        default: 
            return state
    }
}