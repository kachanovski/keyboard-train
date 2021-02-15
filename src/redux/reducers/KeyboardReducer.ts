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


export type initialKeyboardReducerState = {
	mistakes: number
	cardsCount: number
	timeSec: number

	cardsValue: CodeType[]
	valueInInput: string
	valuesInDisplay: string
}

const initialState: initialKeyboardReducerState = {
	mistakes: 0, // подсчет ошибок
	cardsCount: 0, // количество карточек в массиве
	timeSec: 0,// включение таймера

	cardsValue: [], //код полученный с сервака
	valueInInput: '',//вводимое значение
	valuesInDisplay: '', //строка которую нужно ввести
}
export const KeyboardReducer = (state = initialState, action: ActionsType) => {
	switch (action.type) {
		case 'KEYBOARD/SET_INCREMENT_MISTAKES': {
			return {
				...state,
				mistakes: ++state.mistakes,
			}
		}
		case 'KEYBOARD/SET_VALUE': {
			return {
				...state,
				valueInInput: action.newValueInInput,
			}
		}
		case 'KEYBOARD/SET_NEW_TIME': {
			return {
				...state,
				timeSec: action.time,
			}
		}
		case 'KEYBOARD/SET_CODE': {
			return {
				...state,
				cardsValue: action.code,
			}

		}
		case 'KEYBOARD/SET_CARDS_COUNT': {
			return {
				...state,
				cardsCount: action.cardsCount,
			}
		}
		case 'KEYBOARD/SET_NEW_VALUE_IN_DISPLAY': {

			return {
				...state,
				valuesInDisplay: action.value,
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

export const setValueAC = (newValueInInput: string) => {
	return {
		type: 'KEYBOARD/SET_VALUE', newValueInInput,
	} as const
}
export const setCodeAC = (code: Array<CodeType>) => {
	return {
		type: 'KEYBOARD/SET_CODE', code,
	} as const
}
export const setCardsCountAC = (cardsCount: number) => {
	return {
		type: 'KEYBOARD/SET_CARDS_COUNT', cardsCount,
	} as const
}

export const setNewTimeAC = (time: number) => {
	return {
		type: 'KEYBOARD/SET_NEW_TIME', time,
	} as const
}
export const setNewValueInDisplayAC = (value: string) => {
	return {
		type: 'KEYBOARD/SET_NEW_VALUE_IN_DISPLAY', value,
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