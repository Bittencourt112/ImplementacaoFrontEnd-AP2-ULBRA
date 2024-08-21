import { Link } from "react-router-dom";

import styles from './LinkButton.module.css';

function LinkButton({ link, icon, text }) {
    return(
        <Link className={styles.linkbutton} to={link}><span><i class={icon}></i></span>{text}</Link>
    );
}

export default LinkButton;