import "./MainPage.sass"
import info from "../../img/info.png"
import next from "../../img/next.png"
import bg from "../../img/bg.png"
import arrow from "../../img/arrow.png"
import {useEffect, useRef, useState} from "react";
const MainPage = () => {

    const width = 422;
    const countItem = 7;
    const widthScreen = useRef<any>(null);
    const [countClick, setCountClick] = useState(0);
    const [startItemsOnPage, setStartItemsOnPage] = useState(0);
    useEffect(() => {
        setStartItemsOnPage(Math.floor(parseInt(widthScreen.current.clientWidth) / width));
    }, [])

    return (
        <section className={"mainPage"}>
            <div className="mainPage__popular-film popular-film">
                <div className="popular-film__mask">
                    <div className="popular-film__container">
                        <div className="popular-film__title"><h1>Джанго освобожденный</h1></div>
                        <div className="popular-film__info">
                            <div className="popular-film__ratings">
                                <p>5.5</p>
                            </div>
                            <div className="popular-film__other-info">
                                <p>2021, ужасы Испания 1ч 39мин 18+</p>
                            </div>
                        </div>
                        <div className="popular-film__marks">
                            <div className="popular-film__mark mark"><p>Full HD</p></div>
                            <div className="popular-film__mark mark"><p>5.1</p></div>
                        </div>
                        <div className="popular-film__desc">
                            <p>Модель ставит карьеру на паузу, чтобы ухаживать за бабушкой. Испанский хоррор о больших тайнах маленькой семьи</p>
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
            <div className="mainPage__lines-proposed-film lines-proposed-film">
                <div ref={widthScreen} className="lines-proposed-film__container">
                    <div className="mainPage__proposed-films proposed-films">
                        <div className="proposed-films__title"><h3>Новинки</h3></div>
                        <div className="proposed-films__slider slider">
                            <div onClick={() => setCountClick(prev => prev - 1)} className="slider__arrow slider__arrow_left">
                                {countClick > 0 && <img src={arrow} alt=""/>}
                            </div>
                            <div className="slider__wrapper" style={{transform: `translateX(${-countClick*width}px)`}}>
                                <div className="slider__item">
                                    <img src={bg} alt=""/>
                                    <div className="slider__marks">
                                        <div className="slider__mark mark slider__mark gray"><p>5.5</p></div>
                                        <div className="slider__mark mark red"><p>299 Р</p></div>
                                    </div>
                                    <div className="slider__mask"><p>Dima Loh</p></div>
                                </div>
                                <div className="slider__item">
                                    <img src={bg} alt=""/>
                                    <div className="slider__marks">
                                        <div className="slider__mark mark slider__mark gray"><p>5.5</p></div>
                                        <div className="slider__mark mark red"><p>299 Р</p></div>
                                    </div>
                                </div>
                                <div className="slider__item">
                                    <img src={bg} alt=""/>
                                    <div className="slider__marks">
                                        <div className="slider__mark mark slider__mark gray"><p>5.5</p></div>
                                        <div className="slider__mark mark red"><p>299 Р</p></div>
                                    </div>
                                </div>
                                <div className="slider__item">
                                    <img src={bg} alt=""/>
                                    <div className="slider__marks">
                                        <div className="slider__mark mark slider__mark gray"><p>5.5</p></div>
                                        <div className="slider__mark mark red"><p>299 Р</p></div>
                                    </div>
                                </div>
                                <div className="slider__item">
                                    <img src={bg} alt=""/>
                                    <div className="slider__marks">
                                        <div className="slider__mark mark slider__mark gray"><p>5.5</p></div>
                                        <div className="slider__mark mark red"><p>299 Р</p></div>
                                    </div>
                                </div>
                                <div className="slider__item">
                                    <img src={bg} alt=""/>
                                    <div className="slider__marks">
                                        <div className="slider__mark mark slider__mark gray"><p>5.5</p></div>
                                        <div className="slider__mark mark red"><p>299 Р</p></div>
                                    </div>
                                </div>
                                <div className="slider__item">
                                    <img src={bg} alt=""/>
                                    <div className="slider__marks">
                                        <div className="slider__mark mark slider__mark gray"><p>5.5</p></div>
                                        <div className="slider__mark mark red"><p>299 Р</p></div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => setCountClick(prev => prev + 1)} className="slider__arrow slider__arrow_right">
                                {countItem - startItemsOnPage > countClick && <img src={arrow} alt=""/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainPage;