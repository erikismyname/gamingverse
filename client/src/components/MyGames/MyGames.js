import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './MyGames.module.css';

import useUserContext from '../../hooks/useUserContext.js';

import { getMyGames } from '../../services/userService.js';

import GameCard from '../common/GameCard/GameCard.js';

const MyGames = () => {

    const { user } = useUserContext();

    const [games, setGames] = useState([]);

    useEffect(() => {

        getMyGames(user._id)
            .then(games => setGames(games))
            .catch(err => alert(err));

    }, []);

    return (
        <div id={styles['my-games']}>

            {games.length
                ? games.map(g => <GameCard key={g._id} game={g} />)
                : <p>You haven't added any games yet. <Link to="/create">Create</Link> one now!</p>
            }

        </div>
    );

};

export default MyGames;