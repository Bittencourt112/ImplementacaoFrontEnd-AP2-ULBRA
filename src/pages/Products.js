import { useLocation } from 'react-router-dom';
import { useContext } from 'react';

import useFetch from '../components/useFetch';

import Message from '../components/Message';
import LinkButton from '../components/LinkButton';
import ProductCard from '../components/ProductCard';

import { ProductContext } from '../contexts/ProductContext';

import styles from './Products.module.css'

function Products() {

    const contextProduct = useContext(ProductContext);

    const [products] = useFetch("http://localhost:4000/products");

    contextProduct.setProduct(products);

    let type = "";
    let message = "";

    const location = useLocation();

    if(location.state) {

        type = location.state.type;
        message = location.state.message;

    }

    return(
        <div className={styles.products}>
            {message && <Message type={type} text={message}/>}
            <h1>Products</h1>
            <hr/>
            <LinkButton link="/newproduct" icon="fa-solid fa-plus" text="Add a new product"/>
            <div className={styles.row}>
                {products.length > 0 ? (products.map((value) => (
                    <ProductCard id={value.id} name={value.name} price={value.price} image={value.image}/>
                ))) : (
                    <h2>No products!</h2>
                )}
            </div>
        </div>
    );
}

export default Products;