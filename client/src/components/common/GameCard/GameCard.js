import { Link } from 'react-router-dom';

import styles from './GameCard.module.css';

const GameCard = ({ game }) => {

    return (
        <div id={styles['game-card']}>
            <img src={game.imageURL} alt="Game's cover photo." />
            <div>
                <p>{game.title}</p>
                <Link to={`/details/${game._id}`}>Details</Link>
            </div>
        </div>
    );

};

export default GameCard;