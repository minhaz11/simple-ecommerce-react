import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css';
import Product from '../Products/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10); //product state
    const [cart, setCart] = useState([]); //cart state
    
    const handleProduct = (product) =>{
        console.log('product added', product)
        const newCart = [...cart,product]; //product added to cart
        setCart(newCart); //product added to cart

    }
    return (
        <div className="shop-container">
            <div className="product-container">
               
                    {
                        products.map(prdct => <Product handleProduct={handleProduct} product={prdct}></Product> )
                    }
              
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
           
            
        </div>
    );
};

export default Shop;