import { StateType } from './../store';
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { authAPI } from '../../api/AuthApi';

const initialState = {
	isAuth: false as boolean,
	errorMessage: '' as string,
}

export type IThunk = ThunkAction<void, StateType, unknown, any>
type ActionType = authMeAction | authErrorAction


export const AuthReducer = (state = initialState, action: ActionType): typeof initialState => {
	switch (action.type) {
		case "login/AUTH_ME":
			return { ...state, isAuth: action.isAuth, errorMessage: '' };
		case "login/AUTH_ME_ERROR":
			return { ...state, errorMessage: action.error, isAuth: false };
		default:
			return state;
	}
}

//actions 

export const authMeAction = (isAuth: boolean) => ({ type: 'login/AUTH_ME', isAuth } as const);
export const authErrorAction = (error: string) => ({ type: 'login/AUTH_ME_ERROR', error } as const);

/* Thunk */
export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
	try {
		await authAPI.login(email, password, rememberMe)
		dispatch(authMeAction(true));
		return Promise.resolve(true);
	} catch (e) {
		dispatch(authErrorAction(e.message));
		return  Promise.reject(e.message); 
	}
}

export const authMeTC = () => async (dispatch: Dispatch) => {
	try {
		await authAPI.authMe()
		dispatch(authMeAction(true));
	} catch (e) {
		console.log(e);
	}
}

export const googleSignInTC = () => async (dispatch: Dispatch) => {
	try {
		await authAPI.googleSignIn();
		dispatch(authMeAction(true));
	} catch (e) {
		console.log(e)
	}
}

export const logOutTC = () => async (dispatch: Dispatch) => {
	try {
		await authAPI.logout()
		dispatch(authMeAction(false));
	} catch (e) {
		console.log(e);
	}
}

export const registerTC = (email: string, password: string) => async (dispatch: Dispatch) => {
	try {
		const promise = await authAPI.register(email, password);
		console.log(promise);
	} catch (e) {
		console.log(e);
	}
}

//types 
type authMeAction = ReturnType<typeof authMeAction>
type authErrorAction = ReturnType<typeof authErrorAction>