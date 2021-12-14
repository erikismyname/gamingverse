import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import logo from '../../logo.png'

import GuestNav from './GuestNav/GuestNav.js';
import UserNav from './UserNav/UserNav.js';

import useUserContext from '../../hooks/useUserContext.js';

const Header = () => {

    const { validateUser } = useUserContext();

    const user = validateUser();

    return (
        <header id={styles.header}>
            <NavLink to="/" exact><img src={logo} alt="Site logo." /></NavLink>
            <nav>
                <ul>
                    <li><NavLink to="/catalog">Catalog</NavLink></li>

                    {user ? <UserNav /> : <GuestNav />}

                </ul>
            </nav>
        </header>
    );

};

export default Header;