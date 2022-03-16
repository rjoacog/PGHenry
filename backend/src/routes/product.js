const { Router } = require('express');
const router = Router();
const products = require('../controllers/product');
const checkAuth = require('../middleware/checkAuth');


router.route('/').post(checkAuth, products.newProduct).get(products.getProducts)
//crear muchos productos:
router.post('/create-many', checkAuth, products.createManyProducts);
//Obtener detalle del producto:
router.get('/:id', products.getProduct)
//Actualizar producto:
router.put('/:id', checkAuth, products.updateProduct)
//borrar producto:
router.delete('/:id', checkAuth, products.deleteProduct);
// Crear review de producto:
router.post('/review', products.productReview);


module.exports = router;