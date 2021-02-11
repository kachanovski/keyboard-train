import React, { useRef } from 'react'
import './../../../App.css'

type CheckFieldType = {
	code: string
	codeArea: string
	onChangeValue: (value: string) => void
	isEnd: boolean
}

export const CheckField = (props: CheckFieldType) => {

	const refT = useRef<any>()

	const onChangeValueInComponent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		props.onChangeValue(e.currentTarget.value)
	}

	const onChangeValueOndisplay = (e: React.KeyboardEvent<HTMLDivElement>) => {

	}

	return (
		<div onKeyDown={onChangeValueOndisplay} className={'wrapper'}>
			<span>{props.code}</span>
		{/*	<textarea style={{zIndex: -2}} autoFocus ref={refT} value={props.codeArea} onChange={onChangeValueInComponent} />*/}
			<textarea
				readOnly={props.isEnd}
				autoFocus
				ref={refT}
				value={props.codeArea}
				onChange={onChangeValueInComponent}
			/>
		</div>
	)
}
