const { Router } = require("express");


const {sendOrderDetails} = require('../controllers/mailer')
const router = Router();


module.exports = () => {
    router.post('/', sendOrderDetails)
    return router
}