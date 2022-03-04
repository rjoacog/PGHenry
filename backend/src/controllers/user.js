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
        //TODO crear el token: 
        const userInDB = await newUser.save();    //Almacenar usuario a base de datos.
        // TODO Enviar el email de confirmación:

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


module.exports = {
    createUser,
    getAllUsers,
}