import React from 'react';
import { CheckField } from './CheckField/CheckField';
import { KeyBoard } from './Keyboard/Keyboard';
import { MistakesCount } from './Mistakes/Mistakes';
import './../../App.css'
import { Timer } from '../Timer/Timer';


export const Layout = () => {
    return (
        <div className={'layout'}>
            <div className={'context-container'}>
                <div className={'context-container__inputs-fields'}>
                    <CheckField />
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