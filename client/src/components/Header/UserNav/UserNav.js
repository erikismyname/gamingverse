import { NavLink, useHistory } from 'react-router-dom';

import useUserContext from '../../../hooks/useUserContext.js';

import { logoutUser } from '../../../services/userService.js';

const UserNav = () => {

    const history = useHistory();

    const { removeUser } = useUserContext();

    const onLogoutBtnClickHandler = async (ev) => {

        ev.preventDefault();

        try {

            await logoutUser();

            removeUser();

            history.push('/');

        } catch (err) {

            alert(err);

        }

    };

    return (
        <>
            <li><NavLink to="/create">Create</NavLink></li>
            <li><NavLink to="/my-games">My Games</NavLink></li>
            <li><NavLink to="/logout" onClick={onLogoutBtnClickHandler}>Logout</NavLink></li>
        </>
    );

};

export default UserNav;