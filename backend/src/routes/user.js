const { Router } = require('express');
const router = Router();
const user = require('../controllers/user');

//Crear usuario y obtener todos los usuarios:
router.route('/').post(user.createUser).get(user.getAllUsers)
//Confirmar registro de usuario:
router.get('/confirmar/:token', user.confirmar)
// eliminar usuario
router.delete('/:id', user.deleteUser)
// Encontrar usuario:
router.get('/:id', user.findUser)
//


module.exports = router;
