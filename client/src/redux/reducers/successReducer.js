export function successReducer(state = {}, action) {
    switch (action.type) {
        case "ADD_LESSON":
            return {...state, lesson: 'Your Lesson was Created Successfully!'}
        default: 
            return state
    }
}