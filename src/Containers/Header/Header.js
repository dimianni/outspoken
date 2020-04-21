import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from './Outspoken.svg';


const Header = () => {

    return (
        <header className={styles.Header}>

            <div className={styles.Wrapper}>
                <div>
                    <Link to="/abc" className={styles.Abc}>
                        A to Z
                   </Link>
                </div>

                <div className={styles.Main}>
                    <Link to="/" className={styles.Centered}>
                        <img src={Logo} className={styles.Logo} alt="Outspoken" />
                    </Link>

                </div>

                <div className={styles.Links}>
                    <a href="https://www.instagram.com/outspoken.quotes/">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="https://www.facebook.com/outspoken.quotes/">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>


                </div>
            </div>


        </header>
    );

}

export default Header;