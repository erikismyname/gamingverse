import { Link } from 'react-router-dom';

import styles from './Login.module.css';

import useUserContext from '../../hooks/useUserContext.js';

import handleLoginFormInput from '../../util/handleLoginFormInput.js';

import { loginUser } from '../../services/userService.js';

const Login = ({ history }) => {

    const { addUser } = useUserContext();

    const onLoginFormSubmitHandler = async (ev) => {

        ev.preventDefault();

        try {

            const userData = handleLoginFormInput(new FormData(ev.target));

            const user = await loginUser(userData);

            addUser(user);

            history.push('/catalog');

        } catch (err) {

            alert(err);

        }

    };

    return (
        <section id={styles['login-section']}>
            <form onSubmit={onLoginFormSubmitHandler}>
                <h1>Login</h1>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" value="Login" />
                <p>Don't have an account? <Link to="/register">Sign up.</Link></p>
            </form>
        </section>
    );

};

export default Login;