import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name,img, seller, price, key} = props.product
    return (
        <div className="products">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4> <Link to={"/"+key}>{name}</Link> </h4>
                <p><small>By:{seller}</small></p>
                <p><small>Price: ${price}</small></p>
                <button onClick={() => props.handleProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;