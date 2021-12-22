import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './Details.module.css';

import OwnerActions from './OwnerActions/OwnerActions.js';
import LikeActions from './LikeActions/LikeActions.js';
import Confirm from '../Confirm/Confirm.js';

import { getGameById, deleteGame } from '../../services/gameService.js';

const Details = ({ match }) => {

    const gameId = match.params.gameId;
    
    const history = useHistory();

    const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const [game, setGame] = useState({});

    useEffect(() => {

        getGameById(gameId)
            .then(game => setGame(game))
            .catch(err => toast.error(err.message))
            .finally(() => setIsLoading(false));

    }, [gameId]);

    const onLikeActionClickHandlerCb = (userId, type = 'like') =>
        setGame(oldGame => ({ ...oldGame, likes: type == 'like' ? [...oldGame.likes, userId] : oldGame.likes.filter(id => id != userId) }));

    const onDeleteBtnClickHandlerCb = (ev) => {

        ev.preventDefault();

        setIsDeleteConfirmed(true);

    };

    const onCancelBtnClickHandlerCb = () => setIsDeleteConfirmed(false);

    const onConfirmBtnClickHandlerCb = async () => {

        try {

            await deleteGame(gameId);

            history.push('/catalog');

        } catch (err) {

            toast.error(err.message);

        }

    }

    const view = (
        <>

            {isDeleteConfirmed
                ? <Confirm onCancelBtnClickHandlerCb={onCancelBtnClickHandlerCb} onConfirmBtnClickHandlerCb={onConfirmBtnClickHandlerCb} />
                : ''
            }

            <div className={styles['first-wrapper']}>
                <img src={game.imageURL} alt="Game's cover" />
                <p>{game.likes?.length} {game.likes?.length == 1 ? 'person likes' : 'people like'} this game</p>
            </div>
            <div className={styles['second-wrapper']}>
                <div>
                    <h2>{game.title}</h2>
                    <p>{game.description}</p>
                </div>
                <div id={styles.actions}>

                    <OwnerActions game={game} onDeleteBtnClickHandlerCb={onDeleteBtnClickHandlerCb} />

                    <LikeActions game={game} onLikeActionClickHandlerCb={onLikeActionClickHandlerCb} />

                </div>
            </div>
        </>
    );

    return (
        <section id={isLoading ? styles['details-loading'] : styles.details}>

            {isLoading
                ? <div id="loader"></div>
                : view
            }

        </section>
    );

};

export default Details;