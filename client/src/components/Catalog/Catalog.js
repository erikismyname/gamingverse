import styles from './Catalog.module.css';
import GameCard from '../common/GameCard/GameCard.js';

const Catalog = () => {

    return (
        <div id={styles.wrapper}>
            <GameCard />
        </div>
    );

};

export default Catalog;