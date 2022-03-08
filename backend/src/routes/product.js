const { Router } = require('express');
const router = Router();
const products = require('../controllers/product');


router.route('/').post(products.newProduct).get(products.getProducts)
//crear muchos productos:
router.post('/create-many', products.createManyProducts);
//Obtener detalle del producto:
router.get('/:id', products.getProduct)
//Actualizar producto:
router.put('/:id', products.updateProduct)
//borrar producto:
router.delete('/:id', products.deleteProduct);


module.exports = router;