import { createStore, compose } from 'redux'
import { navbarReducer } from './reducers/navbarReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(navbarReducer, composeEnhancers());