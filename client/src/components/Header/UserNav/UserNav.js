import { NavLink } from 'react-router-dom';

const UserNav = () => {

    return (
        <>
            <li><NavLink to="/create">Create</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
        </>
    );

};

export default UserNav;