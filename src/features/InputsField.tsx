import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import './../App.css';

export const InputsField = () => {
    const [pattern, setPattern] = useState('');
    const [currentText, setCurrentText] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement>(null);


    useEffect(() => {
        textareaRef.current?.focus();
        // textareaRef.current.selectionStart = textareaRef.current?.value.length;
        // textareaRef.current?.selectionEnd = textareaRef.current?.value.length;
    }, [currentText])

    const charCompare = (currentValue: string, pattern: string) => {
        return currentValue === pattern[currentText.length];
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        const val = e.key;
        if (charCompare(val, pattern)) {
            setCurrentText((prev: string) => prev + val);
        }
    }
    // const onFocusSet = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    //     e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length);
    // }
    return (
        <div className={'wrapper'}>
            <textarea defaultValue={pattern}
                      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setPattern(event.target.value)}/>
            <textarea ref={textareaRef}
                      onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => onKeyDown(e)}
                      // onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => onFocusSet(e)}
                      defaultValue={currentText}/>

        </div>
    )
}
