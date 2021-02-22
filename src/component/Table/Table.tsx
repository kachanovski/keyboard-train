import React, { useEffect, useState } from 'react'
import s from './Table.module.css'

const data = [
    {
        key: '1',
        name: 'Mike',
        time: '00:00',
        score: 32,

    },
    {
        key: '2',
        name: 'John',
        time: '00:00',
        score: 42,

    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Score',
        dataIndex: 'score',
        key: 'score',
    }
];

type dataRowType = {
    key: string,
    name: string,
    time: string,
    score: number
}

const TableContentRow: React.FC<dataRowType> = props => {
    return (
        <div className={s.table_row}>
            <div className={s.table_cell}>{props.name}</div>
            <div className={s.table_cell}>{props.time}</div>
            <div className={s.table_cell}>{props.score}</div>
        </div>
    )
}
const ResultTable: React.FC = () => {
    const [dataSource, setDataSource] = useState<dataRowType[]>([])
    const [isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        setTimeout(() => {
            setDataSource(data)
            setLoading(false)
        }, 1000);
    }

    return (
        <div className={s.table} >
            <div className={s.table_row.concat(' ', s.table_header)}>
                <div className={s.table_cell}>Name</div>
                <div className={s.table_cell}>Time</div>
                <div className={s.table_cell}>Score</div>
            </div>
            {isLoading ? 'Loading...' : dataSource.map(rowData => <TableContentRow {...rowData} />)}
        </div>
    )
}
export { ResultTable }

