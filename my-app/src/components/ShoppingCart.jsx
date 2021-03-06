import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delOneCart, delAllCart, stock } from '../actions/creates';
import CartItem from './CartItem';
import { Button, Text, Box } from '@chakra-ui/react';
import {Link} from "react-router-dom";

export default function ShoppingCart() {
    const [totalItems, setTotalItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalCart, setTotalCart] = useState(0)

    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();


    useEffect(() => {
        let itemCarts = 0;
        let priceCart = 0;
        let totalCart = 0;

        cart.forEach(item => {
            itemCarts += item.quantity
            priceCart += item.price * item.quantity
            totalCart = priceCart
        })

        setTotalItems(itemCarts)
        setTotalPrice(priceCart)
        setTotalCart(totalCart)
        localStorage.setItem('items', JSON.stringify(cart));
    }, [cart, totalItems, totalPrice, totalCart])



    const delFromCart = (payload, all = false) => {
        if(all) {
            dispatch(delOneCart(payload))
            dispatch(stock("increment", payload))
        } else {
            dispatch(delAllCart(payload, true));
            dispatch(stock("increment", payload))
        }
    }

    return (
        <Box display={"flex"} flexDirection={"column"} justifyContent="left" textAlign={"center"} mr={"0"} ml={"0"} >
        <div>
            {
                cart?.map((p, index) => <CartItem key={index} delFromCart={delFromCart} 
                img={p.image}
                    brand={p.brand}
                    name={p.name}
                    price={p.price}
                    _id={p._id}
                    size={p.size}
                    quantity= {p.quantity}
                />)
            } 
            <Box bg='blackAlpha.900' w='100%' p={4} color='goldenrod'>
                    <Text fontSize='3xl'>TOTAL: u$d {totalCart} </Text>
                    < br/>
                    <Link to='/checkout'>
                        <Button 
                            backgroundColor='goldenrod' 
                            colorScheme='black' 
                            disabled={totalCart === 0}
                        >
                            PROCEED TO CHECKOUT
                        </Button>
                    </Link>
                    </Box>    
        </div>
        </Box>
    )
}
