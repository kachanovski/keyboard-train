import s from "./Profile.module.css";
import React from "react";
import {StatisticksType} from "./ProfileResult";

type StatisticsPropsType = {
    statistics: StatisticksType[]
}

export const StatisticsProfile = (props: StatisticsPropsType) => {
    return (
        <div className={s.statistic}>
            <div className={s.parameter}>
                Time: {props.statistics.map(s => s.time)}
            </div>
            <div className={s.parameter}>
                Mistakes: {props.statistics.map(s => s.mistakes)}
            </div>
            <div className={s.parameter}>
                Speed: {props.statistics.map(s => s.speed)}
            </div>
        </div>
    )
}