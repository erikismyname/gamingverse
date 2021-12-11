import styles from './Footer.module.css';

const Footer = () => {

    return (
        <footer id={styles.footer}>
            <ul>
                <li><a href="/"><i class="fab fa-facebook-square"></i></a></li>
                <li><a href="/"><i class="fab fa-instagram"></i></a></li>
                <li><a href="/"><i class="fab fa-twitter-square"></i></a></li>
            </ul>
            <p>Copyright &copy; 2021 Gamingverse Inc.</p>
        </footer>
    );

};

export default Footer;