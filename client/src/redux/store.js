import { createStore, compose, combineReducers } from 'redux'
import { navbarReducer } from './reducers/navbarReducer'
import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
    navbar: navbarReducer,
    user: userReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers());