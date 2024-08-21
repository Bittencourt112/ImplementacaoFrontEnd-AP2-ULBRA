import { Link } from 'react-router-dom';

import styles from './ProductCard.module.css';

function ProductCard({ id, name, price, image}) {
    return(
        <div className={styles.productcard} key={id}>
            <Link to={`/product/${id}`}>
                <img src={image} alt={name}/>
                <div className={styles.imageText}>
                    <p>{name}</p>
                    <h3>R$ {price}</h3>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;