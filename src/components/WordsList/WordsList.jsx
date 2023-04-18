import { useState } from "react";
import styles from './WordsList.module.scss';
import './WordsList.scss';
import * as cn from 'classnames'; import { useContext } from 'react';
import { CollectionWordsContext } from '../../context/CollectionWordsContext';


function WordsList({ english, transcription, russian, changeFont, darkColor, id, tags }) {
    const { updateWord } = useContext(CollectionWordsContext);

    const boldFont = cn(
        {
            [styles.boldFont]: changeFont,
        }
    );

    const colorDark = cn(
        {
            [styles.darkColor]: darkColor,
        }
    )

    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(!pressed);
    }

    const [form, setForm] = useState({
        id: id,
        english: english,
        transcription: transcription,
        russian: russian,
        tags: tags
    });


    const handleSubmit = e => {
        e.preventDefault();
        if (form.transcription === '' || form.russian === '' || form.english === '') {
            setPressed(pressed);
        } else {
            updateWord(form);
            handleChange();
        };
    };

    const onChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const errorClass = (value) => {
        return value === '' ? 'error' : '';
    };
    return (
        <>
            {!pressed ? <>
                <div className={styles.table}>
                    <div
                        className={`${styles.purple} ${boldFont} ${colorDark}`}>{english}</div>
                    <div
                        className={`${styles.pink} ${boldFont} ${colorDark}`}>{transcription}</div>
                    <div
                        className={`${styles.lightGreen} ${boldFont} `}>{russian}</div>
                    <div className={styles.btnBox}>
                        <button
                            onClick={handleChange}
                            type="button"
                            className={`${styles.sun}  ${styles.btnEdit}`}></button>
                        <button
                            type="button"
                            className={`${styles.pink} ${styles.btnDelete} `}></button>
                    </div>
                </div >
            </> :
                <>
                    <form
                        className={styles.table}>
                        <div
                            className={`${styles.purple} ${boldFont}`}>
                            <input
                                className={`input ${errorClass(form.word)}`}
                                onChange={onChange}
                                value={form.english}
                                name='english'></input></div>
                        <div
                            className={`${styles.pink} ${boldFont}`}>
                            <input
                                className={`input ${errorClass(form.transcription)}`}
                                onChange={onChange}
                                value={form.transcription}
                                name='transcription'></input></div>
                        <div
                            className={`${styles.lightGreen} ${boldFont}`}>
                            <input
                                className={`input ${errorClass(form.translate)}`}
                                onChange={onChange}
                                value={form.russian}
                                name='russian' ></input></div>
                        <div className={styles.btnBox}>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className={`${styles.sun} ${styles.btnBig} ${styles.btnSave} `}></button>
                            <button
                                type="button"
                                onClick={handleChange}
                                className={`${styles.pink}  ${styles.btnClear} `}></button>
                        </div>
                    </form>
                </>}
        </>

    );
}
export default WordsList;
