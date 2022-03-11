const { Router } = require('express');
const productsRoute = require('./product'); 
const usersRoute = require('./user');
const mailsRoute = require('./mails')
const orderRoute = require('./order')


const router = Router();

router.use("/products", productsRoute); 
router.use("/user", usersRoute);
router.use("/mails", mailsRoute);
router.use("/order", orderRoute);


module.exports = router;