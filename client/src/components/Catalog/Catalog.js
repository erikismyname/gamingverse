import styles from './Catalog.module.css';
import GameCard from '../common/GameCard/GameCard.js';

const Catalog = () => {

    const games = false;

    const p = <p>There are no added games yet. Be the first to <a href="">create</a> one!</p>;

    return (
        <div id={styles.catalog}>
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
        </div>
    );

};

export default Catalog;