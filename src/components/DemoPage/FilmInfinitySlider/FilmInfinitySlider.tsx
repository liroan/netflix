import {FC} from "react";

interface IFilmInfinitySlider {
    img: string
}

const FilmInfinitySlider:FC<IFilmInfinitySlider> = ({img}) => {
    return (
        <div className="films-line__film">
            <img src={img} alt=""/>
        </div>
    )
}

export default FilmInfinitySlider;