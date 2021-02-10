import React, {ChangeEvent, useState} from 'react';
import {keySets} from '../../../accets/KeysArrays';
import './../../../App.css';
import {Login} from "../../Auth/Login";

type KeyBoardPropsType = {
    result: Array<string>
    keyCount: number
}
export const KeyBoard = (props: KeyBoardPropsType) => {

    const onClickButton = (code: any) => {
        console.log(code)
    }

    console.log(props.result[props.keyCount])
    console.log(props.result)

    return (
        <div>
            <div className="keyboard-row">
                {keySets.en[0].map((item) => <Button result={props.result} count={props.keyCount} value={item.glyph}
                                                     onClickButton={onClickButton}
                                                     upperValue={item.upperGlyph} colorValue={item.color}
                                                     sizeValue={item.size} code={item.code}/>)}
            </div>
            <div className="keyboard-row">
                {keySets.en[1].map((item) => <Button result={props.result} count={props.keyCount} value={item.glyph}
                                                     onClickButton={onClickButton}
                                                     upperValue={item.upperGlyph} colorValue={item.color}
                                                     sizeValue={item.size} code={item.code}/>)}
            </div>
            <div className="keyboard-row">
                {keySets.en[2].map((item) => <Button result={props.result} count={props.keyCount} value={item.glyph}
                                                     onClickButton={onClickButton}
                                                     upperValue={item.upperGlyph} colorValue={item.color}
                                                     sizeValue={item.size} code={item.code}/>)}
            </div>
            <div className="keyboard-row">
                {keySets.en[3].map((item) => <Button result={props.result} count={props.keyCount} value={item.glyph}
                                                     onClickButton={onClickButton}
                                                     upperValue={item.upperGlyph} colorValue={item.color}
                                                     sizeValue={item.size} code={item.code}/>)}
            </div>
            <div className="keyboard-row">
                {keySets.en[4].map((item) => <Button result={props.result} count={props.keyCount}  value={item.glyph}
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
        <div onClick={onClick} className={props.result[props.count] === props.value || props.result[props.count] === props.upperValue ? "key-active" : "key"}>
            <span>{props.value}</span>

        </div>
    )
}