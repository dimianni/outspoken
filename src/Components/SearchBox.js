import React from 'react';
import styles from './SearchBox.module.css'

const SearchBox = ({onSearch}) => {
    return(
        <div className={styles.Search}>
            <input type="search" onChange={onSearch} className={styles.Bar}/>
            <ion-icon name="search-outline" class={styles.Loop}></ion-icon>
        </div>
        
    )
}

export default SearchBox;