import React from 'react';
import { keySets } from '../accets/KeysArrays';
import './../App.css'

export const KeyBoard = () => {

    const onClickButton = (code: any) => {
        console.log(code)
    }

    return (
        <div>
            <div className="keyboard-row">
                {keySets.en[0].map((item) => <Button value={item.glyph} onClickButton={onClickButton} upperValue={item.upperGlyph} colorValue={item.color} sizeValue={item.size} code={item.code} />)}
            </div>
            <div className="keyboard-row">
                {keySets.en[1].map((item) => <Button value={item.glyph} onClickButton={onClickButton} upperValue={item.upperGlyph} colorValue={item.color} sizeValue={item.size} code={item.code} />)}
            </div>
            <div className="keyboard-row">
                {keySets.en[2].map((item) => <Button value={item.glyph} onClickButton={onClickButton} upperValue={item.upperGlyph} colorValue={item.color} sizeValue={item.size} code={item.code} />)}
            </div>
            <div className="keyboard-row">
                {keySets.en[3].map((item) => <Button value={item.glyph} onClickButton={onClickButton} upperValue={item.upperGlyph} colorValue={item.color} sizeValue={item.size} code={item.code} />)}
            </div>
            <div className="keyboard-row">
                {keySets.en[4].map((item) => <Button value={item.glyph} onClickButton={onClickButton} upperValue={item.upperGlyph} colorValue={item.color} sizeValue={item.size} code={item.code} />)}
            </div>
        </div>
    )
}

export const Button = (props: any) => {

    const onClick = () => {
        props.onClickButton(props.code)
    }

    return (
        <div onClick={onClick} className="key">
            <span >{props.value}</span>

        </div>
    )
}