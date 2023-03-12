import { useState } from "react";
import './WordCard.scss';

function WordCard(props) {
    console.log(props);
    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(!pressed);
    }
    return (
        <div className="slider">
            <button type="button"></button>
            <div className="card-box">
                <h2>{props.name}</h2>
                <div className="card-box__text">
                    <p className="card-box__transcription">[{props.transcription}]</p>
                    {pressed ? <button onClick={handleChange} className="card-box__translate">{props.translate}</button> : <button onClick={handleChange} type="button" className="card-box__btn">проверить</button>}
                </div>
            </div>
            <button type="button"></button>
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