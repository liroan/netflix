
import {FC} from "react";
import {IFilm} from "../../../types/types.";
import FilmLine from "./FilmLine/FilmLine";

interface IFilmsLines {
    films: IFilm[]
}

const FilmsLines:FC<IFilmsLines> = ({films}) => {
    const genres = [{title: "Фантастика", img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {title: "Фантастика", img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {title: "Фантастика", img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {title: "Фантастика", img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},]
    return (
        <div className="mainPage__lines-proposed-film lines-proposed-film">
            <FilmLine films={films} title={"Новинки"} isGenre={false}/>
            <FilmLine films={films} title={"Особенное"} isGenre={false}/>
            <FilmLine films={[...genres, ...genres]} title={"Особенное"} isGenre={true}/>
            <FilmLine films={films} title={"Особенное"} isGenre={false}/>
        </div>
    )
}

export default FilmsLines;