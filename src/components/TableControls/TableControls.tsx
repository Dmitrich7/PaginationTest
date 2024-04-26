import React, {FC, useState} from 'react';
import styles from './TableControls.module.css'

interface TableControlsProps{
    pagination: (string|number)[];
    currentPage: number;
    onCurrentPageChange: (arg0:number)=>void
    onPageSizeChange: (arg0:number)=>void
}

const TableControls: FC<TableControlsProps> = ({pagination,currentPage,onCurrentPageChange,onPageSizeChange}) => {

    return (
        <div className={styles.tableControlsContainer}>
            {pagination?.map((value:number|string)=>(
                <button key={value}
                        className={currentPage===value?styles.pagButtActive:styles.pagButt}
                        onClick={()=>onCurrentPageChange(typeof value != 'string'?value:0)}
                        disabled={typeof value==='string'||currentPage===value}
                >
                    {value}
                </button>
            ))}
            <label className={styles.selectContainer}>Показывать по:
                <select className={styles.select} onChange={(e)=>onPageSizeChange(+e.target.value)}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                </select>
            </label>
        </div>
    );
};

export default TableControls;
