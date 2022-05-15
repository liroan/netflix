

const SliderItemGenre = ({img, title, card} : any) => {
    return (
        <div className="slider__item slider__item-genre" ref={card}>
            <img src={img} alt=""/>
            <div className="slider__mask">{title}</div>
        </div>
    )
}

export default SliderItemGenre;