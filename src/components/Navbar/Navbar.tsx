import React, {FC, FormEvent} from 'react';
import styles from './Navbar.module.css'
import SearchBox from "../SearchBox/SearchBox";

interface INavbarProps{
    itemsTotal: number;
    onSortSelectChange: (arg0:string)=>void;
    handleSearchQuery: (arg0: string)=>void;
}

const Navbar: FC<INavbarProps> = ({itemsTotal,onSortSelectChange,handleSearchQuery}) => {

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
                            <option value="ascending">возрастанию</option>
                            <option value="descending">убыванию</option>
                        </select>
                    </label>
                </div>
                <SearchBox handleSearchQuery={handleSearchQuery}/>
                <button className={styles.newPos}><span className={styles.icon}></span>Новая позиция</button>
            </div>
        </header>
    );
};

export default Navbar;
