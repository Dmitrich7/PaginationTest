import React, {FC, FormEvent, useState} from 'react';
import styles from './SearchBox.module.css';

interface ISearchBox{
    handleSearchQuery: (arg0: string)=>void;
}

const SearchBox: FC<ISearchBox> = ({handleSearchQuery}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        handleSearchQuery(e.target.value);
    }
    return (
        <form className={styles.frm}>
            <input type="search" className={styles.inp} placeholder='Поиск по названию' onChange={(e)=>handleChange(e)}></input>
            <button className={styles.butt}>Поиск</button>
        </form>
    );
};

export default SearchBox;
