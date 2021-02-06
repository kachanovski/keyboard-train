import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIncrementMistakes } from '../../../redux/reducers/KeyboardReducer';
import { StateType } from '../../../redux/store';

export const MistakesCount = () => {   
    const mistakes = useSelector<StateType, number>(state => state.keyboard.mistakes)
    const dispatch = useDispatch()

    const incMistake = () => {
       dispatch(setIncrementMistakes())
    }

    return (
        <div>
            <span>
                {mistakes}
            </span>
            <div>
                <button onClick={incMistake}>™</button>
            </div>
        </div>
    )
}