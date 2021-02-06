import React, { ChangeEvent, useRef, useState } from 'react';
import './../../../App.css';

export const CheckField = () => {

    const [text] = useState('Привет мир!!!')
    const [textArea, setTextArea] = useState<string>('')

    const refT = useRef<any>()

    const [error, setError] = useState<number>(0)

    const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value
        const textLength = value.length - 1
        setTextArea(value)

        check(value, textLength)
    }
    const onChangeValueOndisplay = (e: React.KeyboardEvent<HTMLDivElement>) => {
        // const value = e
        // const textLength = value.length - 1
        // setTextArea(value)

        // check(value, textLength)
        console.log('13');
        
    }
    const check = (value: string, textLength: number) => {
        if (value[textLength] !== text[textLength]) {
            setError(error + 1)
        }
        if (value.length === text.length) {
            alert("Yo, goo job!!!")
        }
    }

    return (
        <div onKeyDown={onChangeValueOndisplay} className={'wrapper'}>
            <span>
                {text} <br />
                {error}
            </span>
            {/* <textarea style={{zIndex: -2}} autoFocus ref={refT} value={textArea} onChange={onChangeValue} /> */}
            <textarea autoFocus ref={refT} value={textArea} onChange={onChangeValue} />

        </div>
    )
}
