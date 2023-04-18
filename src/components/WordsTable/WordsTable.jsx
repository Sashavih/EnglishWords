import React, { useContext } from 'react';
import WordsList from '../WordsList/WordsList';
import { CollectionWordsContext } from '../../context/CollectionWordsContext';


function WordsTable() {
    const {
        isLoading, dictionary
    } = useContext(CollectionWordsContext);
    return (
        <div className="main">
            <div className="cards-map">
                {isLoading && <div >Loading...</div>}
                {!isLoading && dictionary && dictionary.map((card) =>
                    <WordsList
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