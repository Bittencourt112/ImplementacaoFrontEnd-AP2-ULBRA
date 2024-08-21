import { useNavigate, useParams } from 'react-router-dom';

import useFetch from '../components/useFetch';

import styles from './ProductDetails.module.css'
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

function ProductDetails() {

    const { id } = useParams();

    const [product] = useFetch(`http://localhost:4000/products/${id}`);

    const contextProduct = useContext(ProductContext);

    const data = Object.values(contextProduct.product).filter((value) => value.id === id);

    const navigate = useNavigate();

    function removeProduct() {

        fetch(`http://localhost:4000/products/${id}`,
            {
                method: "DELETE",
                headers: {'Content-Type': 'application/json'},
            } 
        )
        .then((response) => response.json())
        .then((data) => navigate("/products", {state: {type: "success", message: "Product successfully removed!"}}))
        .catch((error) => console.log(error))

    }

    function editProduct() {
        navigate("/editproduct", {state: {product: product}});
    }

    return(
        <div className={styles.productdetails}>
            <h1>Product details</h1>
            <hr/>
            {data.length > 0 ? (data.map((value) => (
                <div className={styles.row} key={value.id}>
                    <div className={styles.container}>
                        <div className={styles.text}>
                            <h2>{value.name}</h2>
                            <h1>R$ {value.price}</h1>
                            <hr/>
                            <h3>About this item</h3>
                            <p>{value.description}</p>
                            <div className={styles.row}>
                                <button onClick={editProduct}><span><i class="fa-solid fa-pen-to-square"></i></span> Edit product</button>
                                <button onClick={removeProduct} style={{backgroundColor: "rgb(200, 0, 0)"}}><span><i class="fa-solid fa-trash-can"></i></span> Remove product</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <img src={value.image} alt={value.name}/>
                    </div>
                </div>
            ))) : (
                <h2>No info!</h2>
            )}
        </div>
    );
}

export default ProductDetails;