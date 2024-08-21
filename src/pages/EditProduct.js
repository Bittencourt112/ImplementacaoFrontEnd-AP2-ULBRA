import { useLocation, useNavigate } from 'react-router-dom';

import ProductForm from '../components/ProductForm';

import image from '../images/image03.jpg';

import styles from './EditProduct.module.css';

function EditProduct() {

    let product = [];

    const location = useLocation();

    const navigate = useNavigate();

    if(location.state) {
        product = location.state.product;
    }

    function editPost(product) {
        fetch(`http://localhost:4000/products/${product.id}`,
            {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(product)
            }
        )
        .then((response) => response.json())
        .then((data) => navigate("/products", {state: {type: "success", message: "Product successfully updated!"}}))
        .catch((error) => console.log(error))

    }

    return(
        <div className={styles.editproduct}>
            <div className={styles.row}>
                <div className={styles.image}>
                    <img src={image} alt="product"/>
                </div>
                <ProductForm titleText="Edit product" handleForm={editPost} productData={product}/>
            </div>
        </div>
    );
}

export default EditProduct;