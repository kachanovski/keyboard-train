import React, { useEffect, useState } from 'react'
import { instance } from '../../api/instance';
import s from './ResultTable.module.css'

type dataRowType = {
    key: string,
    name: string,
    mistakes: number,
    time: string,

}

const TableContent: React.FC<dataRowType> = props => {
    return (
        <div className={s.table_row}>
            <div className={s.table_cell}>{props.name}</div>
            <div className={s.table_cell}>{props.mistakes}</div>
            <div className={s.table_cell}>{props.time}</div>
        </div>
    )
}
const ResultTable: React.FC = () => {
    const [dataSource, setDataSource] = useState<dataRowType[]>([])
    const [isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetchData('Promise')
    }, [])

    useEffect(() => {
        dataSource.length && setLoading(false)
    }, [dataSource])


    const fetchData = async (category?: string) => {
        const res = await instance.get(`result?category=${category}`);
        if (res.status === 201) {
            const newData = res.data.data.map((item: any) => ({ key: item._id, name: item.user_id, mistakes: item.result.mistakes, time: item.result.time })
            );
            setDataSource(newData)
        }
    }


    return (
        <div className={s.table} >
            <div className={s.table_row.concat(' ', s.table_header)}>
                <div className={s.table_cell}>Name</div>
                <div className={s.table_cell}>Mistakes</div>
                <div className={s.table_cell}>Time</div>
            </div>
            {isLoading ? 'Loading...' : dataSource.map(rowData => <TableContent {...rowData} />)}
        </div>
    )
}
export { ResultTable }

