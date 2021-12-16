import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import logo from '../../logo.png'

import UserNav from './UserNav/UserNav.js';
import GuestNav from './GuestNav/GuestNav.js';

import useUserContext from '../../hooks/useUserContext.js';

const Header = () => {

    const { validateUser } = useUserContext();

    return (
        <header id={styles.header}>
            <NavLink to="/" exact><img src={logo} alt="App's logo." /></NavLink>
            <nav>
                <ul>
                    <li><NavLink to="/catalog">Catalog</NavLink></li>

                    {validateUser() ? <UserNav /> : <GuestNav />}

                </ul>
            </nav>
        </header>
    );

};

export default Header;