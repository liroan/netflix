import "./Header.sass"
import user from "../../img/user.png"
import {useEffect, useState} from "react";
import HeaderModal from "./HeaderModal/HeaderModal";
import menu from "../../img/menu.svg"
import UserModal from "../UserModal/UserModal";
const Header = () => {
    const [prevScroll, setPrevScroll] = useState(0);
    const [isShowHeader, setIsShowHeader] = useState(true);
    const [isSearching, setIsSearching] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    useEffect(() => {
        function scrollFunc(e:any) {
            e.preventDefault();
            console.log(e.preventDefault)
            setIsShowHeader(prevScroll > window.scrollY)
            if (isSearching && prevScroll < window.scrollY)
                setIsSearching(false)
            setPrevScroll(window.scrollY)
        }
        window.addEventListener("scroll", scrollFunc)
        return () => window.removeEventListener("scroll", scrollFunc);
    }, [prevScroll, isSearching])

    useEffect(() => {
        setPrevScroll(window.scrollY)
    }, [])
    return (
        <header className={!isShowHeader ? "header_no-active" : (prevScroll === 0 ? "" : "header_active")}>
            {isOpenMenu && <UserModal closeModal={() => setIsOpenMenu(false)}/>}
            <div className="header__container">
                <div className={"header__logo" + (isSearching ? " s" : "")}>
                    <img src="https://psv4.userapi.com/c235031/u254066399/docs/d3/56c45ed3750f/va.png?extra=nemoGrZleVc3Kqe8r9bvbv2GzWta0MmPbuC4-7PjTumQyP3pYvHH2XWgrBTxI0lzN6UIQlVxcdQZa6ZVTnn2DqNX-IJg1ZiNRN47kRE0gSipueA1Tzzf9yVfGe85pvgNy1aRBLIfUcgX1zlGJ6qlIlk" alt=""/>
                </div>
                <div className="header__info">
                    {isSearching ?
                        <div className={"header__search search"}>
                            <div className="search__block">
                                <input type="text"/>
                                <HeaderModal/>
                            </div>
                            <div className="search__crest" onClick={() => setIsSearching(false)}>
                                <span className="material-symbols-rounded">close</span>
                            </div>
                        </div>
                        :
                        <>
                            <nav>
                                <ul>
                                    <li><a href="/">Магазин</a></li>
                                    <li><a href="/">Избранное</a></li>
                                    <li><a href="/">Буду смотреть</a></li>
                                </ul>
                            </nav>
                            <div className="header__search-button" onClick={() => setIsSearching(true)}>
                                <span className="material-symbols-rounded">search</span>
                            </div>
                        </>
                    }

                    <div className="header__burger" onClick={() => setIsOpenMenu(true)}>
                        <span className="material-symbols-rounded">menu</span>
                    </div>
                </div>
                <div className="header__user user">
                    <img src={user} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header;