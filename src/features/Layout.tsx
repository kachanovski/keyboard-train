import React from 'react';
import { InputsField } from './InputsField';
import { KeyBoard } from './Keyboard';
import { MistakesCount } from './Mistakes';
import './../App.css'
import { Timer } from './Timer/Timer';


export const Layout = () => {
    return (
        <div className={'layout'}>
            <div className={'context-container'}>
                <div className={'context-container__inputs-fields'}>
                    <InputsField />
                </div>
                <div className={'context-container__controls'}>
                    <MistakesCount />
                    <Timer />
                </div>
            </div>
            <div className={'keyboard'}>
                <KeyBoard />
            </div>
        </div>
    )
}