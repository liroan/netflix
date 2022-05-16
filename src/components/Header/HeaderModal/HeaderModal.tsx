import HeaderModalFilm from "./HeaderModalFilm/HeaderModalFilm";
import "./HeaderModal.sass"



const HeaderModal = () => {
    const films = [
        {rating: 5.5, title: "Побег из лапландии", marks: [2018,"serial"], img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, title: "Побег из лапландии", marks: [2018,"serial"], img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, title: "Побег из лапландии", marks: [2018,"serial"], img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, title: "Побег из лапландии", marks: [2018,"serial"], img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, title: "Побег из лапландии", marks: [2018,"serial"], img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, title: "Побег из лапландии", marks: [2018,"serial"], img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
        {rating: 5.5, title: "Побег из лапландии", marks: [2018,"serial"], img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"}
    ]
    return (
        <section className={"header__modal modal"}>
            <div className="modal__title"><h4>Входит в топ 10 за месяц</h4></div>
            {films.map(film => <HeaderModalFilm {...film}/>)}
        </section>
    )
}
export default HeaderModal;