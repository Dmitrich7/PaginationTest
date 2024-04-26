import React, {FC, useState} from 'react';
import {ITableItems} from "../../types/types";
import styles from './MyTable.module.css';
import Portal from '../Portal/Portal';
import Modal from "../Modal/Modal";


interface IMyTableProps{
    tableItems: ITableItems[];
}

const MyTable: FC<IMyTableProps> = ({tableItems}) => {
    const [modalActive,setModalActive] = useState(false);
    const [currentItem, setCurrentItem] = useState<ITableItems>();
    const handleFormClick = (item:ITableItems)=>{
        setModalActive(true)
        setCurrentItem(item)
    }

    return (
        <>
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
                        <td className={styles.buttonTd}><button onClick={()=>handleFormClick(item)} className={styles.changeButton}></button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            {
                modalActive?
                    <Portal className={styles.portal}>
                        <Modal
                            setModalActive={setModalActive}
                            currentItem={currentItem}
                            headLabel={"Редактировать позицию " + currentItem?.name}
                            headText={"Заполните поля, которые хотите отредактировать. Незаполненые поля остануться неизменёнными"}
                        />
                    </Portal>
                    :
                    null
            }
        </>
    );
};

export default MyTable;
