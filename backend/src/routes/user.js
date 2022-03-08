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
// hacer Admin a un usuario:
router.put('/makeAdmin/:id', user.makeAdmin)
// actualizar usuario
router.put('/:id', user.updateUser)

// Wish List
router.post("/wish", user.wishList)
router.get("/wish/all", user.getWishList)


module.exports = router;
