import './App.css';

import Header from './components/Header/Header.js';
// import Footer from './components/Footer/Footer.js';
// import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Create from './components/Create/Create.js';
import Edit from './components/Edit/Edit.js';
import GameCard from './components/common/GameCard/GameCard.js';

function App() {

    return (
        <>
            <Header />
            <GameCard />
            <Login />
            <Register />
            <Create />
            <Edit />
        </>
    );

}

export default App;