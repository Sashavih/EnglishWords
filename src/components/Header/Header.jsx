import './Header.scss';
import logo from "../../static/grid.png";
import { Link } from 'react-router-dom';

function Header() {
    return (

        <header className="header">
            <Link to={"/"}> <img src={logo} alt="logo" className="header__logo" /></Link>
            <h1 className='header__title'>English Words</h1>
            <nav>
                <ul className="header__list">
                    <li className="header__item"><Link to={"/"} className="header__link">Main</Link></li>
                    <li className="header__item"><Link to={"/Game"} className="header__link">Game</Link></li>
                </ul>
            </nav>
        </header>

    )
}
export default Header;

