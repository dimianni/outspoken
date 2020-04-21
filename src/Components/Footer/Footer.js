import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return ( 
        <footer className={styles.Footer}>
            <div>
                Built with <span role="img" alt="love" aria-label="">&#10084;&#65039;</span> 
            </div>
            <div>
                © 2020 by <a href="http://dimianni.biz/">Dimianni</a>.
            </div>
        </footer>
     );
}
 
export default Footer;