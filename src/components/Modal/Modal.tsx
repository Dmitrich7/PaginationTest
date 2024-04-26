import React, {FC} from 'react';
import styles from './Modal.module.css'

interface IModalProps{
    setModalActive: (arg0: boolean)=>void;
}

const Modal: FC<IModalProps> = (props) => {
    const {
        setModalActive
    }=props;
    return (
        <div className={styles.modalContent}>
            <div className={styles.navContainer}>
                <button className={styles.homeButton}></button>
                <button onClick={()=>setModalActive(false)} className={styles.closeBtn}></button>
            </div>
            <form>
                <div className={styles.formGroup}>
                    <label className={styles.headLabel}>Новая позиция</label>
                    <div><span className={styles.headText}>Заполните все поля для создания новой номенклатуры</span></div>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Название</label>
                    <input className={styles.input} type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Единицы измерения</label>
                    <input className={styles.input} type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label  className={styles.label}>Артикул/код</label>
                    <input className={styles.input} type="text"/>
                </div>
                <div className={styles.formGroup}>
                    <label  className={styles.label}>Описание</label>
                    <input className={styles.description} type="text"/>
                </div>
            </form>
        </div>
    );
};

export default Modal;
