const { Router } = require('express');
const productsRoute = require('./product'); 
const usersRoute = require('./user');
const mailsRoute = require('./mails')
const orderRoute = require('./order')
const checkoutRoute = require('./checkout');


const router = Router();

router.use("/products", productsRoute); 
router.use("/user", usersRoute);
router.use("/mails", mailsRoute);
router.use("/order", orderRoute);
router.use("/checkout", checkoutRoute);



module.exports = router;