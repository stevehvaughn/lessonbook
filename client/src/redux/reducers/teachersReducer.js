export function teachersReducer(state = [], action) {
    console.log(action.payload)
    
    switch (action.type) {
        case "GET_TEACHERS":
            return action.payload
        default: 
            return state
    }
}