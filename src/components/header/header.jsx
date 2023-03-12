import './Header.scss';
import logo from "./grid.png"

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="logo" className="header__logo" />
            <h1 className='header__title'>English Words</h1>

        </header>
    )
}
export default Header;

/* <nav>
                <ul className="header__list">
                    <li className="header__item"><a href="#" className="header__link">Главная</a></li>
                    <li className="header__item"><a href="#" className="header__link">Карточки</a></li>
                    <li className="header__item"><a href="#" className="header__link">Слова</a></li>
                </ul>
            </nav>*/