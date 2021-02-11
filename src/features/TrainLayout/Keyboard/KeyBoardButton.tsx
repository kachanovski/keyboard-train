import React from 'react'

type ButtonPropsType = {
	keyCount: number
	result: Array<string>
	value: string
	onClickButton: (code: number) => void
	upperValue: string
	colorValue: string
	sizeValue: string
	code: number
}

export const Button = (props: ButtonPropsType) => {

	const onClick = () => {
		props.onClickButton(props.code)
	}

	return (
		<div onClick={onClick}
				 className={props.result[props.keyCount] === props.value || props.result[props.keyCount] === props.upperValue ? 'key-active' : 'key'}>

			<span>{props.value}</span>

		</div>
	)
}