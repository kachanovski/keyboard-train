import React from 'react'
import { keySets } from '../../../accets/KeysArrays'
import './../../../App.css'
import { Button } from './KeyBoardButton'

type KeyBoardPropsType = {
	result: Array<string>
	keyCount: number
}
export const KeyBoard = (props: KeyBoardPropsType) => {

	const onClickButton = (code: number) => {
		console.log(code)
	}

	return (
		<div>
			<div className='keyboard-row'>
				{keySets.en[0].map((item, id) => <Button key={id} result={props.result} keyCount={props.keyCount} value={item.glyph}
																						 onClickButton={onClickButton}
																						 upperValue={item.upperGlyph} colorValue={item.color}
																						 sizeValue={item.size} code={item.code} />)}
			</div>
			<div className='keyboard-row'>
				{keySets.en[1].map((item, id) => <Button key={id} result={props.result} keyCount={props.keyCount} value={item.glyph}
																						 onClickButton={onClickButton}
																						 upperValue={item.upperGlyph} colorValue={item.color}
																						 sizeValue={item.size} code={item.code} />)}
			</div>
			<div className='keyboard-row'>
				{keySets.en[2].map((item, id) => <Button key={id} result={props.result} keyCount={props.keyCount} value={item.glyph}
																						 onClickButton={onClickButton}
																						 upperValue={item.upperGlyph} colorValue={item.color}
																						 sizeValue={item.size} code={item.code} />)}
			</div>
			<div className='keyboard-row'>
				{keySets.en[3].map((item, id) => <Button key={id} result={props.result} keyCount={props.keyCount} value={item.glyph}
																						 onClickButton={onClickButton}
																						 upperValue={item.upperGlyph} colorValue={item.color}
																						 sizeValue={item.size} code={item.code} />)}
			</div>
			<div className='keyboard-row'>
				{keySets.en[4].map((item, id) => <Button key={id} result={props.result} keyCount={props.keyCount} value={item.glyph}
																						 onClickButton={onClickButton}
																						 upperValue={item.upperGlyph} colorValue={item.color}
																						 sizeValue={item.size} code={item.code} />)}
			</div>
		</div>
	)
}

