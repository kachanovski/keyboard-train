import React, { useEffect, useState } from 'react'
import { CheckField } from './CheckField/CheckField'
import { KeyBoard } from './Keyboard/Keyboard'
import { Results } from './Results/Results'
import './../../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../../redux/store'
import {
	CodeType,
	setIncrementMistakesAC,
	setNewTimeAC,
	setValueAC,
} from '../../redux/reducers/KeyboardReducer'
import { Redirect } from 'react-router-dom'

export const Layout = () => {
	const mistakes = useSelector<StateType, number>(
		(state) => state.keyboard.mistakes
	)

	const code = useSelector<StateType, CodeType[]>((state) => state.keyboard.code)
	const codeArea = useSelector<StateType, string>((state) => state.keyboard.value)
	const dispatch = useDispatch()

	let [count, setCount] = useState<number>(0)
	let [string, setString] = useState<string>(code[count].title)


	const [seconds, setSeconds] = useState(0)
	const [isActiveTimer, setIsActiveTimer] = useState<boolean>(false)
	const [isEnd, setIsEnd] = useState<boolean>(false)

	useEffect(() => {
			let id = setInterval(() => {
				if (isActiveTimer) {
					setSeconds( s=> s+1)
				}
			}, 1000)
			return () => clearInterval(id)

	}, [isActiveTimer])



	//checkField func
	const onChangeValue = (value: string) => {
		setIsActiveTimer(true)
		const codeLength = value.length - 1
		dispatch(setValueAC(value))
		if(value[codeLength] !== code[count].title[codeLength]){
			dispatch(setIncrementMistakesAC())
		}
		if (code[count].title.length - 1 === codeArea.length) {
			next()
			dispatch(setValueAC(''))
			setString(code[count].title)
		}
	}

	const next = () => {
		if(code.length - 1 === count) {
			setIsEnd(true)
			setIsEnd(true)
			dispatch(setValueAC(''))
			setString('')
			setIsActiveTimer(false)
			dispatch(setNewTimeAC(seconds))

			return <Redirect to={'/login'}/>
		} else {
			setCount(count = count + 1)
		}
	}

	return (
		<div className={'layout'}>
			<div className={'context-container'}>
				<div className={'context-container__inputs-fields'}>
					{isEnd
						? <button>start</button>
						:	<CheckField
							code={string}
							codeArea={codeArea}
							onChangeValue={onChangeValue}
						/>
					}

				</div>
				<div className={'context-container__controls'}>
					<Results mistakes={mistakes} time={seconds} />
				</div>
			</div>
			<div className={'keyboard'}>
				<KeyBoard />
			</div>
		</div>
	)
}
