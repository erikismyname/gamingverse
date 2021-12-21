import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import styles from './Catalog.module.css';

import GameCard from '../common/GameCard/GameCard.js';

import { getAllGames } from '../../services/gameService.js';

const Catalog = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [games, setGames] = useState([]);

    useEffect(() => {

        getAllGames()
            .then(games => setGames(games))
            .catch(err => toast.error(err.message))
            .finally(() => setIsLoading(false));

    }, []);

    const view = (
        games.length
            ? games.map(g => <GameCard key={g._id} game={g} />)
            : <p>There are no added games yet. Be the first to <Link to="/create">create</Link> one!</p>
    );

    return (
        <section id={styles.catalog}>

            {isLoading
                ? <div id="loader"></div>
                : view
            }

        </section>
    );

};

export default Catalog;