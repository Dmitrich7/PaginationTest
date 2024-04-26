import React, {FC, useState} from 'react';
import styles from './Navbar.module.css'
import SearchBox from "../SearchBox/SearchBox";
import Portal from "../Portal/Portal";
import Modal from "../Modal/Modal";
import {ITableItems} from "../../types/types";
import {postItem} from "../../api/postItem";
import uuid from "react-uuid";

interface INavbarProps{
    itemsTotal: number;
    onSortSelectChange: (arg0:string)=>void;
    handleSearchQuery: (arg0: string)=>void;
}

const Navbar: FC<INavbarProps> = ({itemsTotal,onSortSelectChange,handleSearchQuery}) => {
    const [modalActive, setModalActive] = useState(false)
    const handleSubmit = (formData:ITableItems)=>{
        formData.id=uuid();
        postItem(formData)
    }
    return (
        <header className={styles.container}>
            <div className={styles.spanContainer} >
                <span className={styles.name}>Номенклатура</span>
                <div className={styles.badgeContainer}>
                    <span className={styles.badge}>{itemsTotal} единиц</span>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.sortContainer}>
                    <label>Сортировать названия по:
                        <select  className={styles.sortSelect} onChange={(e)=>onSortSelectChange(e.target.value)}>
                            <option value="none"></option>
                            <option value="ascending">возрастанию</option>
                            <option value="descending">убыванию</option>
                        </select>
                    </label>
                </div>
                <SearchBox handleSearchQuery={handleSearchQuery}/>
                <button className={styles.newPos} onClick={()=>setModalActive(true)}><span className={styles.icon}></span>Новая позиция</button>
            </div>
            {
                modalActive?
                    <Portal className={styles.portal}>
                        <Modal
                            setModalActive={setModalActive}
                            handleSubmit={handleSubmit}
                            headLabel={"Новая позиция"}
                            headText={"Заполните все поля для создания новой номенклатуры"}
                        />
                    </Portal>
                    :
                    null
            }
        </header>
    );
};

export default Navbar;
