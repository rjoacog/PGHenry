const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
    review: { type: String, required: true },
    rating: { type: Number, required: true },
    user: { type: String, required: true },
});


const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String
    },
    stock: {
        type: Number,
        required: true 
    },
    price: {
        type: Number,
        required:true
    },
    //updated: Date,
    created: {
        type: Date,
        required: true,
        default: Date.now()
    },
    brand:{
        type: String,
        required: true
    },
    color:{
        type: Array,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true,
        enum: ['Men', 'Women']
    },
    size:{
        type: Array,
        required: true,
    },
    reviews: [reviewSchema],
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;