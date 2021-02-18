import { AuthReducer } from './reducers/AuthReducer';
import { KeyboardReducer } from './reducers/KeyboardReducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleWare from "redux-thunk"
import { AdminReducer } from './reducers/AdminReducer'


let reducers = combineReducers({
    auth: AuthReducer,
    keyboard:KeyboardReducer,
    admin: AdminReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export type StateType = ReturnType<typeof reducers>

export default store

// @ts-ignore
window.store = store

