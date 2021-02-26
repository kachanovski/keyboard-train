import React, { Dispatch, useEffect, useState } from 'react'
import s from './Results.module.css'


type TimerPropsType = {
	isActiveTimer: boolean
	setSeconds: Dispatch<(prevState: number) => number>
	mistakes: number
	seconds: number
}

export const Results: React.FC<TimerPropsType> = ({ isActiveTimer, setSeconds, mistakes, seconds }) => {

	const [displayTime, setDisplayTime] = useState<{ m: string, s: string }>({ m: '00', s: '00' })
	useEffect(() => {
		let id = setInterval(() => {
			if (isActiveTimer) {
				setSeconds((sec: number) => sec + 1)
			}
		}, 1000)
		return () => clearInterval(id)
	}, [isActiveTimer, setSeconds])

	useEffect(() => {
		const displayValue = (seconds: number) => {
			const displaySeconds = (seconds % 60).toString().padStart(2, '0');
			const displayMinutes = Math.floor(seconds / 60).toString().padStart(2, '0');
			setDisplayTime(d => ({ ...d, m: displayMinutes, s: displaySeconds }))
		}
		displayValue(seconds)
	}, [seconds])



	return (
		<div className={s.results}>
			<div className={s.container}>
				<div className={s.title}>
					<span>Время: {displayTime.m}:{displayTime.s}</span>
				</div>
				<div className={s.title}>
					<span>Ошибок: {mistakes}</span>
				</div>
			</div>
		</div>
	)
}