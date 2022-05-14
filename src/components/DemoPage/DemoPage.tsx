import "./DemoPage.sass"
import film from "../../img/film.png";
import FilmInfinitySlider from "./FilmInfinitySlider/FilmInfinitySlider";
const DemoPage = () => {
    const films = [
        {img: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"},
        {img: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"},
        {img: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"},
        {img: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"},
        {img: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"},
        {img: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"},
        {img: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"},
        {img: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"},
    ]
    const otherFilms = [
        {img: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"},
        {img: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"},
        {img: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"},
        {img: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"},
        {img: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"},
        {img: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"},
        {img: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"},
        {img: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"},
    ]
    const sliderFilms1 = [...films, ...films];
    const sliderFilms2 = [...otherFilms, ...otherFilms];
    return (
        <div className={"demonstration"}>
            <div className="demonstration__title">
                <h1>Всегда есть что посмотреть</h1>
            </div>
            <div className="demonstration__description">
                <h2>Новые серии в день выхода и тысячи фильмов на вечер.
                    Без рекламы, в хорошем качестве, с любимой озвучкой или в оригинале.
                </h2>
            </div>
            <div className="demonstration__films films-line demonstration__first-films-line">
                <div className="lol">
                    {sliderFilms1.map(film => <FilmInfinitySlider img={film.img}/>)}
                </div>
            </div>
            <div className="demonstration__films films-line">
                {sliderFilms2.map(film => <FilmInfinitySlider img={film.img}/>)}
            </div>
            <div className="demonstration__button">
                <button>Перейти к приложению</button>
            </div>
        </div>
    )
}

export default DemoPage;