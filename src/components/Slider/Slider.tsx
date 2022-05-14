import arrow from "../../img/arrow.png";
import {FC, Ref, useCallback, useEffect, useState} from "react";
import SliderItem from "./SliderItem/SliderItem";
import {IFilm} from "../../types/types.";

interface ISlider {
    widthScreen: any,
    films: IFilm[]
}

const Slider:FC<ISlider> = ({widthScreen, films}) => {

    const width = 422;
    const countItem = films.length;
    const [countClick, setCountClick] = useState(0);
    const [startItemsOnPage, setStartItemsOnPage] = useState(0);
    useEffect(() => {
        if (widthScreen)
            setStartItemsOnPage(Math.floor(parseInt(widthScreen.current.clientWidth) / width));
    }, [widthScreen])

    const nextItem = useCallback(() => setCountClick(prev => prev + 1), []);
    const previousItem = useCallback(() => setCountClick(prev => prev - 1), []);
    return (
        <div className="proposed-films__slider slider">
            <div onClick={previousItem} className="slider__arrow slider__arrow_left">
                {countClick > 0 && <img src={arrow} alt=""/>}
            </div>
            <div className="slider__wrapper" style={{transform: `translateX(${-countClick*width}px)`}}>
                {films.map(film => <SliderItem {...film} />)}
            </div>
            <div onClick={nextItem} className="slider__arrow slider__arrow_right">
                {countItem - startItemsOnPage > countClick && <img src={arrow} alt=""/>}
            </div>
        </div>
    )
}

export default Slider;