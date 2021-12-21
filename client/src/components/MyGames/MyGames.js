import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import styles from './MyGames.module.css';

import GameCard from '../common/GameCard/GameCard.js';

import useUserContext from '../../hooks/useUserContext.js';

import { getMyGames } from '../../services/userService.js';

const MyGames = () => {

    const { user } = useUserContext();

    const [isLoading, setIsLoading] = useState(true);

    const [games, setGames] = useState([]);

    useEffect(() => {

        getMyGames(user._id)
            .then(games => setGames(games))
            .catch(err => toast.error(err.message))
            .finally(() => setIsLoading(false));

    }, []);

    const view = (
        games.length
            ? games.map(g => <GameCard key={g._id} game={g} />)
            : <p>You haven't added any games yet. <Link to="/create">Create</Link> one now!</p>
    );

    return (
        <div id={styles['my-games']}>

            {isLoading
                ? <div id="loader"></div>
                : view
            }

        </div>
    );

};

export default MyGames;