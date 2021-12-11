import styles from './GameCard.module.css';
import demo from '../../../demo.jpg'

const GameCard = () => {

    return (
        <div id={styles['game-card']}>
            <img src={demo} alt="" />
            <div>
                <p>Dead Space</p>
                <a href="">Details</a>
            </div>
        </div>
    );

};

export default GameCard;