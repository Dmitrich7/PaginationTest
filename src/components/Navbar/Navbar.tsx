import React, {FC} from 'react';
import styles from './Navbar.module.css'
import SearchBox from "../SearchBox/SearchBox";

interface INavbarProps{
    itemsTotal: number
}

const Navbar: FC<INavbarProps> = ({itemsTotal}) => {
    return (
        <header className={styles.container}>
            <div className={styles.spanContainer} >
                <span className={styles.name}>Номенклатура</span>
                <div className={styles.badgeContainer}>
                    <span className={styles.badge}>{itemsTotal} единиц</span>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <SearchBox/>
                <button className={styles.newPos}><span className={styles.icon}></span>Новая позиция</button>
            </div>
        </header>
    );
};

export default Navbar;
