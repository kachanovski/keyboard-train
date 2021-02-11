import { StateType } from './../store'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { authAPI } from '../../api/AuthApi'

const initialState = {
	isAuth: false as boolean,
	error: '' as string,
}

export type IThunk = ThunkAction<void, StateType, unknown, any>
type ActionType =  authMeActionType


export const AuthReducer = (state = initialState, action: ActionType): typeof initialState => {
	switch(action.type){
		case "login/AUTH_ME":
            return {...state, isAuth: action.isAuth}
		default: 
			return state
	}
}

//actions 

export const authMeAction = (isAuth: boolean) => ({type: 'login/AUTH_ME', isAuth} as const)

/* Thunk */
export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    try {
        await authAPI.login(email, password, rememberMe)
        dispatch(authMeAction(true))
    } catch (e) {
		console.log(e);
    }
}

export const authMeTC = () => async (dispatch: Dispatch) => {
    try {
		await authAPI.authMe()
		dispatch(authMeAction(true))
    } catch (e) {
        console.log(e)
    }
}

export const googleSignInTC = () => async (dispatch: Dispatch) => {
    try {
        debugger
		await authAPI.googleSignIn()
		dispatch(authMeAction(true))
    } catch (e) {
        console.log(e)
    }
}

export const logOutTC = () => async (dispatch: Dispatch) => {
    try {
        await authAPI.logout()
        dispatch(authMeAction(false))
    } catch (e) {
        console.log(e)
    }
}

export const registerTC = (email: string, password: string) => async (dispatch: Dispatch) => {
	try {
		const promise = await authAPI.register(email, password)
		console.log(promise);
	} catch (e) {
		console.log(e);
	}
}

//types 

type authMeActionType = ReturnType<typeof authMeAction>