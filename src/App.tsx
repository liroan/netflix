import React from 'react';
import './App.css';
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import GenrePage from "./components/GenrePage/GenrePage";
import HeaderModalFilm from "./components/Header/HeaderModal/HeaderModalFilm/HeaderModalFilm";
import HeaderModal from './components/Header/HeaderModal/HeaderModal';
import UserModal from "./components/UserModal/UserModal";

const App = () => {
    return (
        <div>
            {/*<Header />*/}
            {/*<MainPage />*/}
            <UserModal />
           {/* <HeaderModal/>*/}
            {/*<GenrePage />*/}
        </div>
    )
}

export default App;
