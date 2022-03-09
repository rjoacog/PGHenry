const { emailRegistro } = require('../helpers/email');
const generarToken = require('../helpers/generarToken');
const User = require('../models/User');


const createUser = async (req, res) => {
    //Evitar registros duplicados:
    const { email } = req.body;
    const existUsuar = await User.findOne({ email });
    if( existUsuar ) {
        const error = new Error('User already exists.');
        return res.status(400).json({ msg: error.message })
    }

    try {
        const newUser = new User( req.body );
        //Crear el token: 
        newUser.token = generarToken();
        const userInDB = await newUser.save();    //Almacenar usuario a base de datos.
        // Enviar el email de confirmación:
        emailRegistro({
            email: newUser.email,
            name: newUser.name,
            token: newUser.token
        })

        res.status(201).json({
            msg: 'Added Succefully, Check your email.'
        });
    } catch (error) {
        console.log(error);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "Cannot get users"
        })
    }
};

const findUser = async (req, res) => {
    const { id } = req.params
    if (id) {
        try {
            const user = await User.findById( id );
            res.status(200).json({
                message: 'User found!',
                user
            })
        }
        catch (error) {
            res.status(404).json({
                message: 'User not Found',
                error
            })
        }
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id)
            .then(u => res.status(200).json(
                {
                    message: 'User deleted',
                    deletedUser: u
                }
            )
            )
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: "The user couldn't be deleted. Try again"
        })

    }
};

//* confirmar token:
const confirmar = async (req, res) => {
    //Verificamos que el token sea correcto:
    const { token } = req.params;
    const usuarioConfirmar = await User.findOne({ token });
    if( !usuarioConfirmar ) {
        const error = new Error('Token no válido.');
        return res.status(404).json({ msg: error.message });
    }

    try {
        usuarioConfirmar.isActive = true;
        //usuarioConfirmar.token = '';   // TODO Pasar en blanco por si es un token de un solo uso
        await usuarioConfirmar.save();
        res.json({ msg: 'Usuario confirmado correctamente.'})
        console.log(usuarioConfirmar)
    } catch (error) {
        console.log(error);
    }
};

const makeAdmin = async (req, res) => {
    const { id } = req.params
    if (id) {
        try {
            const user = await User.findByIdAndUpdate(id, { role: 'admin' }, { new: true })
            res.status(200).json({
                msg: 'User is now admin',
                user
            })
        }
        catch (error) {
            res.status(404).json({
                msg: 'User not Found',
                error
            })
        }
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, lastName, userName, birthDate, address } = req.body;
    try {
        const updateUser = { name, lastName, userName, birthDate, address, _id: id }
        await User.findByIdAndUpdate(id, updateUser, { new: true })
        res.status(200).json(updateUser);
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: 'Your request could not be processed. try again'
        })

    }
};


// -------------- WISH LIST------------------------------

const wishList = async (req, res) => {
    const { email, productId } = req.body
        try {
            const user = await User.findOne({ 'email': { '$regex': email, $options: 'i' } });
            let wish = [...user.wishList]
            let flag = true;

            for (let i = 0; i < wish.length; ++i) {
                if (wish[i] == productId) {
                    wish = wish.filter(id => id != productId);
                    flag = false;
                    break;
                }
            }

            if (flag)
                wish.push(productId);

            user.wishList = wish;
            await user.save()
            return res.json(wish)
        } catch (error) {
            console.log('WISHLIST ROUTE Error', error)
            res.status(400).json({
                error: 'Your request could not be processed. try again'
            })
        }
};

const getWishList = async (req, res) => {
    const { email } = req.body  
        try {
            const user = await User.findOne({ 'email': { '$regex': email, $options: 'i' } })
            res.json(user?.wishList)
        } catch (error) {
            console.log('Error en acceder a la lista de deseos', error)
        }
}


module.exports = {
    createUser,
    getAllUsers,
    findUser,
    deleteUser,
    confirmar,
    makeAdmin,
    updateUser,
    wishList,
    getWishList
}