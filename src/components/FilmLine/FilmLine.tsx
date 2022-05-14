import Slider from "../Slider/Slider";
import {FC, useRef} from "react";
import {IFilm} from "../../types/types.";

interface IFilmLine {
    title: string,
    films: IFilm[]
}

const FilmLine:FC<IFilmLine> = ({title, films}) => {
    const widthScreen = useRef<any>(null);
    return (
        <div ref={widthScreen} className="lines-proposed-film__container">
            <div className="mainPage__proposed-films proposed-films">
                <div className="proposed-films__title"><h3>Новинки</h3></div>
                <Slider widthScreen={widthScreen} films={films}/>
            </div>
        </div>
    )
}

export default FilmLine;