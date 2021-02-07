export type ActionsType = SetIncrementMistakesType | setValueType | setNewTimeType

export type TimeType = {
    s: number
    m: number
    h: number
}

export type initialKeyboardReducerState = {
    mistakes: number
    code: string
    value: string
    timeSec: number
}

const initialState: initialKeyboardReducerState = {
    mistakes: 0, // подсчет ошибок
    code: 'Hello world!!!', //код который проверяем
    value: '',//вводимое значение
    timeSec: 0,// включение таймера
}

export const KeyboardReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'KEYBOARD/SET_INCREMENT_MISTAKES': {
            return {
                ...state,
                mistakes: state.mistakes + 1
            }
        }
        case 'KEYBOARD/SET_VALUE': {
            return {
                ...state,
                value: action.newValue
            }
        }
        case 'KEYBOARD/SET_NEW_TIME': {
            return {
                ...state,
                timeSec: action.time + 1 
            }
        }
        default:
            return state
    }
}


//actions creators

export const setIncrementMistakesAC = () => {
    return {
        type: 'KEYBOARD/SET_INCREMENT_MISTAKES'
    } as const
}

export const setValueAC = (newValue: string) => {
    return {
        type: 'KEYBOARD/SET_VALUE', newValue
    } as const
}

export const setNewTimeAC = (time:number) => {
    return {
        type: 'KEYBOARD/SET_NEW_TIME', time
    } as const
}


type SetIncrementMistakesType = ReturnType<typeof setIncrementMistakesAC>
type setValueType = ReturnType<typeof setValueAC>
type setNewTimeType = ReturnType<typeof setNewTimeAC>