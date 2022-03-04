const { Router } = require('express');
const router = Router();
const user = require('../controllers/user');

//Crear usuario y obtener todos los usuarios:
router.route('/').post(user.createUser).get(user.getAllUsers)
// eliminar usuario
router.delete('/:id', user.deleteUser)

router.get('/:id', user.findUser)


module.exports = router;
