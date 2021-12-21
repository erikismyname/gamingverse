import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

const Footer = () => {

    return (
        <footer id={styles.footer}>
            <ul>
                <li><Link to="/"><i className="fab fa-facebook-square"></i></Link></li>
                <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                <li><Link to="/"><i className="fab fa-twitter-square"></i></Link></li>
            </ul>
            <p>Copyright &copy; 2021 Gamingverse Inc.</p>
        </footer>
    );

};

export default Footer;