const express = require("express");
const Stripe = require("stripe");
const keys = require("../config/key");
// const cors = require("cors");

//const app = express();

const stripe = new Stripe("sk_test_51Ke1jsGMvGiWG7BasJxNfexxigjcLA8LPtJA1nkou4hGMeaf7OswqmmYpDcPHmg9T5lkgl015fsX79AUqpDCKLRk00Wx7KzIwR");

// app.use(cors({ origin: "http://localhost:3000" }));
// app.use(express.json());

//app.post("/checkout", async (req, res) => {
const pagos = async (req, res) => {

  try {
    
    const { id, amount, description } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount,
      description,
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