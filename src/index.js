import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'

import authReducer from "./store/reducers/authReducer";
import movieReducer from "./store/reducers/movieReducer";
import { ThemeProvider} from "@material-ui/core";
import theme from './styles/theme'


const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose

const rootReducer = combineReducers({
    auth: authReducer,
    movie: movieReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
