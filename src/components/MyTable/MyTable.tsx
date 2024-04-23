import React, {FC} from 'react';
import {ITableItems} from "../../types/types";
import styles from './MyTable.module.css'

interface IMyTableProps{
    tableItems: ITableItems[]
}

const MyTable: FC<IMyTableProps> = ({tableItems}) => {
    return (

            <table className={styles.table}>
                <thead className={styles.headersContainer}>
                    <tr>
                        <th className={styles.th}>Названиe</th>
                        <th>Единица измерения</th>
                        <th>Артикул/код</th>
                        <th className={styles.iconHeader}></th>
                    </tr>
                </thead>
                <tbody>
                {tableItems.map(item=>(
                    <tr key={item.id} className={styles.recordContainer}>
                        <td>{item.name}</td>
                        <td>{item.measurement_units}</td>
                        <td>{item.code}</td>
                        <td className={styles.buttonTd}><button className={styles.changeButton}></button></td>
                    </tr>
                ))}
                </tbody>
            </table>
    );
};

export default MyTable;
