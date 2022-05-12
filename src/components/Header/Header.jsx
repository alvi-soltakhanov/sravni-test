import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.Content}>
                <img src="https://s.rbk.ru/v1_companies_s3/resized/250xH/media/company_logo/dd9c2ed8-210f-4ff3-b547-c129011e22c4.png" alt="" />
                <p>НАШ СУПЕРКОФЕ</p>
            </div>
        </div>
    );
};

export default Header;