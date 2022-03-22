const { Router } = require('express');
const router = Router();
const products = require('../controllers/product');
//const checkAuth = require('../middleware/checkAuth');


router.route('/').post(products.newProduct).get(products.getProducts)
//crear muchos productos:
router.post('/create-many', products.createManyProducts);
//Obtener detalle del producto:
router.get('/:id', products.getProduct)
//Actualizar producto:
router.put('/:id', products.updateProduct)
//borrar producto:
router.delete('/:id', products.deleteProduct);
// Crear review de producto:
router.post('/review', products.productReview);
//Editar Stock
router.post('/stock/:id', products.updateStock)


module.exports = router;