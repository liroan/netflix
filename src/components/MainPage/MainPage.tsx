import "./MainPage.sass"
import {FC} from "react";
import FilmLine from "../FilmLine/FilmLine";
import FilmInfo from "../FilmInfo/FilmInfo";
import FilmsLines from "./FilmsLines/FilmsLines";
const MainPage:FC = () => {
    let film = {
        title: "Джанго освобожденный",
        rating: 5.5,
        year: 2021,
        genre: ["ужасы"],
        country: ["Испания"],
        restriction: 18,
        time: "1ч 39мин",
        marks: ["Full HD", "5.5"],
        desc: "Модель ставит карьеру на паузу, чтобы ухаживать за бабушкой. Испанский хоррор о больших тайнах маленькой семьи"
    }
    const films = [{rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"}]
    return (
        <section className={"mainPage"}>
            <FilmInfo {...film}/>
            <FilmsLines films={films}/>
        </section>
    )
}

export default MainPage;