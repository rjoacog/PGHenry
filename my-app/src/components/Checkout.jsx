import React, { useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { stripeAxios } from '../config/clienteAxios';
import keys from '../config/key';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "bootswatch/dist/lux/bootstrap.min.css";

const stripePromise = loadStripe(keys.stripePublishableKey);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const products = useSelector((state) => state.cart);
  console.log(products)
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
      quantity: d.quantity
    }
  })

  const des = JSON.stringify(description)
  console.log(description)

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
            description: des

          }
        );
        console.log(data);
        elements.getElement(CardElement).clear();
      }

      catch (error) {
        console.log(error);
      }

      setLoading(false);
    }
  };

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div>
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
        <CardElement />
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
