import React from 'react'
import './../TrainLayout.css'
import { Card, Result } from 'antd'

type CheckFieldType = {
	keyCount: number
	isEnd: boolean
	valueInDisplayToArray: Array<string>
	mistakes: number
	time: number
	category: string
}

export const TrainCheckField = (props: CheckFieldType) => {

	return (
		<>
			{props.isEnd
				? <div className={'checkField'}>
					<Result
						status='success'
						title={`Ошибок ${props.mistakes}`}
						subTitle={`Время ${props.time}`}
					/>
				</div>
				:
					<Card title={props.category} bordered={false} style={{ height: '56%', marginBottom: 20 }}>
						{props.valueInDisplayToArray.map((k, id) => {
							const spam = id === props.keyCount ? 'change_letter' : 'letter'
							return <span className={spam}>{k}</span>
						})}
					</Card>

			}
		</>
	)
}
