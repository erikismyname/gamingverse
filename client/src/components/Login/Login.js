import styles from './Login.module.css';

const Login = () => {

    return (
        <section>
            <form className={styles['login-form']}>
                <h1 className={styles['login-form-title']}>Login</h1>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" value="Login" />
                <p>Don't have an account? <a href="">Sign up.</a></p>
            </form>
        </section>
    );

};

export default Login;