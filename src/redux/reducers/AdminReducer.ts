import { StateType } from './../store'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { adminAPI } from '../../api/adminApi'

export type cardsType = {
	_id: string
	author: string
	code: string
	category: string
	created: Date
	updated: Date
}

const initialState = {
	cards: [] as cardsType[]
}

export type IThunk = ThunkAction<void, StateType, unknown, any>
type ActionType = getCardsType


export const AdminReducer = (state = initialState, action: ActionType): typeof initialState => {
	switch (action.type) {
		case 'admin/GET_CARDS':
			return {...state, cards: action.cards}
		default:
			return state;
	}
}

//actions

export const getAllCardsAction = (cards: Array<cardsType>) => ({ type: 'admin/GET_CARDS', cards } as const);
/* Thunk */
export const getAllCardsTC = () => async (dispatch: Dispatch) => {
	try {
		const res = await adminAPI.getAllCards()
		dispatch(getAllCardsAction(res.data.cards))
	} catch (e) {
		console.log(e)
	}
}
export const removeCardTC = (id: string)  => async (dispatch: Dispatch<any>) => {
	try {
		await adminAPI.removeCard(id)
		dispatch(getAllCardsTC())
	} catch (e) {
		console.log(e)
	}
}
export const updateCardTC = (id: string)  => async (dispatch: Dispatch<any>) => {
	try {
		await adminAPI.updateCard(id)
		dispatch(getAllCardsTC())
	} catch (e) {
		console.log(e)
	}
}
//types
type getCardsType = ReturnType<typeof getAllCardsAction>
