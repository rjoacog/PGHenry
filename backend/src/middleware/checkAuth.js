const jwt = require('jsonwebtoken');
const User = require('../models/User');


//* Autenticación de los datos del usuario, si estan correctos pasará al perfil:
const checkAuth =async  (req, res, next) => {
    
    let token;
    if( req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer") 
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify( token,  process.env.JWT_SECRET);
            req.user = await User.findById( decoded.id ).select('-password -isActive -token -wishList -shoppingCart -address -__v') ;
            //console.log(req.user)

            return next();

        } catch (error) {
            //console.log(error);
            return res.status(404).json({ msg: 'Hubo un error en chekAuth' })
        }
    }

    if( !token ) {
        const error = new Error('token no válido.');
        return res.status(401).json({ msg: error.message })
    }

    next();
}


module.exports = checkAuth;