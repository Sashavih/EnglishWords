import { useCallback, useState, } from "react";
import WordCard from "../WordCard/WordCard";
import "./WordCardSlider.scss";
const DEFAULT_CARD = [{ name: "noName" }];

function WordCardSlider({ cards = DEFAULT_CARD, indexOfFirstCardToShow = 0 }) {

    if (!cards.length) {
        cards = DEFAULT_CARD;
    }

    const [index, setIndex] = useState(indexOfFirstCardToShow);
    const [learnWords, setLearnWords] = useState(0);
    const [pressed, setPressed] = useState(false);
    const [viewCard, setViewCard] = useState(false);
    const handleLearned = () => {
        setLearnWords(learnWords + 1);
    }

    const changeIndex = useCallback(
        (value) => {
            setViewCard(false);
            setPressed(false);
            if (index + value < 0) {
                setIndex(cards.length - 1);
                return;
            }
            if (index + value > cards.length - 1) {
                setIndex(0);
                return;
            }

            setIndex(index + value);
        },
        [cards.length, index]
    );

    const increaseCard = useCallback(() => changeIndex(1), [changeIndex]);
    const decriaseCard = useCallback(() => changeIndex(-1), [changeIndex]);

    return (
        <>
            <div className="learnedWords"> Words learned: {learnWords}</div>
            <div className="slider" >
                <button
                    type="button"
                    className="sliderPrev slider__btn"
                    onClick={decriaseCard}
                ></button>
                <WordCard pressed={pressed} setPressed={setPressed} setViewCard={setViewCard} viewCard={viewCard} onLearned={handleLearned} card={cards[index]}></WordCard>
                <button
                    type="button"
                    className="sliderNext slider__btn"
                    onClick={increaseCard}
                ></button>
            </div>
        </>
    );
}
export default WordCardSlider;

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