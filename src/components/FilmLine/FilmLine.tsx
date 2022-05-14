import Slider from "../Slider/Slider";
import {useRef} from "react";


const FilmLine = () => {
    const widthScreen = useRef<any>(null);
    return (
        <div ref={widthScreen} className="lines-proposed-film__container">
            <div className="mainPage__proposed-films proposed-films">
                <div className="proposed-films__title"><h3>Новинки</h3></div>
                <Slider widthScreen={widthScreen}/>
            </div>
        </div>
    )
}

export default FilmLine;