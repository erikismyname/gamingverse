import { useTypewriter } from 'react-simple-typewriter';

import styles from './Home.module.css';

const Home = () => {

    const { text } = useTypewriter({
        words: [''],
        typeSpeed: 80,
        deleteSpeed: 50,
        delaySpeed: 1500,
        loop: 1,
    });

    return (
        <section id={styles.home}>

        </section>
    );

};

export default Home;