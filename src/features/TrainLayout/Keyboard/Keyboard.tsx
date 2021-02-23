import React from 'react'
import { keySets } from '../../../accets/KeysArrays'
import s from './Ketboard.module.css'
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
		<div className={s.keyboard}>
			<div className={s.container}>
				<div className={s.keyboard_row_first}>
					{keySets.en[0].map((item, id) => <Button key={id} result={props.result} keyCount={props.keyCount}
																									 value={item.glyph}
																									 classname={`${s.keyboard_button} + ${s.button_first_row}`}
																									 onClickButton={onClickButton}
																									 upperValue={item.upperGlyph} colorValue={item.color}
																									 sizeValue={item.size} code={item.code} />)}
				</div>
				<div className={s.keyboard_row_second}>
					{keySets.en[1].map((item, id) => <Button key={id} result={props.result} keyCount={props.keyCount}
																									 value={item.glyph}
																									 classname={`${s.keyboard_button} + ${s.button_second_row}`}
																									 onClickButton={onClickButton}
																									 upperValue={item.upperGlyph} colorValue={item.color}
																									 sizeValue={item.size} code={item.code} />)}
				</div>
				<div className={s.keyboard_row_third}>
					{keySets.en[2].map((item, id) => <Button key={id} result={props.result} keyCount={props.keyCount}
																									 value={item.glyph}
																									 classname={`${s.keyboard_button} + ${s.button_third_row}`}
																									 onClickButton={onClickButton}
																									 upperValue={item.upperGlyph} colorValue={item.color}
																									 sizeValue={item.size} code={item.code} />)}
				</div>
				<div className={s.keyboard_row_fourth}>
					{keySets.en[3].map((item, id) => <Button key={id} result={props.result} keyCount={props.keyCount}
																									 value={item.glyph}
																									 classname={`${s.keyboard_button} + ${s.button_fourth_row}`}
																									 onClickButton={onClickButton}
																									 upperValue={item.upperGlyph} colorValue={item.color}
																									 sizeValue={item.size} code={item.code} />)}
				</div>
				<div className={s.keyboard_row_last}>
					{keySets.en[4].map((item, id) => <Button key={id} result={props.result} keyCount={props.keyCount}
																									 value={item.glyph}
																									 classname={`${s.keyboard_button} + ${s.button_last_row}`}
																									 onClickButton={onClickButton}
																									 upperValue={item.upperGlyph} colorValue={item.color}
																									 sizeValue={item.size} code={item.code} />)}
				</div>
			</div>
		</div>
	)
}

