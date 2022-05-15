import FilmLine from "../../FilmLine/FilmLine";
import {FC} from "react";
import {IFilm} from "../../../types/types.";

interface IFilmsLines {
    films: IFilm[]
}

const FilmsLines:FC<IFilmsLines> = ({films}) => {

    return (
        <div className="mainPage__lines-proposed-film lines-proposed-film">
            <FilmLine films={films} title={"Новинки"}/>
            <FilmLine films={films} title={"Особенное"}/>
        </div>
    )
}

export default FilmsLines;