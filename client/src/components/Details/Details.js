import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import styles from './Details.module.css';

import OwnerActions from './OwnerActions/OwnerActions.js';
import LikeActions from './LikeActions/LikeActions.js';

import { getGameById } from '../../services/gameService.js';

const Details = ({ match }) => {

    const gameId = match.params.gameId;

    const [isLoading, setIsLoading] = useState(true);

    const [game, setGame] = useState({});

    useEffect(() => {

        getGameById(gameId)
            .then(game => {
                setIsLoading(false);
                setGame(game);
            })
            .catch(err => toast(err.message));

    }, [gameId]);

    const likeActionCb = (userId, type = 'like') =>
        setGame(oldGame => ({ ...oldGame, likes: type == 'like' ? [...game.likes, userId] : game.likes.filter(id => id != userId) }));

    const detailsView = (
        <>
            <div className={styles['first-wrapper']}>
                <img src={game.imageURL} alt="Game cover." />
                <p>{game.likes?.length} {game.likes?.length == 1 ? 'person likes' : 'people like'} this game</p>
            </div>
            <div className={styles['second-wrapper']}>
                <div>
                    <h2>{game.title}</h2>
                    <p>{game.description}</p>

                </div>
                <div>

                    <OwnerActions game={game} />

                    <LikeActions game={game} likeActionCb={likeActionCb} />

                </div>
            </div>
        </>
    );

    return (
        <section id={styles.details}>

            {isLoading
                ? <div id="loader"></div>
                : detailsView
            }

        </section>
    );

};

export default Details;