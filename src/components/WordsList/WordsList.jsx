import { useEffect, useState } from "react";
import styles from './WordsList.module.scss';
import './WordsList.scss';
import * as cn from 'classnames';

function WordsList({ english, transcription, russian, changeFont, deleteBtns, darkColor, }) {

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
        word: english,
        transcription: transcription,
        translate: russian
    });
    const [isEmpty, setIsEmpty] = useState(false);


    const handleSubmit = e => {
        e.preventDefault();
        if (form.transcription === '' || form.translate === '' || form.word === '') {
            setIsEmpty(true);
            setPressed(pressed);
            alert('Fill the fields')
        } else {
            setIsEmpty(false);
            console.log(form);
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
                    {!deleteBtns && <div className={styles.btnBox}>
                        <button
                            onClick={handleChange}
                            type="button"
                            className={`${styles.sun}  ${styles.btnEdit}`}></button>
                        <button
                            type="button"
                            className={`${styles.pink} ${styles.btnDelete} `}></button>
                    </div>}
                    {deleteBtns && <div className={styles.btnBox}>
                    </div>}
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
                                value={form.word}
                                name='word'></input></div>
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
                                value={form.translate}
                                name='translate' ></input></div>
                        {!deleteBtns && <div className={styles.btnBox}>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className={`${styles.sun} ${styles.btnBig} ${styles.btnSave} `}></button>
                            <button
                                type="button"
                                onClick={handleChange}
                                className={`${styles.pink}  ${styles.btnClear} `}></button>
                        </div>}
                        {deleteBtns && <div className={styles.btnBox}>
                        </div>}
                    </form>
                </>}
        </>

    );
}
export default WordsList;
