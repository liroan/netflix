import arrow from "../../img/arrow.png";
import {FC, Ref, useCallback, useEffect, useRef, useState} from "react";
import SliderItem from "./SliderItem/SliderItem";
import {IFilm, IGenre} from "../../types/types.";
import SliderItemGenre from "./SliderItemGenre/SliderItemGenre";

interface ISlider {
    widthScreen: any,
    films: IFilm[] | IGenre[],
    isGenre: boolean
}

const Slider:FC<ISlider> = ({widthScreen, films, isGenre}) => {

    const card = useRef<any>(null);
    const countItem = films.length;
    const [countClick, setCountClick] = useState(0);
    const [startItemsOnPage, setStartItemsOnPage] = useState(0);
    useEffect(() => {
        window.addEventListener('resize', function(event) {
            console.log(countClick)
            setStartItemsOnPage(
                Math.floor(parseInt(widthScreen.current.clientWidth) / (card?.current?.clientWidth || 0)) + countClick)
        });
        if (widthScreen)
            setStartItemsOnPage(Math.floor(parseInt(widthScreen.current.clientWidth) / (card?.current?.clientWidth || 0)));
    }, [widthScreen, countClick])

    const nextItem = useCallback(() => setCountClick(prev => prev + 1), []);
    const previousItem = useCallback(() => setCountClick(prev => prev - 1), []);
    return (
        <div className="proposed-films__slider slider">
            <div onClick={previousItem} className="slider__arrow slider__arrow_left">
                {countClick > 0 && <img src={arrow} alt=""/>}
            </div>
            <div className="slider__wrapper" style={{transform: `translateX(${-countClick*(card?.current?.clientWidth + 20|| 0) }px)`}}>
                {films.map(film => !isGenre ? <SliderItem {...film} card={card}/> :
                    <SliderItemGenre {...film} card={card}/>)}
            </div>
            <div onClick={nextItem} className="slider__arrow slider__arrow_right">
                {countItem - startItemsOnPage > countClick && <img src={arrow} alt=""/>}
            </div>
        </div>
    )
}

export default Slider;