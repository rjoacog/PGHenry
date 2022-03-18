const { Router } = require('express');
const { pagos } = require('../controllers/checkout');
const { route } = require('./product');
const router = Router();



router.post('/', pagos)


module.exports = router;