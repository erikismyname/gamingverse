import { Link } from 'react-router-dom';

import styles from './Register.module.css';

import useUserContext from '../../hooks/useUserContext.js';

import handleRegisterFormInput from '../../util/handleRegisterFormInput.js';

import { registerUser } from '../../services/userService.js';

const Register = ({ history }) => {

    const { addUser } = useUserContext();

    const onRegisterFormSubmitHandler = async (ev) => {

        ev.preventDefault();

        try {

            const userData = handleRegisterFormInput(new FormData(ev.target));

            const user = await registerUser(userData);

            addUser(user);

            history.push('/catalog');

        } catch (err) {

            alert(err);

        }

    };

    return (
        <section id={styles['register-section']}>
            <form onSubmit={onRegisterFormSubmitHandler}>
                <h1>Register</h1>
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="repeat-password" placeholder="Repeat Password" />
                <input type="submit" value="Register" />
                <p>Already have an account? <Link to="/login">Sign in.</Link></p>
            </form>
        </section>
    );

};

export default Register;