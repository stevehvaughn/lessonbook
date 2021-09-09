import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App'

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, 
    document.getElementById('root'));