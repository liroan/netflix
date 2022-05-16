import "./HeaderModalFilm.sass"

const HeaderModalFilm = ({img, title, rating, marks}:any) => {
    return(
        <div className={"header__film search-film"}>
            <div className="search-film__img">
                <img src={img} alt=""/>
            </div>
            <div className="search-film__info">
                <div className="search-film__title"><h5>{title}</h5></div>
                <div className="search-film__other-info">
                    <div className="search-film__rating">{rating}</div>
                    <div className="search-film__marks">
                        {marks.map((mark:any, index:any) => {
                            if (index === 0) return <span>{mark}</span>
                            return <span>, {mark}</span>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderModalFilm;