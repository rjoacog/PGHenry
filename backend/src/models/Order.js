const mongoose = require("mongoose");
const { Schema } = mongoose;


const OrderSchema = newSchema({
    status: {
        type: ENUM("Pending", "In progress", "Cancelled", "Completed"),
        defaultValue: "Pending",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    total: {
        type: Integer,
        required: true
    }
})

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;