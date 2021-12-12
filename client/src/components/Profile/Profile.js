import styles from './Profile.module.css';
import GameCard from '../common/GameCard/GameCard.js';

const Profile = () => {

    const games = false;

    const p = <p>You haven't added any games yet. <a href="">Create</a> one now!</p>;

    return (
        <div id={styles.profile}>
            <GameCard />
            <GameCard />
            <GameCard />
        </div>
    );

};

export default Profile;