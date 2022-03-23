import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { stripeAxios } from '../config/clienteAxios';
import keys from '../config/key';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "bootswatch/dist/lux/bootstrap.min.css";
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { clearAllCart } from '../actions/creates'
const stripePromise = loadStripe(keys.stripePublishableKey);

const CheckoutForm = () => {
  const stripe = useStripe();
  const dispatch = useDispatch();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [DNI, setDNI] = useState('');
  const products = useSelector((state) => state.cart);
  let [succesfull, setSuccesfull] = useState(false);
  let [failed, setFailed] = useState(false);
  const navigate = useNavigate();

  const product = products.map((p) => {
    return {
      id: p._id,
      name: p.name,
      price: p.price,
      photo: p.image,
      quantity: p.quantity,
    };
  });

  const ids = product.map(p => p.id)
  const price = [];
  const sa = product.map(p => {
    price.push(p.price * p.quantity)
  })
  let sum = 0

  for (let i = 0; i < price.length; i++) {
    sum += price[i];
  }

  const description = product.map(d => {
    return {
      name: d.name,
      size: 5,
      color: "black",
      id: d._id,
      quantity: d.quantity,
      email: email,
      dni: DNI
    }
  })

  const des = JSON.stringify(description)

  const clearStorage = () => {
    setTimeout(() => {
      dispatch(clearAllCart())
      navigate('/')
    }, 8000)
  }

  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  }
  const handleChangeDni = (e) => {
    e.preventDefault();
    setDNI(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    setLoading(true);

    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await stripeAxios.post("/checkout",
          {
            id,
            amount: sum * 100,
            description: des,
          }
        );
        setEmail('')
        setDNI('')
        elements.getElement(CardElement).clear();
        setSuccesfull(true);
        setFailed(false);
        clearStorage();
      }

      catch (error) {
        console.log(error);
        setFailed(true);
      }

      setLoading(false);
    }
  };

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div style={{ backgroundColor: '#edf2f7' }}>
        {product.map((p) => {
          return (
            <div className="container p-4" style={{ borderBottom: '1px solid black' }}>
              <br />
              <h3 style={{ fontWeight: "bold", color: "black" }}>
                Product: {p.name}
              </h3>
              <h3 style={{ fontWeight: "bold", color: "black" }}>
                (x1) {p.price} --- (x{p.quantity}) ${p.price * p.quantity}
              </h3>
              <br />
              <div>
                <img
                  src={p.photo}
                  alt="img not found"
                  style={{ width: "100%", height: "25vh" }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <p>Total: {sum}</p>
      <div className="form-group">
        <br />
        <input type="email" pattern=".+@gmail.com" required className="form-control" placeholder="Email" value={email} onChange={handleChangeEmail} />
        <br />
        <input type="number" className="form-control" placeholder="DNI" value={DNI} onChange={handleChangeDni} />
        <br />
        <CardElement />
        <br />
      </div>
      <button className="btn btn-success" disabled={!stripe}>
        {loading ? (
          <div>
            <div class="spinner-border text-light" role="status"></div>
          </div>
        ) : (
          "Buy"
        )}

      </button>
      <br />
      {succesfull ? (
        <div>
          <Alert status="success">
            <AlertIcon />
            <Box flex="1">
              <AlertTitle>Success payment!</AlertTitle>
              <AlertDescription>We will send you an email when your order is ready.</AlertDescription>
              <br />
              <AlertDescription>you will be redirected to home</AlertDescription>
            </Box>
            <br />
          </Alert>
          </div>
      )
        : null}
      <br />
      {failed ? (
        <Alert status="error">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Failed payment!</AlertTitle>
            <AlertDescription>Try again</AlertDescription>
          </Box>
        </Alert>
      ) : null}
      <div style={{ alignSelf: 'center' }}>
      </div>
    </form>
  );
};

function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <div className="container p-4">
        <div className="row h-100">
          <div className="col-md-4 offset-md-4 h-100">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default Checkout;
