const mongoose = require("mongoose");
const { Schema } = mongoose;


const Order_detailSchema = newSchema({
    productId: {
        type: Integer,
        primaryKey: true,
        required: true
    },
    size: {
        type: Integer,
        primaryKey: true,
        required: true
    },
    subtotal: {
        type: Integer,
        required: true
    },
    total: {
        type: Integer,
        required: true
    }
})



const Order_detail = mongoose.model("Order_detail", Order_detailSchema);
module.exports = Order_detail;