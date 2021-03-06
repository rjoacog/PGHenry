const { Router } = require('express');
const router = Router();
const user = require('../controllers/user');
//const checkAuth = require('../middleware/checkAuth');
const { jwtCheck } = require('../middleware/check-jwt');

//Crear usuario y obtener todos los usuarios:
router.route('/').post(user.createUser).get(user.getAllUsers)
//Confirmar registro de usuario isActive:
router.get('/confirmar/:token', user.confirmar)
//Autneticar registro de usuario asignar JWT:
router.post('/confirmar', user.userAuth)
// eliminar usuario
router.delete('/:id', user.deleteUser)
// Encontrar usuario:
router.get('/:id', user.findUser)
// actualizar usuario
router.put('/:id', jwtCheck, user.updateUser)
// hacer Admin a un usuario:
router.put('/makeAdmin/:id', user.makeAdmin)
//Checar que todos los datos sean correctos y despues dirigirlos al perfil:
router.get('/profile/auth', user.profile ); 

// Wish List
router.post("/wish", user.wishList)
router.get("/wish/list", user.getWishList)

//Carrito de compras
router.post("/shoppingCart", async (req, res, next) => {
    const { userId, shoppingCartElements } = req.body;
    if (userId) {
        try {
            const user = await user.findByPk(userId);
            if (user) {
                const newCart = shoppingCartElements;
                user.update({
                    cart: JSON.stringify(newCart),
                });
                user.save();
            }
            return res.send({ msg: "Shopping Cart has been updated successfully" });
        } catch (error) {
            next(error);
        }
    } else {
        res.status(404).send({ msg: "Missing basics values" });
    }
});



module.exports = router;
