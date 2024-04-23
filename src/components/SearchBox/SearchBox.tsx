import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = () => {
    return (
        <form className={styles.frm}>
            <input className={styles.inp} placeholder='Поиск по названию'/>
            <button className={styles.butt}>Поиск</button>
        </form>
    );
};

export default SearchBox;
