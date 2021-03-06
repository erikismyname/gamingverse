import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import styles from './Edit.module.css';

import handleGameDataFormInput from '../../util/handleGameDataFormInput.js';

import { getGameById, updateGame } from '../../services/gameService.js';

const Edit = ({ match, history }) => {

    const gameId = match.params.gameId;

    const [game, setGame] = useState({});

    useEffect(() => {

        getGameById(gameId)
            .then(game => setGame(game))
            .catch(err => toast.error(err.messsage));

    }, [gameId]);

    const onEditFormSubmitHandler = async (ev) => {

        ev.preventDefault();

        try {

            const gameData = handleGameDataFormInput(new FormData(ev.target));

            await updateGame(gameId, gameData);

            history.push(`/details/${gameId}`);

        } catch (err) {

            toast.error(err.message);

        }

    };

    return (
        <section id={styles.edit}>
            <form onSubmit={onEditFormSubmitHandler}>
                <h1>Edit</h1>
                <input type="text" name="title" placeholder="Title" defaultValue={game.title} />
                <textarea type="text" name="description" placeholder="Description" defaultValue={game.description} />
                <input type="text" name="image-url" placeholder="Image URL" defaultValue={game.imageURL} />
                <input type="submit" value="Edit" />
            </form>
        </section>
    );

};

export default Edit;