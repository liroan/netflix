import "./MainPage.sass"
import info from "../../img/info.png"
import next from "../../img/next.png"
import {useRef} from "react";
import Slider from "../Slider/Slider";
import FilmLine from "../FilmLine/FilmLine";
import FilmInfo from "../FilmInfo/FilmInfo";
const MainPage = () => {
    return (
        <section className={"mainPage"}>
            <FilmInfo />
            <div className="mainPage__lines-proposed-film lines-proposed-film">
                <FilmLine />
            </div>
        </section>
    )
}

export default MainPage;