import React, { useRef } from 'react'
import './../TrainLayout.css'

type CheckFieldType = {
	valueInInput: string
	onChangeInputValue: (value: string) => void
	isEnd: boolean
}

export const TrainTextField = (props: CheckFieldType) => {

	const refT = useRef<any>()

	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		props.onChangeInputValue(e.currentTarget.value)
	}
	return (
		<>
			{/*	<textarea style={{zIndex: -2}} autoFocus ref={refT} value={props.codeArea} onChange={onChangeValueInComponent} />*/}
			<textarea
				className={'textArea'}
				readOnly={props.isEnd}
				autoFocus
				ref={refT}
				value={props.valueInInput}
				onChange={onChange}
			/>
		</>
	)
}
