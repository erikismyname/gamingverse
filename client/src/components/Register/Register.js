import styles from './Register.module.css';

const Register = () => {

    return (
        <section>
            <form className={styles['register-form']}>
                <h1 className={styles['register-form-title']}>Register</h1>
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