import React, { useState } from 'react'

export const AppTS = () => {
	const [str, setStr] = useState<any[]>([
		{ id: 1, title: 'Hello world' },
		{ id: 2, title: '!' },
		{ id: 3, title: '!!' },
		{ id: 4, title: '1314 24' },
		{ id: 5, title: '23525' },
	])

	const [count, setCount] = useState(0)

	let [string, setString] = useState<string>('')
	const [inpValue, setInpValue] = useState('')

	function schet() {
		setString(str[count].title)
		if (count == str.length - 1) {
			alert('yoyoyo')
		} else {
			setCount(count + 1)
		}
	}

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInpValue(e.currentTarget.value)
		setString(str[count].title)

		if (inpValue.length == str[count].title.length - 1) {
			setInpValue('')
			setCount(count + 1)
			schet()
		}
	}

	return (
		<div className={'centr'}>
			<span>{string}</span>
			<input type={'text'} value={inpValue} onChange={onChangeHandler} />
			<button onClick={schet}>-</button>
		</div>
	)
}
