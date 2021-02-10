import React, {ChangeEvent, useState} from 'react';
import {keySets} from '../../../accets/KeysArrays';
import './../../../App.css';
import {Login} from "../../Auth/Login";


export const KeyBoard = () => {

    const onClickButton = (code: any) => {
        console.log(code)
    }

    const [text, setText] = useState<Array<string>>([])
    const [count, setCount] = useState(0)
    const [string, setString] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const lastSymbol = e.currentTarget.value.slice(-1)
        setCount(count + 1)
        setText([...text, lastSymbol])
        setString(text.join(""))
    }

    return (
        <div>
            <input value={string} onChange={onChangeHandler}/>
            <div className="keyboard-row">
                {keySets.en[0].map((item) => <Button count={count} text={text} value={item.glyph}
                                                     onClickButton={onClickButton}
                                                     upperValue={item.upperGlyph} colorValue={item.color}
                                                     sizeValue={item.size} code={item.code}/>)}
            </div>
            <div className="keyboard-row">
                {keySets.en[1].map((item) => <Button count={count} text={text} value={item.glyph}
                                                     onClickButton={onClickButton}
                                                     upperValue={item.upperGlyph} colorValue={item.color}
                                                     sizeValue={item.size} code={item.code}/>)}
            </div>
            <div className="keyboard-row">
                {keySets.en[2].map((item) => <Button count={count} text={text} value={item.glyph}
                                                     onClickButton={onClickButton}
                                                     upperValue={item.upperGlyph} colorValue={item.color}
                                                     sizeValue={item.size} code={item.code}/>)}
            </div>
            <div className="keyboard-row">
                {keySets.en[3].map((item) => <Button count={count} text={text} value={item.glyph}
                                                     onClickButton={onClickButton}
                                                     upperValue={item.upperGlyph} colorValue={item.color}
                                                     sizeValue={item.size} code={item.code}/>)}
            </div>
            <div className="keyboard-row">
                {keySets.en[4].map((item) => <Button count={count} text={text} value={item.glyph}
                                                     onClickButton={onClickButton}
                                                     upperValue={item.upperGlyph} colorValue={item.color}
                                                     sizeValue={item.size} code={item.code}/>)}
            </div>
        </div>
    )
}

export const Button = (props: any) => {

    const onClick = () => {
        props.onClickButton(props.code)
    }

    return (
        <div onClick={onClick} className={props.text[props.count - 1] === props.value ? "key-active" : "key"}>
            <span>{props.value}</span>

        </div>
    )
}