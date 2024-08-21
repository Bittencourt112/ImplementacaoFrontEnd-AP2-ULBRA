import { useState } from 'react';

import Message from './Message';

import styles from './ProductForm.module.css';

function ProductForm({ titleText, handleForm, productData }) {

    const [messageText, setMessageText] = useState("");
    const [messageType, setMessageType] = useState("");

    const [product, setProduct] = useState(productData || {});

    function handleChange(event) {

        setProduct({...product, [event.target.name]: event.target.value});
        
    }

    function checkForm() {

        if(product.name && product.price && product.description && product.image) {

            handleForm(product);
            
        }else{

            setMessageType("error");
            setMessageText("Empty fields on form!");

            product.name = "";
            product.price = "";
            product.description = "";
            product.image = "";

        }

    }

    return(
        <div className={styles.productform}>
            {<Message type={messageType} text={messageText}/>}
            <form onSubmit={event => event.preventDefault()}>
                <h1>{titleText}</h1>
                <p>Fill in all fields</p>
                    <input type="text" id="name" name="name" placeholder="Name" value={product.name} onChange={handleChange} required/><br/>
                    <input type="number" id="price" name="price" placeholder="Price" value={product.price} onChange={handleChange} required/><br/>
                    <input type="text" id="description" name="description" placeholder="Description" value={product.description} onChange={handleChange} required/><br/>
                    <input type="text" id="image" name="image" placeholder="Image URL" value={product.image} onChange={handleChange} required/><br/>
                <input type="submit" value="Confirm" onClick={checkForm}/>
            </form>
        </div>
    );
}

export default ProductForm;