import s from "./Profile.module.css";
import React, {useState} from "react";
import {StatisticsProfile} from "./StatisticsProfile";
import {ProfileResultMenu} from "./ProfileResultMenu";


export type StatisticksType = {
    time: number
    mistakes: number
    speed: number
}
export const ProfileResult = () => {

    const [statistics, setStatistics] = useState<StatisticksType[]>([{
        time: 20,
        mistakes: 0,
        speed: 10
    }])

    const [activeButton, setActiveButton] = useState<number>(0)

    function getStatistick(value: number) {
        const newStatistick: StatisticksType = {
            time: Math.floor(Math.random() * 100),
            mistakes: Math.floor(Math.random() * 100),
            speed: Math.floor(Math.random() * 100)
        }
        setStatistics([newStatistick])
        setActiveButton(value)
    }

    return (
        <div className={s.resultProfile}>
            <div className={s.myResult}>
                My result:
            </div>
            <ProfileResultMenu getStatistick={getStatistick} activeButtons={activeButton}/>
            <StatisticsProfile statistics={statistics}/>
        </div>
    )
}

