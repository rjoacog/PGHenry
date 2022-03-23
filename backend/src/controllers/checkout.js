const express = require("express");
const Stripe = require("stripe");
const keys = require("../config/key");
const { emailPago } = require("../helpers/email");
// const cors = require("cors");

//const stripe = new Stripe(keys.stripeSecretKey);
 const stripe = new Stripe("sk_test_51Ke1jsGMvGiWG7BasJxNfexxigjcLA8LPtJA1nkou4hGMeaf7OswqmmYpDcPHmg9T5lkgl015fsX79AUqpDCKLRk00Wx7KzIwR");


const pagos = async (req, res) => {
  try {

    const { id, description, dni, email } = req.body;
    

    const payment = await stripe.paymentIntents.create({
      amount,
      description,
      currency: "USD",
      payment_method: id,
      confirm: true,
    });

    emailPago({
      email,
      dni,
      description: description,
      id
    })

    res.status(200).send({ message: "succesfull payment" });
  }

  catch (error) {
    res.status(400).json({ message: error })
  }
};

module.exports = {
  pagos
}



// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);