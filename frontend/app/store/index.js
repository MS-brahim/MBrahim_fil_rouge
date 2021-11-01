import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

const middlewares = [reduxThunk]
const rdvExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store =  createStore(reducers, {}, rdvExtension(applyMiddleware(...middlewares)))

export { store }