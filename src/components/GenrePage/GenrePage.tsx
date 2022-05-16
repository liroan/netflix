import FilmCard from "../Slider/SliderItem/FilmCard";
import "../MainPage/MainPage.sass"
import "./GenrePage.sass"
const GenrePage = () => {
    let films = [
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"}
    ];
    return (
        <section className={"genre"}>
            <div className="genre__container">
                <div className="genre__title"><h1>Фантастика</h1></div>
                <div className="genre__films">
                    {films.map(film => <FilmCard {...film}/>)}
                </div>
            </div>
        </section>
    )
}

export default GenrePage;