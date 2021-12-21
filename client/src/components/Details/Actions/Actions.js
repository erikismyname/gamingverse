import styles from '../Details.module.css';

import OwnerActions from './OwnerActions/OwnerActions.js';
import LikeActions from './LikeActions/LikeActions.js';

const Actions = ({ game, likeActionCb }) => {

    return (
        <div className={styles.actions}>

            <OwnerActions game={game} />

            <LikeActions game={game} likeActionCb={likeActionCb} />

        </div>
    );

};

export default Actions;