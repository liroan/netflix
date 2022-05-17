import user from "../../img/user.png";

import "./UserModal.sass"
import "../Header/Header.sass"
const UserModal = () => {
    return (
        <div className="header__user-modal user-modal">
            <div className="user-modal__container">
                <div className="user-modal__header">
                    <div className="user-modal__info">
                        <div className="user-modal__title"><h4>Larikova1239</h4></div>
                        <div className="user-modal__mail"><h5>kozel@yandex.com</h5></div>
                    </div>
                    <div className="user-modal__ava user"><img src={user} alt=""/></div>
                </div>
                <div className="line"></div>
                <div className="user-modal__refs">
                    <ul>
                        <li><a>История просмотра</a></li>
                        <li><a>Магазин</a></li>
                        <li><a>Буду смотреть</a></li>
                        <li><a>Избранное</a></li>
                    </ul>
                </div>
                <div className="line"></div>
                <div className="user-modal__settings">
                    <ul>
                        <li><a>История просмотра</a></li>
                        <li><a>Магазин</a></li>
                        <li><a>Буду смотреть</a></li>
                        <li><a>Избранное</a></li>
                    </ul>
                </div>
            </div>
            <div className="line"></div>
            <div className="user-modal__container">
                <div className="user-modal__other-users">
                    <div className="user-modal__add">
                        <button>+</button>
                        <p>Добавить пользователя</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserModal;