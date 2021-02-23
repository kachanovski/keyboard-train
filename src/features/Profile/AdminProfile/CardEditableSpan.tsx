import React, {ChangeEvent, useState} from 'react';
import s from "./AdminProfile.module.css";
import {useSelector} from "react-redux";
import {StateType} from "../../../redux/store";
import {cardsType} from "../../../redux/reducers/AdminReducer";


type EditableSpanPropsType = {
    value: string
    // onChange?: (newValue: string) => void
    removeCard: (id: string) => void
}

export const CardEditableSpan = React.memo(function (props: EditableSpanPropsType) {
    const cards = useSelector<StateType, Array<cardsType>>(state => state.admin.cards)

    // AuthorMode
    let [editAuthorMode, setEditAuthorMode] = useState(false);
    const activateAuthorCodeMode = () => {
        setEditAuthorMode(true);
        console.log('editCodeMode: ', editAuthorMode)
        // setTitle(props.value);
    }
    const deActivateEditAuthorMode = () => {
        setEditAuthorMode(false);
        console.log('editCodeMode: ', editAuthorMode)
        // props.onChange(title);
    }

// CodeMode
    let [editCodeMode, setEditCodeMode] = useState(false);
    const activateEditCodeMode = () => {
        setEditCodeMode(true);
        console.log('editCodeMode: ', editCodeMode)
        // setTitle(props.value);
    }
    const deActivateEditCodeMode = () => {
        setEditCodeMode(false);
        console.log('editCodeMode: ', editCodeMode)
        // props.onChange(title);
    }


    // Title
    let [title, setTitle] = useState(props.value);
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return <>
        <div className={s.cards}>

            {editCodeMode
                ? <div>editmode true
                    <input/>
                    <input/>
                    <input/>
                    <button onClick={() => {
                        deActivateEditCodeMode()
                    }}>save
                    </button>
                </div>
                : <div>editmode false
                    {cards.map(c => <div key={c._id} className={s.cardContainer}>
                        <span>code: {c.code}</span>
                        <span>category: {c.category}</span>
                        <span>author: {c.author}</span>
                        <button onClick={() => props.removeCard(c._id)}>X</button>
                        <button onClick={() => {
                            activateEditCodeMode()
                        }}>edit
                        </button>

                    </div>)}
                </div>}


        </div>


    </>
});

// {cards.map(c => <div key={c._id} className={s.cardContainer}>
//     {editCodeMode
//         ? <> <input onChange={changeTitle} autoFocus onBlur={deActivateEditCodeMode}/></>
//         : <><span>code: {c.code}</span>
//             <button onClick={() => props.removeCard(c._id)}>X</button>
//             <button onClick={() => {
//                 activateEditCodeMode()
//             }}>edit
//             </button>
//         </>
//     }
// </div>)}
//
// {cards.map(c => <div key={c._id} className={s.cardContainer}>
//     {editAuthorMode
//         ? <> <input onChange={changeTitle} autoFocus onBlur={deActivateEditAuthorMode}/></>
//         : <><span>author: {c.author}</span>
//             <button onClick={() => props.removeCard(c._id)}>X</button>
//             <button onClick={() => {
//                 activateAuthorCodeMode()
//             }}>edit
//             </button>
//         </>
//     }
// </div>)}

// <span>category: {c.category}</span>
// <span>author: {c.author}</span>