import s from "./Profile.module.css";
import React, {useState} from "react";

type ProfileResultMenuPropsType = {
    getStatistick: (value: number) => void
    activeButtons: number
}

export const ProfileResultMenu = (props: ProfileResultMenuPropsType) => {

    const getStatistickCat1 = () => {
        props.getStatistick(1)
    }
    const getStatistickCat2 = () => {
        props.getStatistick(2)
    }
    const getStatistickCat3 = () => {
        props.getStatistick(3)
    }

    return (
        <div className={s.category}>
            <div onClick={getStatistickCat1} className={props.activeButtons === 1 ? s.catActive : s.cat}>
                Сategory 1
            </div>
            <div onClick={getStatistickCat2} className={props.activeButtons === 2 ? s.catActive : s.cat}>
                Сategory 2
            </div>
            <div onClick={getStatistickCat3} className={props.activeButtons === 3 ? s.catActive : s.cat}>
                Сategory 3
            </div>
        </div>
    )

}