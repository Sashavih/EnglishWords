import './Header.scss';
import logo from "./grid.png"

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="logo" className="header__logo" />
            <h1 className='header__title'>English Words</h1>
            <nav>
                <ul className="header__list">
                    <li className="header__item"><a href="./" className="header__link">Слова</a></li>
                    <li className="header__item"><a href="./" className="header__link">Игра</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;

