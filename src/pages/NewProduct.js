import { useNavigate } from 'react-router-dom';

import ProductForm from '../components/ProductForm';

import image from '../images/image03.jpg';

import styles from './NewProduct.module.css'

function NewProduct() {

    const navigate = useNavigate();

    function createPost(product) {

        fetch("http://localhost:4000/products",
            {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(product),
            }
        )
        .then((response) => response.json())
        .then((data) => navigate("/products", {state: {type: "success", message: "Product successfully added!"}}))
        .catch((error) => console.log(error))

    }

    return(
        <div className={styles.newproduct}>
            <div className={styles.row}>
                <div className={styles.image}>
                    <img src={image} alt="product"/>
                </div>
                <ProductForm titleText="Add a new product" handleForm={createPost}/>
            </div>
        </div>
    );
}

export default NewProduct;