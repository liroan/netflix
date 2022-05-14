import "./MainPage.sass"
import {FC} from "react";
import FilmLine from "../FilmLine/FilmLine";
import FilmInfo from "../FilmInfo/FilmInfo";
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
    return (
        <section className={"mainPage"}>
            <FilmInfo {...film}/>
            <div className="mainPage__lines-proposed-film lines-proposed-film">
                <FilmLine />
            </div>
        </section>
    )
}

export default MainPage;