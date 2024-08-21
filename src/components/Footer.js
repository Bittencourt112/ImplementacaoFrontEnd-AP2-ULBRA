import styles from './Footer.module.css';

function Footer() {
    return(
        <div className={styles.footer}>
            <footer>
                <p><a href="mailto:thiagobittencourt112@rede.ulbra.br">Thiago Leites Bittencourt - ULBRA</a></p>
                <p>2024</p>
            </footer>
        </div>
    );
}

export default Footer;