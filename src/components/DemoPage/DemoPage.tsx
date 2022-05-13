import "./DemoPage.sass"
import film from "../../img/film.png";
/*import { keyframes } from "styled-components";*/

/*function Loader({component}:any) {
    let spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

    let styles = {
        animation: `${spin} 2s linear infinite`
    };

    return <div style={styles}>{component}</div>;
}*/
const DemoPage = () => {
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
                <div className="films-line__film">
                    <img src={film} alt=""/>
                </div>
                <div className="films-line__film">
                    <img src={film} alt=""/>
                </div>
                <div className="films-line__film">
                    <img src={film} alt=""/>
                </div>
                <div className="films-line__film">
                    <img src={film} alt=""/>
                </div>
                <div className="films-line__film">
                    <img src={film} alt=""/>
                </div>
                <div className="films-line__film">
                    <img src={film} alt=""/>
                </div>
                <div className="films-line__film">
                    <img src={film} alt=""/>
                </div>
            </div>
            <div className="demonstration__films films-line">
                <div className="films-line__film">
                    <img src={film} alt=""/>
                </div>
                <div className="films-line__film">
                    <img src={film} alt=""/>
                </div>
                <div className="films-line__film">
                    <img src={film} alt=""/>
                </div>
                <div className="films-line__film">
                    <img src={film} alt=""/>
                </div>
                <div className="films-line__film">
                    <img src={film} alt=""/>
                </div>
                <div className="films-line__film">
                    <img src={film} alt=""/>
                </div>
                <div className="films-line__film">
                    <img src={film} alt=""/>
                </div>
            </div>
            <div className="demonstration__button">
                <button>Перейти к приложению</button>
            </div>
        </div>
    )
}

export default DemoPage;