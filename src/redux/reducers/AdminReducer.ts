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
	| deleteCurrentCardType


export const AdminReducer = (state = initialState, action: ActionType): typeof initialState => {
	switch (action.type) {
		case 'admin/GET_CARDS':
			return {...state, cards: action.cards}
		case "admin/DELETE_CARD":
			return{
				...state,
				cards: state.cards.filter(c => c._id !== action.id)
			}
		default:
			return state;
	}
}

// Actions

export const getAllCardsAC = (cards: Array<cardsType>) => ({ type: 'admin/GET_CARDS', cards } as const);
export const deleteCardAC = (id: string) => ({type: 'admin/DELETE_CARD', id} as const)

// Thunk
export const getAllCardsTC = () => async (dispatch: Dispatch) => {
	try {
		const res = await adminAPI.getAllCards()
		dispatch(getAllCardsAC(res.data.cards))
	} catch (e) {
		console.log(e)
	}
}
export const deleteCardTC = (id: string)  => async (dispatch: Dispatch<any>) => {
	try {
		await adminAPI.deleteCard(id)
		dispatch(getAllCardsTC())
	} catch (e) {
		console.log(e, 'deleteCardTC error')
	}
}
// export const updateCardTC = (id: string)  => async (dispatch: Dispatch) => {
// 	try {
// 		await adminAPI.updateCard(id)
// 		dispatch(getAllCardsTC())
// 	} catch (e) {
// 		console.log(e)
// 	}
// }

// Types
type getCardsType = ReturnType<typeof getAllCardsAC>
type deleteCurrentCardType = ReturnType<typeof deleteCardAC>
