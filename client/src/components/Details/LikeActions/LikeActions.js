import { Link } from 'react-router-dom';

import useUserContext from '../../../hooks/useUserContext.js';
import { likeGame, dislikeGame } from '../../../services/gameService.js';

const LikeActions = ({ game, likeActionCb }) => {

    const { user } = useUserContext();

    const hasLiked = game.likes?.find(id => id == user._id);

    const onDislikeBtnClickHandler = async (ev) => {

        ev.preventDefault();

        try {

            await dislikeGame(game._id);

            likeActionCb(user._id, 'dislike');

        } catch (err) {

            alert(err);

        }

    };

    const onLikeBtnClickHandler = async (ev) => {

        ev.preventDefault();

        try {

            await likeGame(game._id);

            likeActionCb(user._id);

        } catch (err) {

            alert(err);

        }

    };

    const likeAction = (
        hasLiked
            ? <Link to={`/${game._id}/dislike`} onClick={onDislikeBtnClickHandler}>Dislike</Link>
            : <Link to={`/${game._id}/like`} onClick={onLikeBtnClickHandler}>Like</Link>
    );

    const likeActionsView = (
        user._id && user._id != game.owner
            ? likeAction
            : ''
    );

    return likeActionsView;

};

export default LikeActions;