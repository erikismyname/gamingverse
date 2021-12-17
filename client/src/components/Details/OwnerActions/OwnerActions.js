import { Link, useHistory } from 'react-router-dom';

import useUserContext from '../../../hooks/useUserContext.js';
import { deleteGame } from '../../../services/gameService.js';

const OwnerActions = ({ game }) => {

    const history = useHistory()

    const { user } = useUserContext();

    const onDeleteBtnClickHandler = async (ev) => {

        ev.preventDefault();

        try {

            await deleteGame(game._id);

            history.push('/catalog');

        } catch (err) {

            alert(err);

        }

    };

    const result = (
        user._id == game.owner
            ?
            <>
                <Link to={`/edit/${game._id}`}>Edit</Link>
                <Link to={`/delete/${game._id}`} onClick={onDeleteBtnClickHandler}>Delete</Link>
            </>
            :
            ''
    );

    return result;

};

export default OwnerActions;