import next from "../../img/next.png";
import info from "../../img/info.png";
import {FC} from "react";

interface IFilmInfo {
    title: string,
    rating: number,
    year: number,
    genre: string[],
    country: string[],
    restriction: number,
    time: string,
    marks: string[],
    desc: string
}

const FilmInfo:FC<IFilmInfo> = ({title, rating, year, genre, country, restriction, time, marks, desc}) => {
    return (
        <div className="mainPage__popular-film popular-film">
            <div className="popular-film__mask">
                <div className="popular-film__container">
                    <div className="popular-film__title"><h1>{title}</h1></div>
                    <div className="popular-film__info">
                        <div className="popular-film__ratings">
                            <p>{rating}</p>
                        </div>
                        <div className="popular-film__other-info">
                            <p>{year},{genre.map(el => <span>{el}</span>)} {country.map(el => <span>{el}</span>)} {time} {restriction}+</p>
                        </div>
                    </div>
                    <div className="popular-film__marks">
                        {marks.map(mark => <div className="popular-film__mark mark"><p>{mark}</p></div>)}
                    </div>
                    <div className="popular-film__desc">
                        <p>{desc}</p>
                    </div>
                    <div className="popular-film__buttons">
                        <div className="popular-film__button red">
                            <button><img src={next} alt=""/>Перейти к просмотру</button>
                        </div>
                        <div className="popular-film__button gray">
                            <button><img src={info} alt=""/><span>О фильме</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmInfo;