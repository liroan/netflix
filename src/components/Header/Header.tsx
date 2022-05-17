import "./Header.sass"
import user from "../../img/user.png"
import {useEffect, useState} from "react";
import HeaderModal from "./HeaderModal/HeaderModal";
const Header = () => {
    const [prevScroll, setPrevScroll] = useState(10**10);
    const [isShowHeader, setIsShowHeader] = useState(true);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        function scrollFunc(event:any) {
            /*if (isShowHeader && prevScroll < window.scrollY)
                setIsShowHeader(false)
            else if (!isShowHeader && prevScroll >= window.scrollY)
                setIsShowHeader(true)*/
            setIsShowHeader(prevScroll >= window.scrollY)
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
            <div className="header__container">
                <div className="header__left">
                    <div className="header__burger"><img src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png" alt=""/></div>
                    <div className="header__logo"><img src="https://psv4.userapi.com/c235031/u254066399/docs/d3/56c45ed3750f/va.png?extra=nemoGrZleVc3Kqe8r9bvbv2GzWta0MmPbuC4-7PjTumQyP3pYvHH2XWgrBTxI0lzN6UIQlVxcdQZa6ZVTnn2DqNX-IJg1ZiNRN47kRE0gSipueA1Tzzf9yVfGe85pvgNy1aRBLIfUcgX1zlGJ6qlIlk" alt=""/></div>
                    {
                        isSearching
                            ?
                            <div className={"header__search search"}>
                                <div className="search__block">
                                    <input type="text"/>
                                    <HeaderModal/>
                                </div>
                                <div className="search__crest" onClick={() => setIsSearching(false)}></div>
                            </div>
                            :
                        <nav>
                            <ul>
                                <li><a>Избранное</a></li>
                                <li><a>Магазин</a></li>
                                <li><a>Буду смотреть</a></li>
                                <li><span onClick={() => setIsSearching(true)}><img src="https://cdn-icons.flaticon.com/png/128/3641/premium/3641364.png?token=exp=1652614657~hmac=d125e6e1401dc3851d066b08f769d1aa" alt=""/></span></li>
                            </ul>
                        </nav>
                    }
                </div>
                <div className="header__user user">
                    <img src={user} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header;