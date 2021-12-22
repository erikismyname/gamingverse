import { useTypewriter } from 'react-simple-typewriter';

import styles from './Home.module.css';

const Home = () => {

    const { text } = useTypewriter({
        words: ['Welcome to Gamingverse!', 'In just a few simple clicks...', '...become a part of an evergrowing community!', 'Join now and share your favourite games...', '...with other gamers from all around the Gamingverse!', 'Have fun!'],
        typeSpeed: 80,
        deleteSpeed: 50,
        delaySpeed: 1000,
        loop: 1,
    });

    return (
        <section id={styles.home}>
            <h1>{text}</h1>
        </section>
    );

};

export default Home;