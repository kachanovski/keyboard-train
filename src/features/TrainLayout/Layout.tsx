import React, { useState } from 'react'
import { CheckField } from './CheckField/CheckField'
import { KeyBoard } from './Keyboard/Keyboard'
import { Results } from './Results/Results'
import './../../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../../redux/store'
import { CodeType, setIncrementMistakesAC, setNewTimeAC, setValueAC } from '../../redux/reducers/KeyboardReducer'
import { Timer } from './Timer/Timer'
import Card from './Card/Card'

export const Layout = () => {
	const mistakes = useSelector<StateType, number>((state) => state.keyboard.mistakes)
	const code = useSelector<StateType, CodeType[]>((state) => state.keyboard.code)
	const codeArea = useSelector<StateType, string>((state) => state.keyboard.value)
	const time = useSelector<StateType, number>((state) => state.keyboard.timeSec)
	const dispatch = useDispatch()

	let [count, setCount] = useState<number>(0) // номер строки в массиве code
	const [string, setString] = useState<string>(code[count].title) // выводит одну строку из массива code
	const [keyCount, setKeyCount] = useState<number>(0)  // количество нажатых клавишь в поле ввода
	const [isEnd, setIsEnd] = useState<boolean>(false)  //запрещает ввод данных после ввода последнего слова

	const [seconds, setSeconds] = useState(0) // количесвто секунд в useInterval
	const [isActiveTimer, setIsActiveTimer] = useState<boolean>(false) // запуск/остановка таймера
	const stringToArray = string.split('')  //разбиваем строку на массив строк

	const onChangeCodeValue = (value: string) => {
		setKeyCount(keyCount + 1)
		setIsActiveTimer(true)
		const codeLength = value.length - 1
		dispatch(setValueAC(value))

		console.log(codeArea.length)
		console.log(code[count].title.length)


		if (value[codeLength] !== code[count].title[codeLength]) {  //посимвольно сравниваем вводимые смволы со значениями в state
			dispatch(setIncrementMistakesAC())
		}
		if (code[count].title.length - 1 === codeArea.length) { // сравниваем длинны строк(вводимые и state.value)
			next()
			setKeyCount(0)
			dispatch(setValueAC(''))
			setString(code[count].title)
		}
	}


	const next = () => {
		if (code.length - 1 === count) {  // при вводе всех слов из массива code
			setIsActiveTimer(false)
			setIsEnd(true)
			dispatch(setValueAC(''))
			dispatch(setNewTimeAC(seconds))
		} else {														// подставляет следуюшее слово из массива code
			setCount(count = count + 1)
		}
	}
	return (
		<div className={'layout'}>
			<Card />
			<div className={'context-container'}>
				<div className={'context-container__inputs-fields'}>
					<CheckField
						isEnd={isEnd}
						code={string}
						codeArea={codeArea}
						onChangeValue={onChangeCodeValue}
					/>
					{
						isEnd && <div>
							Результат:
							Time:<div>{time}</div>
							Mistakes: <div>{mistakes}</div>
						</div>
					}
				</div>
				<div className={'context-container__controls'}>
					<Results mistakes={mistakes} time={seconds} />
					<Timer isActiveTimer={isActiveTimer} setSeconds={setSeconds} seconds={seconds} />
				</div>
			</div>
			<div className={'keyboard'}>
				<KeyBoard result={stringToArray} keyCount={keyCount} />
			</div>
		</div>
	)
}
