import React, { useRef } from 'react'
import s from './CheckField.module.css'

type CheckFieldType = {
	keyCount: number
	valuesInDisplay: string
	valueInInput: string
	onChangeInputValue: (value: string) => void
	isEnd: boolean
	valueInDisplayToArray: Array<string>
}

export const CheckField = (props: CheckFieldType) => {

	const refT = useRef<any>()

	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		props.onChangeInputValue(e.currentTarget.value)
	}

	const onChangeValueOndisplay = (e: React.KeyboardEvent<HTMLDivElement>) => {

	}

	return (
		<div className={s.check_field}>
			<div onKeyDown={onChangeValueOndisplay} className={s.container}>
				<div className={s.text_field}>
					{props.isEnd
						? <h1>Great job!</h1>
						: <div>
							{props.valueInDisplayToArray.map((k, id) => {
								const spam = id === props.keyCount ? `${s.change_letter}` : `${s.letter}`
								return <span className={spam}>{k}</span>
							})}
						</div>
					}

				</div>
				{/*	<textarea style={{zIndex: -2}} autoFocus ref={refT} value={props.codeArea} onChange={onChangeValueInComponent} />*/}
				<textarea
					className={s.textArea}
					readOnly={props.isEnd}
					autoFocus
					ref={refT}
					value={props.valueInInput}
					onChange={onChange}
				/>
			</div>
		</div>
	)
}
