import styles from './Header.module.css';

const Header = () => {

    return (
        <header>
            <h1><a href="">Gamingverse</a></h1>
            <nav>
                <ul>
                    <li><a href="">Catalog</a></li>
                    <>
                        <li><a href="">Login</a></li>
                        <li><a href="">Register</a></li>
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