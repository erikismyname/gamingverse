import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import styles from './Details.module.css';

import Actions from './Actions/Actions.js';

import { getGameById } from '../../services/gameService.js';

const Details = ({ match }) => {

    const gameId = match.params.gameId;

    const [isLoading, setIsLoading] = useState(true);

    const [game, setGame] = useState({});

    useEffect(() => {

        getGameById(gameId)
            .then(game => setGame(game))
            .catch(err => toast.error(err.message))
            .finally(() => setIsLoading(false));

    }, [gameId]);

    const likeActionCb = (userId, type = 'like') =>
        setGame(oldGame => ({ ...oldGame, likes: type == 'like' ? [...oldGame.likes, userId] : oldGame.likes.filter(id => id != userId) }));

    const view = (
        <>
            <div className={styles['first-wrapper']}>
                <img src={game.imageURL} alt="Game's cover" />
                <p>{game.likes?.length} {game.likes?.length == 1 ? 'person likes' : 'people like'} this game</p>
            </div>
            <div className={styles['second-wrapper']}>
                <div>
                    <h2>{game.title}</h2>
                    <p>{game.description}</p>
                </div>

                <Actions game={game} likeActionCb={likeActionCb} />

            </div>
        </>
    );

    return (
        <section id={styles.details}>

            {isLoading
                ? <div id="loader"></div>
                : view
            }

        </section>
    );

};

export default Details;