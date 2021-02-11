import React, { useEffect } from 'react'

type TimerPropsType = {
	isActiveTimer: boolean
	setSeconds: (sec: any) => number
}

export const Timer = (props: any) => {

	useEffect(() => {
		let id = setInterval(() => {
			if (props.isActiveTimer) {
				props.setSeconds( (sec: number) => sec+1)
			}
		}, 1000)
		return () => clearInterval(id)

	}, [props.isActiveTimer])

	return (
		<div>
				Время: <span>{props.seconds}</span>
		</div>
	)
}