const {sendMail} = require('../helpers/mailOrder')


const sendOrderDetails = async function (req, res) {
    const {name, email, adress, shoppingCart} = req.body
    try {
        await sendMail({payload: {name, email, adress, shoppingCart}})
        res.json('E-mail succesfully sent to user')
    }
    catch (error){
        res.status(404).json(error)
    }
}


module.exports = {sendOrderDetails}