import "./MainPage.sass"
import info from "../../img/info.png"
import next from "../../img/next.png"

const MainPage = () => {
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
                            <div className="popular-film__button popular-film__button_red">
                                <button><img src={next} alt=""/>Перейти к просмотру</button>
                            </div>
                            <div className="popular-film__button popular-film__button_gray">
                                <button><img src={info} alt=""/><span>О фильме</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainPage;