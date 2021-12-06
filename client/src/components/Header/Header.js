import './Header.css'

const Header = () => {

    return (
        <header>
            <h1><a href="">Gamingverse</a></h1>
            <nav>
                <ul>
                    <li><a href="">Catalog</a></li>
                    <div id="user-nav">
                        <li>Welcome, username here</li>
                        <li><a href="">Create</a></li>
                        <li><a href="">Profile</a></li>
                        <li><a href="">Logout</a></li>
                    </div>
                    <div id="guest-nav">
                        <li><a href="">Login</a></li>
                        <li><a href="">Register</a></li>
                    </div>
                </ul>
            </nav>
        </header>
    );

};

export default Header;