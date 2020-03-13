import React from 'react';

const Cart = (props) => {
    const cart =props.cart;
    // const total = cart.reduce((total, prd)=>total+prd.price,0)

    let total =0 ;
    for(let i =0; i<cart.length; i++){
        const product = cart[i]
        total = total + product.price;

    }
    let shippingCost = 12.99
    if(cart.length === 0){
        shippingCost = 0
    }
   else if(total>35){
        shippingCost = 0;
    }else if(total>15){
        shippingCost = 4.99
    }

    let tax = (total/10).toFixed(2);
    const granTotal = (total+shippingCost+Number(tax)).toFixed(2)
   
    return (
        <div>
            <h4>Order summery</h4>
            <h5>Items Ordered:{cart.length}</h5>
            <h5>Product Price: ${total}</h5>
            <h5>Shiiping cost: ${shippingCost}</h5>
            <h5>Tax + VAT: ${tax}</h5>
            <h5>Total Cost: ${granTotal}</h5>
        </div>
    );
};

export default Cart;