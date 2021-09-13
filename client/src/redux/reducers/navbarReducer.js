export function navbarReducer(state = { active: false }, action) {
    switch (action.type) {
        case "TOGGLE_ACTIVE":
            return {...state, active: !state.active }
        case "TOGGLE_ON":
            return {...state, active: true }
        case "TOGGLE_OFF":
            return {...state, active: false }
        default: 
            return state
    }
}