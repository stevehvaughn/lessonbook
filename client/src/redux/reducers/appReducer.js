export function appReducer(state = { active: false }, action) {
    switch (action.type) {
        case "TOGGLE_ACTIVE":
            return {...state, active: !state.active }
        default: 
            return state
    }
}