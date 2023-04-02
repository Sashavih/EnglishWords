import { useNavigate } from 'react-router-dom';
import './NotFoundPage.scss';

function NotFoundPade() {
    let navigate = useNavigate();
    function handleClick() {
        navigate('/');
    }
    return (
        <div className="notFoundBox">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="title"></div>
            <h1 className="notFoundBox__title">WE COULDN’T FIND THE PAGE YOU WERE LOOKING FOR</h1>
            <button className="notFoundBox__btn" onClick={handleClick}>Back Home</button>
        </div>
    )
}
export default NotFoundPade;
