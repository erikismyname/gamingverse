import { Switch, Route } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserProvider } from './contexts/UserContext.js';

import isUser from './guards/isUser.js';
import isGuest from './guards/isGuest.js';

import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Catalog from './components/Catalog/Catalog.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Create from './components/Create/Create.js';
import Details from './components/Details/Details.js';
import Edit from './components/Edit/Edit.js';
import MyGames from './components/MyGames/MyGames.js';
import Footer from './components/Footer/Footer.js';

function App() {

    return (
        <>

            <UserProvider>

                <ToastContainer
                    autoClose={3000}
                    hideProgressBar={true}
                    theme="dark"
                    transition={Slide}
                />

                <Header />

                <Switch>

                    <Route path="/" exact component={Home} />

                    <Route path="/catalog" component={Catalog} />

                    <Route path="/login" component={isGuest(Login)} />

                    <Route path="/register" component={isGuest(Register)} />

                    <Route path="/create" component={isUser(Create)} />

                    <Route path="/details/:gameId" component={Details} />

                    <Route path="/edit/:gameId" component={isUser(Edit)} />

                    <Route path="/my-games" component={isUser(MyGames)} />

                </Switch>

            </UserProvider>

            {/* <Footer /> */}

        </>
    );

}

export default App;