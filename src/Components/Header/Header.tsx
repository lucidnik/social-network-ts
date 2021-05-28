import React from "react";
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="https://cdn.theatlantic.com/media/mt/science/cat_caviar.jpg" alt=""/>
        </header>
    );
};

export default Header