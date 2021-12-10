import styles from './Register.module.css';

const Register = () => {

    return (
        <section id={styles['register-section']}>
            <form>
                <h1>Register</h1>
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="repeat-password" placeholder="Repeat Password" />
                <input type="submit" value="Register" />
                <p>Already have an account? <a href="">Sign in.</a></p>
            </form>
        </section>
    );

};

export default Register;