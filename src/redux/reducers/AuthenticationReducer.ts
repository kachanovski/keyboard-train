import { CallApi } from './../../api/apiAuth';
import { StateType } from './../store';
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IIsLogin } from '../../api/types';

const IS_AUTHENTICATION_SUCCESS = 'IS_AUTHENTICATION_SUCCESS';
const IS_AUTHENTICATION_LOGOUT = 'IS_AUTHENTICATION_LOGOUT';
const IS_AUTHENTICATION_ERROR = 'IS_AUTHENTICATION_ERROR';

interface IAuthenticationSuccess {
	type: typeof IS_AUTHENTICATION_SUCCESS
	token: string 
}

interface IAuthenticationLogOut {
	type: typeof IS_AUTHENTICATION_LOGOUT
}

interface IAuthenticationError {
	type: typeof IS_AUTHENTICATION_ERROR
	error: string
}


const initialState = {
	isAuth: false as boolean,
	error: '' as string,
	token: '' as string
}

export const authenticationSuccess = (token: string): IAuthenticationSuccess => ({type: IS_AUTHENTICATION_SUCCESS, token});
export const authenticationError = (error: string): IAuthenticationError => ({type: IS_AUTHENTICATION_ERROR, error});
export const authenticationLogOut = (): IAuthenticationLogOut => ({type: IS_AUTHENTICATION_LOGOUT});

export type IThunk = ThunkAction<void, StateType, unknown, any>
type AuthenticationType = IAuthenticationSuccess | IAuthenticationError | IAuthenticationLogOut;

export const authentication = (state = initialState, action: AuthenticationType): typeof initialState => {
	switch(action.type){
		case IS_AUTHENTICATION_SUCCESS: {
			return {
				...state,
				isAuth: true,
				token: action.token
			}
		}
		case IS_AUTHENTICATION_LOGOUT: {
			return {
				...state,
				isAuth: false,
				token: ''
			}
		}
		case IS_AUTHENTICATION_ERROR: {
			return {
				...state,
				isAuth: false,
				token: '',
				error: action.error
			}
		}
		default: 
			return state
	}
}

/* Thunk */
export const authenticationThunk = (url: string, email: string, password: string, remember: boolean = false): IThunk => async (dispatch: Dispatch) => {
	try{
		const response = await CallApi.post<IIsLogin>(url, {
			email, password, remember
		})

		const token = url === "login" ? response.data?.id : response.body?._id;
		dispatch(authenticationSuccess(token!));
	}
	catch(response){
		dispatch(authenticationError(response.message));
	}
}

export const logOutThunk = (): IThunk => async (dispatch: Dispatch) => {
	try{
		await CallApi.delete('logout');
		dispatch(authenticationLogOut());
	}
	catch(response){

	}
}