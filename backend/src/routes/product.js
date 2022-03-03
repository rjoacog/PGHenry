const { Router } = require('express');
const router = Router();
const products = require('../controllers/product');


router.route('/').post(products.newProduct).get(products.getProducts)
//crear muchos productos:
router.post('/create-many', products.createManyProducts);
//Obtener detalle del producto:
router.get('/:id', products.getProduct)


module.exports = router;