import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllCart, delOneCart, delAllCart } from '../actions/creates';
import CartItem from './CartItem';

export default function ShoppingCart() {

    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();


    const clearCart = () => {
        dispatch(clearAllCart())
    }

    const delFromCart = (payload, all = false) => {
        if(all) {
            dispatch(delOneCart(payload))
        } else {
            dispatch(delAllCart(payload, true))
        }
    }

    return (
        <div>
          <h2>Carrito</h2>
          <article>
            <button onClick={clearCart}>Clear cart</button>  

            {
                cart?.map((p, index) => <CartItem key={index} delFromCart={delFromCart} 
                img={p.image}
                  brand={p.brand}
                  model={p.model}
                  color={p.color}
                  price={p.price}
                  _id={p._id}
                  quantity= {p.quantity}
                />)
            }    
         </article>  
        </div>
    )
}
