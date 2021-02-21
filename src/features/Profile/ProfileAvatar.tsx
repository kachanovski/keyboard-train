import React from 'react'
import { Avatar, Button, Upload } from 'antd'
import { UploadOutlined, UserOutlined } from '@ant-design/icons'

export const ProfileAvatar = () => {
	return (
		<>
			<div >
				<Avatar size={200} icon={<UserOutlined />} />
			</div>
			<div>
				<Upload>
					<Button>
						<UploadOutlined /> Click to Upload
					</Button>
				</Upload>
			</div>
		</>
	)
}

