import arrow from "../../img/arrow.png";
import {useCallback, useEffect, useState} from "react";
import SliderItem from "./SliderItem/SliderItem";
let next = () => {};

const Slider = ({widthScreen}:any) => {
    const array = [{rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"}]
    const width = 422;
    const countItem = array.length;
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
                {array.map(el => <SliderItem {...el} />)}
            </div>
            <div onClick={nextItem} className="slider__arrow slider__arrow_right">
                {countItem - startItemsOnPage > countClick && <img src={arrow} alt=""/>}
            </div>
        </div>
    )
}

export default Slider;