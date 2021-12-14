import { NavLink } from 'react-router-dom';

const GuestNav = () => {

    return (
        <>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </>
    );

};

export default GuestNav;