import React, { useEffect, useState } from 'react'
import s from './TrainLayout.module.css'

import { CheckField } from './CheckField/CheckField'
import { KeyBoard } from './Keyboard/Keyboard'
import { Results } from './Results/Results'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../../redux/store'
import {
	CodeType,
	getCards,
	setIncrementMistakesAC,
	setNewTimeAC,
	setNewValueInDisplayAC,
	setValueAC,
} from '../../redux/reducers/KeyboardReducer'
import { useParams } from 'react-router-dom'

export const Layout = () => {

	const mistakes = useSelector<StateType, number>((state) => state.keyboard.mistakes)
	const time = useSelector<StateType, number>((state) => state.keyboard.timeSec)
	const cardsCount = useSelector<StateType, number>((state) => state.keyboard.cardsCount)

	const cardsValue = useSelector<StateType, CodeType[]>((state) => state.keyboard.cardsValue)
	const valueInInput = useSelector<StateType, string>((state) => state.keyboard.valueInInput)
	const valuesInDisplay = useSelector<StateType, string>((state) => state.keyboard.valuesInDisplay)

	const dispatch = useDispatch()

	let [count, setCount] = useState<number>(1) // номер строки в массиве cardsValue
	const [keyCount, setKeyCount] = useState<number>(0)  // количество нажатых клавишь в поле ввода
	const [isEnd, setIsEnd] = useState<boolean>(false)  //запрещает ввод данных после ввода последнего слова
	const [seconds, setSeconds] = useState(0) // количесвто секунд в useInterval
	const [isActiveTimer, setIsActiveTimer] = useState<boolean>(false) // запуск/остановка таймера

	//const [array, setArray] = useState<Array<number>>([])

	const { category }: any = useParams()
	useEffect(() => {
		dispatch(getCards(category))
		setSeconds(0)
		setIsEnd(false)
	}, [dispatch, category])

	let valueInDisplayToArray = ['']
	if (valuesInDisplay) {																			//разбиваем строку на массив строк
		valueInDisplayToArray = valuesInDisplay.split('')
	}

	const onChangeInputValue = (newValueInInput: string) => {

		setKeyCount(keyCount + 1)   // после каждого нажатия на клавишу увеличивает на 1
		setIsActiveTimer(true)
		if (cardsCount === count && cardsValue[cardsCount - 1].code.length === valueInInput.length + 1) {  //условие выхода, когда введены все строки из массива cardsValue
			setIsEnd(true)
			setIsActiveTimer(false)
			dispatch(setNewTimeAC(seconds))
			dispatch(setValueAC(''))
		} else if (valueInInput.length + 1 === valuesInDisplay.length) {   //сравнение длин строк, и подстановка след строки
			setCount(c => c + 1)
			setKeyCount(0)
			dispatch(setValueAC(''))
			dispatch(setNewValueInDisplayAC(cardsValue[count].code))
		} else {
			dispatch(setValueAC(newValueInInput))
		}
		if (valuesInDisplay[newValueInInput.length - 1] !== newValueInInput[keyCount]) {   //подсчет ошибок
			//const mistake = newValueInInput.length + 1
			//setArray([...array, mistake])
			dispatch(setIncrementMistakesAC())
		}
	}

	return (
		<div className={s.layout}>
			<div className={s.container}>
				<div className={s.title}>{category}</div>
				<div className={s.code_field}>
						 <CheckField
							valueInDisplayToArray={valueInDisplayToArray}
							isEnd={isEnd}
							keyCount={keyCount}
							valuesInDisplay={valuesInDisplay}
							valueInInput={valueInInput}
							onChangeInputValue={onChangeInputValue}
						/>
				</div>
				<Results mistakes={mistakes} isActiveTimer={isActiveTimer} setSeconds={setSeconds} seconds={seconds} />

				<div className={s.keyboard_field}>
					<KeyBoard result={valueInDisplayToArray} keyCount={keyCount} />
				</div>
			</div>
		</div>
	)
}

