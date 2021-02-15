import React, { useEffect } from 'react'
import s from './Results.module.css'

type TimerPropsType = {
	isActiveTimer: boolean
	setSeconds: (sec: any) => number
	mistakes: number
	seconds: number
}

export const Results = (props: any) => {

	useEffect(() => {
		let id = setInterval(() => {
			if (props.isActiveTimer) {
				props.setSeconds((sec: number) => sec + 1)
			}
		}, 1000)
		return () => clearInterval(id)

	}, [props.isActiveTimer])

	return (
		<div className={s.results}>
			<div className={s.container}>
				<div className={s.title}>
					<span>Время: {props.seconds}</span>
				</div>
				<div className={s.title}>
					<span>Ошибок: {props.mistakes}</span>
				</div>
			</div>
		</div>
	)
}