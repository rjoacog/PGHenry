const mongoose = require("mongoose");
const { Schema } = mongoose;


const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    // token: {
    //     type: String
    // },
    birthDate: {
        type: String
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    },
    isActive: {
        type: Boolean,
        default:true
    },
    wishList: [
        {
            type: Schema.ObjectId,
            ref: "Product",
        }
    ]
});

const User = mongoose.model("User", UserSchema);
module.exports = User;