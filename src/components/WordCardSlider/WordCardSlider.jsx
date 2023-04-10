import { useCallback, useState, } from "react";
import WordCard from "../WordCard/WordCard";
import "./WordCardSlider.scss";

const DEFAULT_CARDS = [{ name: "noName" }];

function WordCardSlider({ cards = DEFAULT_CARDS, indexOfFirstCardToShow = 0 }) {
    if (!cards.length) {
        cards = DEFAULT_CARDS;
    }

    const [index, setIndex] = useState(indexOfFirstCardToShow);
    const [learnWords, setLearnWords] = useState(0);
    const [pressed, setPressed] = useState(false);
    const [viewCard, setViewCard] = useState(false);
    const [wordThatLearn, setWordThatLearn] = useState([]);

    const handleLearned = () => {
        setLearnWords(learnWords + 1);
    }

    const changeIndex = useCallback(
        (value) => {
            setViewCard(false);
            setPressed(false);
            const i = (index + value + cards.length) % cards.length;
            setIndex(i);
        },
        [cards.length, index]
    );

    const increaseCard = useCallback(() => changeIndex(1), [changeIndex]);
    const decriaseCard = useCallback(() => changeIndex(-1), [changeIndex]);

    const handlePress = () => {
        if (!wordThatLearn.includes(cards[index])) {
            setWordThatLearn((prevCards) => [...prevCards, cards[index]]);
            handleLearned();
        }
    };

    return (
        <>
            <div className="learnedWords"> Words learned: {learnWords}</div>
            <div className="slider" >
                <button
                    type="button"
                    className="sliderPrev slider__btn"
                    onClick={decriaseCard}
                ></button>
                <WordCard
                    pressed={pressed}
                    setPressed={setPressed}
                    setViewCard={setViewCard}
                    viewCard={viewCard}
                    onLearned={handlePress}
                    card={cards[index]} />
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


/*const  changeIndex = useCallback(
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
);*/