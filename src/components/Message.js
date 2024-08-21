import { useState, useEffect } from 'react';

import styles from './Message.module.css';

function Message({ type, text }) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        if(!text) {

            setVisible(false);
            return;
            
        }

        setVisible(true);

        setTimeout(() => {

            setVisible(false);

        }, 3000);

    }, [text]);

    return(
        <>
            {visible && (
                <div>
                    <p className={`${styles.message} ${styles[type]}`}>{text}</p>
                </div>
            )}
        </>
    );
}

export default Message;