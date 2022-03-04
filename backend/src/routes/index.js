const { Router } = require('express');
const productsRoute = require('./product'); 
const usersRoute = require('./user'); 


const router = Router();

router.use("/products", productsRoute); 
router.use("/user", usersRoute); 


module.exports = router;