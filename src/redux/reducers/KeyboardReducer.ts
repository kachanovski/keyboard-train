export type ActionsType = SetIncrementMistakesType


export type initialKeyboardReducerState = {
    mistakes: number
}

const initialState: initialKeyboardReducerState = {
    mistakes: 0
}

export const KeyboardReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'KEYBOARD/SET_INCREMENT_MISTAKES': {
            return {
                ...state,
                mistakes: state.mistakes + 1
            }
        }
        default:
            return state
    }
}


//actions creators

export const setIncrementMistakes = () => {
    return {
        type: 'KEYBOARD/SET_INCREMENT_MISTAKES'
    } as const
}

type SetIncrementMistakesType = ReturnType<typeof setIncrementMistakes>