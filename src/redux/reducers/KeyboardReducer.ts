import { Dispatch } from 'redux'
import { cardAPI } from '../../api/CardApi'

export type ActionsType = SetIncrementMistakesType | setValueType | setNewTimeType
	| setCodeType | setCardsCountType | setNewValueInDisplayType

export type TimeType = {
	s: number
	m: number
	h: number
}

export type CodeType = {
	_id: string,
	author?: string,
	category?: string,
	code: string
	created?: string
	updated?: string
}

const initialState = {
	mistakes: 0, // подсчет ошибок
	cardsCount: 0, // количество карточек в массиве
	timeSec: 0,// включение таймера

	cardsValue: [] as CodeType[], //код полученный с сервака
	valueInInput: '',//вводимое значение
	valuesInDisplay: '', //строка которую нужно ввести
}

export type initialKeyboardReducerState =  typeof initialState

export const KeyboardReducer = (state = initialState, action: ActionsType): initialKeyboardReducerState => {
	switch (action.type) {
		case 'KEYBOARD/SET_INCREMENT_MISTAKES': {
			return {
				...state,
				mistakes: state.mistakes + 1,
			}
		}

		case 'KEYBOARD/SET_VALUE':
		case 'KEYBOARD/SET_NEW_VALUE_IN_DISPLAY':
		case 'KEYBOARD/SET_NEW_TIME':
		case 'KEYBOARD/SET_CODE':
		case 'KEYBOARD/SET_CARDS_COUNT': {
			return {
				...state,
				...action.payload
			}
		}
		default:
			return state
	}
}
//actions creators

export const setIncrementMistakesAC = () => {
	return {
		type: 'KEYBOARD/SET_INCREMENT_MISTAKES',
	} as const
}
export const setValueAC = (valueInInput: string) => {
	return {
		type: 'KEYBOARD/SET_VALUE', payload: {valueInInput},
	} as const
}
export const setCodeAC = (cardsValue: Array<CodeType>) => {
	return {
		type: 'KEYBOARD/SET_CODE', payload: {cardsValue}
	} as const
}
export const setCardsCountAC = (cardsCount: number) => {
	return {
		type: 'KEYBOARD/SET_CARDS_COUNT', payload: {cardsCount},
	} as const
}
export const setNewTimeAC = (timeSec: number) => {
	return {
		type: 'KEYBOARD/SET_NEW_TIME', payload: {timeSec}
	} as const
}
export const setNewValueInDisplayAC = (valuesInDisplay: string) => {
	return {
		type: 'KEYBOARD/SET_NEW_VALUE_IN_DISPLAY', payload: {valuesInDisplay},
	} as const
}

export const getCards = (category?: string) => async (dispatch: Dispatch) => {
	try {
		const promise = await cardAPI.getCards(category)
		dispatch(setCardsCountAC(promise.count))
		dispatch(setCodeAC(promise.cards))
		dispatch(setNewValueInDisplayAC(promise.cards[0].code))
	} catch (e) {
		console.log(e)
	}
}

type SetIncrementMistakesType = ReturnType<typeof setIncrementMistakesAC>
type setValueType = ReturnType<typeof setValueAC>
type setNewTimeType = ReturnType<typeof setNewTimeAC>
type setCodeType = ReturnType<typeof setCodeAC>
type setCardsCountType = ReturnType<typeof setCardsCountAC>
type setNewValueInDisplayType = ReturnType<typeof setNewValueInDisplayAC>