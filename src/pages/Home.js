import LinkButton from '../components/LinkButton';

import image01 from '../images/image01.jpg';
import image02 from '../images/image02.jpg';
import image03 from '../images/image04.png';

import styles from './Home.module.css'

function Home() {
    return(
        <div className={styles.home}>
            <h1>Welcome!</h1>
            <hr/>
            <p>Start managing your products right away!</p>
            <div className={styles.art}>
                <img src={image03} alt="art"/>
            </div>
            <LinkButton link="/newproduct" icon="fa-solid fa-plus" text="Add a new product"/>
            <div className={styles.row}>
                <div className={styles.image}>
                    <img src={image01} alt="products"/>
                </div>
                <div className={styles.image}>
                    <img src={image02} alt="products"/>
                </div>
            </div>
        </div>
    );
}

export default Home;