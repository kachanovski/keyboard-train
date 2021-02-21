import React from 'react'
import { ProfileAvatar } from './ProfileAvatar'
import { ProfileResult } from './ProfileResult'
import { Col, Row } from 'antd'


export function Profile() {
	return (
		<>
			<Row>
				<Col span={18} push={6}>
					<ProfileResult />
				</Col>
				<Col span={6} pull={18}>
					<ProfileAvatar />
				</Col>
			</Row>
		</>
	)
}

