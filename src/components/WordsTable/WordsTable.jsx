import { useContext } from "react";
import styles from './WordsTable.module.scss';
import WordsList from '../WordsList/WordsList';
import { CollectionWordsContext } from '../../context/CollectionWordsContext';

const WordTable = () => {
    const { dictionary } = useContext(CollectionWordsContext);

    return (
        <div className='worldListBox'>
            <div className={styles.table}>
                <div
                    className={styles.purple}>English</div>
                <div
                    className={styles.pink}>Transcription</div>
                <div
                    className={styles.lightGreen}>Russian</div>
            </div>
            {dictionary.map((word) => (
                <WordsList key={word.id} {...word} />
            ))}
        </div>
    );
};

export default WordTable;