import React, { useContext } from 'react';
import WordCard from '../WordCard/WordCard';
import { CollectionWordsContext } from '../../context/CollectionWordsContext';


function WordsTable() {
    const {
        isLoading, dictionary
    } = useContext(CollectionWordsContext);
    return (
        <div className="main">
            <h1>WORDLIST</h1>
            <div className="cards-map">
                {isLoading && <div >Loading...</div>}
                {!isLoading && dictionary && dictionary.map((card) =>
                    <WordCard
                        key={card.id}
                        id={card.id}
                        english={card.english}
                        transcription={card.transcription}
                        russian={card.russian}
                        tags={card.tags}
                        isSelected={card.isSelected} />)}
            </div>
        </div>

    );
}

export default WordsTable;