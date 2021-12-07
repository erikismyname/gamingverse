import styles from './Header.module.css';

const Header = () => {

    return (
        <header className={styles.header}>
            <h1><a className={styles['nav-a']} href="/">Gamingverse</a></h1>
            <nav>
                <ul className={styles['nav-ul']}>
                    <li className={styles['nav-li']}><a className={`${styles['nav-a']} ${styles.underline}`} href="">Catalog</a></li>
                    <>
                        <li className={styles['nav-li']}><a className={`${styles['nav-a']} ${styles.underline}`} href="">Login</a></li>
                        <li className={styles['nav-li']}><a className={`${styles['nav-a']} ${styles.underline}`} href="">Register</a></li>
                    </>
                    <>
                        <li className={styles['nav-li']}><a className={`${styles['nav-a']} ${styles.underline}`} href="">Create</a></li>
                        <li className={styles['nav-li']}><a className={`${styles['nav-a']} ${styles.underline}`} href="">Profile</a></li>
                        <li className={styles['nav-li']}><a className={`${styles['nav-a']} ${styles.underline}`} href="">Logout</a></li>
                    </>
                </ul>
            </nav>
        </header>
    );

};

export default Header;