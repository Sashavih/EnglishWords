import { useState } from "react";
import styles from './WordsList.module.scss';
import * as cn from 'classnames';

function WordsList({ english, transcription, russian, changeFont, deleteBtns, darkColor, }) {

    const boldFont = cn(
        {
            [styles.boldFont]: changeFont,
        },
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
    return (
        <div className={styles.table}>
            {!pressed ? <>
                <div className={`${styles.purple} ${boldFont} ${colorDark}`}>{english}</div>
                <div className={`${styles.pink} ${boldFont} ${colorDark}`}>{transcription}</div>
                <div className={`${styles.lightGreen} ${boldFont} `}>{russian}</div>
                {!deleteBtns && <div className={styles.btnBox}>
                    <button onClick={handleChange} className={`${styles.sun}  ${styles.btnEdit} `}></button><button className={`${styles.pink} ${styles.btnDelete} `}></button>
                </div>}
                {deleteBtns && <div className={styles.btnBox}>
                </div>}
            </> :
                <>
                    <div className={`${styles.purple} ${boldFont}`}><input></input></div>
                    <div className={`${styles.pink} ${boldFont}`}><input></input></div>
                    <div className={`${styles.lightGreen} ${boldFont}`}><input></input></div>
                    {!deleteBtns && <div className={styles.btnBox}>
                        <button onClick={handleChange} className={`${styles.sun} ${styles.btnBig} ${styles.btnSave} `}></button><button onClick={handleChange} className={`${styles.pink}  ${styles.btnClear} `}></button>
                    </div>}
                    {deleteBtns && <div className={styles.btnBox}>
                    </div>}
                </>}
        </div >

    );
}
export default WordsList;
