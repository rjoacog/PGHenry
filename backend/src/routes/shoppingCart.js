const { Router } = require('express');
const { addCartItem, getCartEmpty, getAllCartItems, editCartQuantity, deleteCartItem } = require('../controllers/shoppingCart')

const router = Router();



router.get('/cart/:idUser', getAllCartItems);
router.post('/cart/:idUser', addCartItem);
router.delete('/cart/:idUser', getCartEmpty);
router.put('/cart/:idUser', editCartQuantity, getAllCartItems);
router.delete('/cart/:idUser/:idProduct', deleteCartItem);



module.exports = router;