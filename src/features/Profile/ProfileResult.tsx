import s from './Profile.module.css'
import React, { useState } from 'react'
import { StatisticsProfile } from './StatisticsProfile'
import { ProfileResultMenu } from './ProfileResultMenu'
import { Menu, Tabs } from 'antd'
import { trainKeyBoardCategories } from '../../App'
import { Table, Tag, Space } from 'antd';
import { NavLink } from 'react-router-dom'


export type StatisticksType = {
	time: number
	mistakes: number
	speed: number
}
export const ProfileResult = () => {
	const { TabPane } = Tabs
    const { Column, ColumnGroup } = Table;

    const data = [
        {
            date: '1.2.1883',
            time: 12,
            mistakes: 4,
        },
        {
            date: '1.2.1883',
            time: 12,
            mistakes: 4,
        }, {
            date: '1.2.1883',
            time: 12,
            mistakes: 4,
        }, {
            date: '1.2.1883',
            time: 12,
            mistakes: 4,
        }, {
            date: '1.2.1883',
            time: 12,
            mistakes: 4,
        },
        {
            date: '1.2.1883',
            time: 12,
            mistakes: 4,
        },
    ];

	function callback(key: string) {
		console.log(key)
	}

	return (
		<Tabs onChange={callback}>

			{trainKeyBoardCategories.map((c, id) =>
				<TabPane tab={c.name} key={id}>
            <Table dataSource={data}>
                <Column title="Date" dataIndex="date" key="date"/>
                <Column title="Time" dataIndex="time" key="address" />
                <Column title="mistakes" dataIndex="mistakes" key="mistakes" />
            </Table>
				</TabPane>
			)}
		</Tabs>
	)
}

