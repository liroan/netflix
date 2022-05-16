import React from 'react';
import './App.css';
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import GenrePage from "./components/GenrePage/GenrePage";

const App = () => {
    return (
        <div>
            <Header />
            {/*<MainPage />*/}
            <GenrePage />
        </div>
    )
}

export default App;
