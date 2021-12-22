import { Link } from 'react-router-dom';

import useUserContext from '../../../hooks/useUserContext.js';

const OwnerActions = ({ game, onDeleteBtnClickHandlerCb }) => {

    const { user } = useUserContext();

    return (
        user._id == game.owner
            ?
            <>
                <Link to={`/edit/${game._id}`}>Edit</Link>
                <Link to={`/delete/${game._id}`} onClick={onDeleteBtnClickHandlerCb}>Delete</Link>
            </>
            :
            ''
    );

};

export default OwnerActions;