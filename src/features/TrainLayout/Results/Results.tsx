import React, { useEffect, useState } from 'react'
import s from './Results.module.css'

type TimerPropsType = {
	isActiveTimer: boolean
	setSeconds: (sec: any) => number
	mistakes: number
	seconds: number
}

export const Results = (props: any) => {

	const [displayTime, setDisplayTime] = useState<{ m: string, s: string }>({ m: '00', s: '00' })
	useEffect(() => {
		let id = setInterval(() => {
			if (props.isActiveTimer) {
				props.setSeconds((sec: number) => sec + 1)
			}
		}, 1000)
		return () => clearInterval(id)
	}, [props.isActiveTimer])

	useEffect(() => {
		displayValue(props.seconds)
	}, [props.seconds])

	function displayValue(seconds: number) {
		const displaySeconds = (seconds % 60).toString().padStart(2, '0');
		const displayMinutes = Math.floor(seconds / 60).toString().padStart(2, '0');
		setDisplayTime({ ...displayTime, m: displayMinutes, s: displaySeconds })
	}

	return (
		<div className={s.results}>
			<div className={s.container}>
				<div className={s.title}>
					<span>Время: {displayTime.m}:{displayTime.s}</span>
				</div>
				<div className={s.title}>
					<span>Ошибок: {props.mistakes}</span>
				</div>
			</div>
		</div>
	)
}