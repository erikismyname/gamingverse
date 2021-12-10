import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import img from '../../logo.png'
const Header = () => {

    return (
        <header className={styles.header}>
            <a href="/"><img src={img} alt="" /></a>
            <nav>
                <ul>
                    <li><a href="">Catalog</a></li>
                    <>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </>
                    <>
                        <li><a href="">Create</a></li>
                        <li><a href="">Profile</a></li>
                        <li><a href="">Logout</a></li>
                    </>
                </ul>
            </nav>
        </header>
    );

};

export default Header;