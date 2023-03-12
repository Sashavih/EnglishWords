import { useState } from "react";
import styles from './WordsList.module.scss';
import * as cn from 'classnames';

function WordsList({ english, transcription, russian, line, isFade, changeFont, deleteBtns, }) {
    const fade = cn(
        {
            [styles.fade]: isFade,
        },
    );
    const boldFont = cn(
        {
            [styles.boldFont]: changeFont,
        },
    );


    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    }
    return (
        <div className={styles.table}>
            {!pressed ? <><div className={`${styles.purple} ${fade} `}>{line}</div>
                <div className={`${styles.lightGreen} ${boldFont}`}>{english}</div>
                <div className={`${styles.orange} ${boldFont}`}>{transcription}</div>
                <div className={`${styles.lightBlue} ${boldFont}`}>{russian}</div>
                {!deleteBtns && <div className={styles.btnBox}>
                    <button onClick={handleChange} className={`${styles.sun} ${styles.btnSmall} ${styles.btnEdit} `}></button><button className={`${styles.pink} ${styles.btnSmall} ${styles.btnDelete} `}></button>
                </div>}
                {deleteBtns && <div className={styles.btnBox}>
                </div>}
            </> :
                <><div className={`${styles.purple} ${fade} `}>{line}</div>
                    <div className={`${styles.lightGreen} ${boldFont}`}><input></input></div>
                    <div className={`${styles.orange} ${boldFont}`}><input></input></div>
                    <div className={`${styles.lightBlue} ${boldFont}`}><input></input></div>
                    {!deleteBtns && <div className={styles.btnBox}>
                        <button onClick={handleChange} className={`${styles.sun} ${styles.btnBig} ${styles.btnSave} `}></button><button onClick={handleChange} className={`${styles.pink} ${styles.btnSmall} ${styles.btnClear} `}></button>
                    </div>}
                    {deleteBtns && <div className={styles.btnBox}>
                    </div>}
                </>}
        </div >

    );
}
export default WordsList;
