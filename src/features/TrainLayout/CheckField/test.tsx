import React, {ChangeEvent, useState} from 'react'

export type StrType = {
	id: number
	title: string
}

export const AppTS = () => {
	const [str, setStr] = useState<StrType[]>([
		{id: 1, title: "Hello world"},
		{id: 2, title: "!"},
		{id: 3, title: "!!"},
		{id: 4, title: "1314 24"},
		{id: 5, title: "23525"}
	])


	let [strUser, setStrUser] = useState<string>('')
	let [count, setCount] = useState<number>(0)
	let [string, setString] = useState<string>(str[count].title)
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setStrUser(e.currentTarget.value)
		if (str[count].title.length - 1 === strUser.length) {
			counter()
			setStrUser('')
			setString(str[count].title)
		}

	}

	function counter () {
		if(str.length - 1 === count) {
			alert("yo")
		} else {
			setCount(count = count + 1)
		}
	}

	return (
		<div className={"centr"}>
			<span>{string}</span>
			<input type={"text"}
				   value={strUser}
				   onChange={onChangeHandler}
			/>

		</div>
	);
}
