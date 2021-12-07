import style from './Login.module.css';

const Login = () => {

    return (
        <section>
            <form>
                <h1>Login</h1>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" value="Login" />
            </form>
        </section>
    );

};

export default Login;