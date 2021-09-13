import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { navbarReducer } from './reducers/navbarReducer'
import { userReducer } from './reducers/userReducer';
import { teachersReducer } from './reducers/teachersReducer';
import { lessonsReducer } from './reducers/lessonsReducer'

const rootReducer = combineReducers({
    navbar: navbarReducer,
    user: userReducer,
    teachers: teachersReducer,
    lessons: lessonsReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWare = applyMiddleware(thunk)

export const store = createStore(rootReducer, composeEnhancers(middleWare));