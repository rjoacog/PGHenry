const express = require("express");
const Stripe = require("stripe");
// const cors = require("cors");

//const app = express();

const stripe = new Stripe(
  "sk_test_51Ke1jsGMvGiWG7BafXKYFFSZj8DsA8ya4ell93bKVUQRQzrmnUuMzzAR7oyte4O0jZRw3IGl34np9Ke9OQKWRiuw00UXwLHuGM"
);

// app.use(cors({ origin: "http://localhost:3000" }));
// app.use(express.json());

//app.post("/checkout", async (req, res) => {
const pagos = async (req, res) => {

  try {
    
    const { id, amount } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      payment_method: id,
      confirm: true,
    });

    res.status(200).send({ message: "succesfull payment" });
  } 
  
  catch (error) {
    res.status(400).json({message: error.raw.message})
  }
};



// app.listen(3001, () => {
//   console.log("Server on port", 3001);
// });

module.exports = {
  pagos
}