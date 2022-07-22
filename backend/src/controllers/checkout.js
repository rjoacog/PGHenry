const express = require("express");
const Stripe = require("stripe");
//const keys = require("../../../my-app/src/config/key");
const nodemailer = require('nodemailer');
const { emailPago } = require("../helpers/email");
// const stripe = new Stripe(keys.stripeSecretKey);
const stripe = new Stripe('sk_test_51Ke1jsGMvGiWG7BasJxNfexxigjcLA8LPtJA1nkou4hGMeaf7OswqmmYpDcPHmg9T5lkgl015fsX79AUqpDCKLRk00Wx7KzIwR');

const pagos = async (req, res) => {
  try {

    const { id, amount, description } = req.body;
    const desc = JSON.parse(description)

    const payment = await stripe.paymentIntents.create({
      amount,
      description,
      currency: "USD",
      payment_method: id,
      confirm: true,
    });
    console.log('impresión: ', desc  )
    console.log('cantidad: ', amount )
    emailPago({
      email: desc.email,
      amount: amount / 100,
      dni: desc.dni
    });

    res.status(200).send({ message: "succesfull payment" });
  }

  catch (error) {
    res.status(400).json({ message: error })
  }
};

module.exports = {
  pagos
}