import React, {FC, useEffect, useState} from 'react';
import styles from './Modal.module.css'
import {ITableItems} from "../../types/types";

interface IModalProps{
    setModalActive: (arg0: boolean)=>void;
    headLabel:string;
    headText:string;
    currentItem?: ITableItems;
    handleSubmit:(arg0:ITableItems,arg1:string)=>void
}

const Modal: FC<IModalProps> = (props) => {
    const defaultData:ITableItems = {
        id: "",
        name: "",
        description: "",
        measurement_units: "",
        code: ""
    }
    const {
        setModalActive,
        headLabel,
        headText,
        currentItem,
        handleSubmit
    }=props;
    const [formData, setFormData] = useState<ITableItems>(currentItem??defaultData)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    return (
        <div className={styles.modalContent}>
            <div className={styles.navContainer}>
                <button className={styles.homeButton}></button>
                <button onClick={()=>setModalActive(false)} className={styles.closeBtn}></button>
            </div>
            <form id="itemForm" onSubmit={()=>handleSubmit(formData,currentItem?.id??"")}>
                <div className={styles.formGroup}>
                    <label className={styles.headLabel}>{headLabel}</label>
                    <div><span className={styles.headText}>{headText}</span></div>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Название</label>
                    <input className={styles.input} type="text" name="name" placeholder={currentItem?.name} onChange={handleChange}/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Единицы измерения</label>
                    <input
                        className={styles.input} type="text" name="measurement_units" placeholder={currentItem?.measurement_units} onChange={handleChange}/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Артикул/код</label>
                    <input className={styles.input} type="text" name="code" placeholder={currentItem?.code} onChange={handleChange}/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Описание</label>
                    <textarea className={styles.description} name="description" placeholder={currentItem?.description} onChange={handleChange}/>
                </div>
                <div className={styles.buttonGroup}>
                    <button type="button" className={styles.cancelButton}>Отменить</button>
                    <button type="submit" className={styles.confirmButton}>Подтвердить</button>
                </div>
            </form>
        </div>
    );
};

export default Modal;
