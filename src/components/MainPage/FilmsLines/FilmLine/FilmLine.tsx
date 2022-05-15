import Slider from "../../../Slider/Slider";
import {FC, useRef} from "react";
import {IFilm, IGenre} from "../../../../types/types.";

interface IFilmLine {
    title: string,
    films: IFilm[] | IGenre[],
    isGenre: boolean
}

const FilmLine:FC<IFilmLine> = ({title, films, isGenre}) => {
    const widthScreen = useRef<any>(null);
    return (
        <div ref={widthScreen} className="lines-proposed-film__container">
            <div className="mainPage__proposed-films proposed-films">
                <div className="proposed-films__title"><h3>Новинки</h3></div>
                <Slider widthScreen={widthScreen} films={films} isGenre={isGenre}/>
            </div>
        </div>
    )
}

export default FilmLine;