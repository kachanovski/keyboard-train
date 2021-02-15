import React from 'react'
import s from './Ketboard.module.css'

type ButtonPropsType = {
	keyCount: number
	result: Array<string>
	value: string
	onClickButton: (code: number) => void
	upperValue: string
	colorValue: string
	sizeValue: string
	code: number
	classname: string
}
// className={ }>
export const Button = (props: ButtonPropsType) => {

	const onClick = () => {
		props.onClickButton(props.code)
	}
	const classNameForButton = props.result[props.keyCount] === props.value
		|| props.result[props.keyCount] === props.upperValue ? `${s.nextButton}` : props.classname
	console.log(classNameForButton)
	return (
		<div onClick={onClick}
				 className={classNameForButton}>
			<span>
				{props.value}
			</span>
		</div>
	)
}