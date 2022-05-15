


const SliderItem = ({img, rating, price, card}:any) => {
    return (
        <div className="slider__item" ref={card}>
            <img src={img} alt=""/>
            <div className="slider__marks">
                <div className="slider__mark mark slider__mark gray"><p>{rating}</p></div>
                <div className="slider__mark mark red"><p>{price} Р</p></div>
            </div>
        </div>
    )
}

export default SliderItem;