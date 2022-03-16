const { Router } = require("express");
const { addOrderToDB, getOrdersFromDB, updateStatusOrderFromDB } = require("../controllers/orders");

const router = Router();


router.post("/", async (req, res, next) => { 
    res.json(await addOrderToDB({userId: req.body.userId, shoppingCart: req.body.shoppingCart, 
                                shippingInfo: req.body.shippingInfo})) 
})

router.post("/getOrders", async (req, res, next) => {
    res.json(await getOrdersFromDB({email: req.body.email}))
})

router.post("/getOrders/:id", async (req, res, next) => {
    res.json(await getOrdersFromDB({id: req.params.id, email: req.body.email}))
})

router.patch("/:id", async (req, res, next) => {
    res.json( await updateStatusOrderFromDB({email: req.body.email, status: req.body.status, id: req.params.id}))
})



module.exports = router;