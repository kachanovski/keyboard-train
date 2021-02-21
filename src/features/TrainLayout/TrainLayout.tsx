import React, { useEffect, useState } from 'react'
import './TrainLayout.css'

import { TrainCheckField } from './TrainCheckField/TrainCheckField'
import { KeyBoard } from './Keyboard/Keyboard'
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
import { TrainTextField } from './TrainTextField/TrainTextField'

export const TrainLayout = () => {

	//const {mistakes, timeSec, cardsCount, cardsValue, valueInInput} = useSelector<StateType, number>((state) => state.keyboard)
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
		dispatch(setValueAC(''))
		dispatch(setIncrementMistakesAC())
		setSeconds(0)
		setIsActiveTimer(false)
		setKeyCount(0)
		setIsEnd(false)
	}, [dispatch, category])

	let valueInDisplayToArray = ['']
	if (valuesInDisplay) {																			//разбиваем строку на массив строк
		valueInDisplayToArray = valuesInDisplay.split('')
	}
	console.log(cardsValue)
	const onChangeInputValue = (newValueInInput: string) => {

		setKeyCount(keyCount + 1)   // после каждого нажатия на клавишу увеличивает на 1
		setIsActiveTimer(true)
		if (cardsCount === count && cardsValue[cardsCount - 1].code.length === valueInInput.length + 1) {  //условие выхода, когда введены все строки из массива cardsValue
			debugger
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
		/*		<div className={s.layout}>
					<div className={s.container}>
						<div className={s.code_field}>
							<TrainCheckField
								category={category}
								valueInDisplayToArray={valueInDisplayToArray}
								isEnd={isEnd}
								time={time}
								mistakes={mistakes}
								keyCount={keyCount}
							/>
						</div>
						<Results mistakes={mistakes} isActiveTimer={isActiveTimer} setSeconds={setSeconds} seconds={seconds} />


							<KeyBoard result={valueInDisplayToArray} keyCount={keyCount} />

					</div>
				</div>*/

		<div className={'layout'}>
			<div>
				<TrainCheckField
					category={category}
					valueInDisplayToArray={valueInDisplayToArray}
					isEnd={isEnd}
					time={time}
					mistakes={mistakes}
					keyCount={keyCount}
				/>
				<KeyBoard result={valueInDisplayToArray} keyCount={keyCount} />
			</div>

			<TrainTextField valueInInput={valueInInput} onChangeInputValue={onChangeInputValue} isEnd={isEnd} />
		</div>

	)
}

