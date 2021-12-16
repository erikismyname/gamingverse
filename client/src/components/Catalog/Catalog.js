import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './Catalog.module.css';

import { getAllGames } from '../../services/gameService.js';

import GameCard from '../common/GameCard/GameCard.js';

const Catalog = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {

        getAllGames()
            .then(games => setGames(games))
            .catch(err => alert(err));

    }, []);

    return (
        <section id={styles.catalog}>

            {games.length
                ? games.map(g => <GameCard key={g._id} game={g} />)
                : <p>There are no added games yet. Be the first to <Link to="/create">create</Link> one!</p>
            }

        </section>
    );

};

export default Catalog;