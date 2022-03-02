const { Router } = require('express');
const router = Router();
const products = require('../controllers/product');

router.route('/').post(products.newProduct).get(products.getProducts)


module.exports = router;