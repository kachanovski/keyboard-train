import { authentication } from './reducers/AuthenticationReducer';
import { KeyboardReducer } from './reducers/KeyboardReducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleWare from "redux-thunk"


let reducers = combineReducers({
    keyboard:KeyboardReducer,
		authentication
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export type StateType = ReturnType<typeof reducers>

export default store

// @ts-ignore
window.store = store