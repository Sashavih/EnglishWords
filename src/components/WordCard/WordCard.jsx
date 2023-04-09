import { useEffect, useRef } from "react";
import './WordCard.scss';

function WordCard({ card, onLearned, viewCard, setViewCard, pressed, setPressed }) {
    const ref = useRef();
    useEffect(() => {
        ref.current.focus();
    }, []);

    const handleChange = () => {
        setPressed(!pressed);
        if (!viewCard) {
            setViewCard(true);
            onLearned();
        }
    }
    return (

        <div className="card-box">
            <h2>{card.name}</h2>
            <div className="card-box__text">
                <p className="card-box__transcription">[ {card.transcription} ]</p>
                {pressed ? <button onClick={handleChange} className="card-box__translate">{card.translate}</button> : <button onClick={handleChange} ref={ref} type="button" className="card-box__btn">проверить</button>}
            </div>
        </div>
    )
}
export default WordCard;

/*class WordCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        };
    }
    handleChange = () => {
        this.setState(
            { pressed: !this.state.pressed }
        )
    };

    render() {
        return (
            <div className="card-box">
                <h2>Book</h2>
                <div className="card-box__text">
                    <p className="card-box__transcription">[' bʊk ']</p>
                    {this.state.pressed ? <button onClick={this.handleChange} className="card-box__translate">Книга</button> : <button onClick={this.handleChange} type="button" className="card-box__btn">проверить</button>}
                </div>
            </div >
        )
    }
}

export default WordCard;*/