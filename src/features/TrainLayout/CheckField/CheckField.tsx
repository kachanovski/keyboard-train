import React, { useRef } from 'react'
import './../../../App.css'
import { AppTS } from './test'

type CheckFieldType = {
    code: string
    codeArea: string
    onChangeValue: (value: string) => void
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
			{/* <codearea style={{zIndex: -2}} autoFocus ref={refT} value={codeArea} onChange={onChangeValue} /> */}
			<textarea
				autoFocus
				ref={refT}
				value={props.codeArea}
				onChange={onChangeValueInComponent}
			/>

			<AppTS />
		</div>
	)
}
