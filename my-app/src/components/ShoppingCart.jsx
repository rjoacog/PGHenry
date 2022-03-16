import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllCart, delOneCart, delAllCart } from '../actions/creates';
import CartItem from './CartItem';
import { Button, Text, Box } from '@chakra-ui/react';

export default function ShoppingCart() {

    const [totalItems, setTotalItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    useEffect(() => {
        let itemCarts = 0;
        let priceCart = 0;
        

        cart.forEach(item => {
            itemCarts += item.quantity
            priceCart += item.price * item.quantity
        })

        setTotalItems(itemCarts)
        setTotalPrice(priceCart)
        localStorage.setItem('items', JSON.stringify(cart));
    }, [cart, totalItems, totalPrice])

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
        <Box display={"flex"} justifyContent="center" textAlign={"center"} mr={"100"} ml={"100"} >
        <div>
        <Box>    
          <Text fontSize='3xl'>Carrito</Text>
              <br />
            <Button onClick={clearCart}  borderRadius='md' backgroundColor="red.400" color="white" size='sm'>Clear cart</Button>  
            </Box> 

            {
                cart?.map((p, index) => <CartItem key={index} delFromCart={delFromCart} 
                img={p.image}
                  brand={p.brand}
                  name={p.name}
                  price={p.price}
                  _id={p._id}
                  quantity= {p.quantity}
                />)
            }     
        </div>
        </Box>
    )
}
