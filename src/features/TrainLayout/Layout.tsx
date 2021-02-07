import React, { useEffect } from 'react'
import { CheckField } from './CheckField/CheckField'
import { KeyBoard } from './Keyboard/Keyboard'
import { Results } from './Results/Results'
import './../../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../../redux/store'
import {
	setIncrementMistakesAC,
	setNewTimeAC,
	setValueAC,
} from '../../redux/reducers/KeyboardReducer'

export const Layout = () => {
	const mistakes = useSelector<StateType, number>(
		(state) => state.keyboard.mistakes
	)
	const time = useSelector<StateType, number>((state) => state.keyboard.timeSec)

	const code = useSelector<any, any>((state) => state.keyboard.code)
	const codeArea = useSelector<any, any>((state) => state.keyboard.value)
	const dispatch = useDispatch()

	useEffect(() => {
		let id = setInterval(() => {
			if (codeArea.length > 0) {
				if (code.length !== codeArea.length) {
					dispatch(setNewTimeAC(time))
				}
			}
		}, 1000)
		return () => clearInterval(id)
	}, [codeArea, time, code, dispatch])

	//checkField func
	const onChangeValue = (value: string) => {
		const codeLength = value.length - 1
		dispatch(setValueAC(value))

		check(value, codeLength)
	}

	const check = (value: string, codeLength: number) => {
		if (value[codeLength] !== code[codeLength]) {
			dispatch(setIncrementMistakesAC())
		}
		if (value.length === code.length) {
			alert('Yo, goo job!!!')
		}
	}

	return (
		<div className={'layout'}>
			<div className={'context-container'}>
				<div className={'context-container__inputs-fields'}>
					<CheckField
						code={code}
						codeArea={codeArea}
						onChangeValue={onChangeValue}
					/>
				</div>
				<div className={'context-container__controls'}>
					<Results mistakes={mistakes} time={time} />
				</div>
			</div>
			<div className={'keyboard'}>
				<KeyBoard />
			</div>
		</div>
	)
}
