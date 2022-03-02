const { Router } = require('express');
const productsRoute = require('./product'); 


const router = Router();

router.use("/products", productsRoute); 


module.exports = router;