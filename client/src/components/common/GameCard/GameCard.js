import styles from './GameCard.module.css';

const GameCard = ({ game }) => {

    return (
        <div id={styles['game-card']}>
            <img src={game.imageURL} alt="Game photo." />
            <div>
                <p>{game.title}</p>
                <a href={`/details/${game._id}`}>Details</a>
            </div>
        </div>
    );

};

export default GameCard;