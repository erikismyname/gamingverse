import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import useUserContext from '../../../../hooks/useUserContext.js';

import { likeGame, dislikeGame } from '../../../../services/gameService.js';

const LikeActions = ({ game, likeActionCb }) => {

    const { user } = useUserContext();

    const hasLiked = game.likes?.find(id => id == user._id);

    const onDislikeBtnClickHandler = async (ev) => {

        ev.preventDefault();

        ev.target.disabled = true;

        try {

            await dislikeGame(game._id);

            likeActionCb(user._id, 'dislike');

            ev.target.disabled = false;

        } catch (err) {

            toast(err.message);

        }

    };

    const onLikeBtnClickHandler = async (ev) => {

        ev.preventDefault();

        ev.target.disabled = true;

        try {

            await likeGame(game._id);

            likeActionCb(user._id);

            ev.target.disabled = false;

        } catch (err) {

            toast(err.message);

        }

    };

    const likeAction = (
        hasLiked
            ? <Link to={`/${game._id}/dislike`} onClick={onDislikeBtnClickHandler}>Dislike</Link>
            : <Link to={`/${game._id}/like`} onClick={onLikeBtnClickHandler}>Like</Link>
    );

    return (
        user._id && user._id != game.owner
            ? likeAction
            : ''
    );

};

export default LikeActions;