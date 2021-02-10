import React, {ChangeEvent, useState} from 'react';
import {keySets} from '../../../accets/KeysArrays';
import './../../../App.css';
import {Login} from "../../Auth/Login";

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
            <div className="keyboard-row">
                {keySets.en[0].map((item) => <Button result={props.result} keyCount={props.keyCount} value={item.glyph}
                                                     onClickButton={onClickButton}
                                                     upperValue={item.upperGlyph} colorValue={item.color}
                                                     sizeValue={item.size} code={item.code}/>)}
            </div>
            <div className="keyboard-row">
                {keySets.en[1].map((item) => <Button result={props.result} keyCount={props.keyCount} value={item.glyph}
                                                     onClickButton={onClickButton}
                                                     upperValue={item.upperGlyph} colorValue={item.color}
                                                     sizeValue={item.size} code={item.code}/>)}
            </div>
            <div className="keyboard-row">
                {keySets.en[2].map((item) => <Button result={props.result} keyCount={props.keyCount} value={item.glyph}
                                                     onClickButton={onClickButton}
                                                     upperValue={item.upperGlyph} colorValue={item.color}
                                                     sizeValue={item.size} code={item.code}/>)}
            </div>
            <div className="keyboard-row">
                {keySets.en[3].map((item) => <Button result={props.result} keyCount={props.keyCount} value={item.glyph}
                                                     onClickButton={onClickButton}
                                                     upperValue={item.upperGlyph} colorValue={item.color}
                                                     sizeValue={item.size} code={item.code}/>)}
            </div>
            <div className="keyboard-row">
                {keySets.en[4].map((item) => <Button result={props.result} keyCount={props.keyCount} value={item.glyph}
                                                     onClickButton={onClickButton}
                                                     upperValue={item.upperGlyph} colorValue={item.color}
                                                     sizeValue={item.size} code={item.code}/>)}
            </div>
        </div>
    )
}

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
        <div onClick={onClick} className={props.result[props.keyCount] === props.value || props.result[props.keyCount] === props.upperValue ? "key-active" : "key"}>
            <span>{props.value}</span>

        </div>
    )
}