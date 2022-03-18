import axios from "axios";

const clienteAxios = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}`
});

const stripeAxios = axios.create({
    baseURL: `${process.env.REACT_APP_STRIPE_URL}`
});


export {
    clienteAxios,
    stripeAxios
} 