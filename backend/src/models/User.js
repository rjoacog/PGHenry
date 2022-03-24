const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require('bcrypt');   // Para encriptar contraseñas


const UserSchema = new Schema({
    name: {
        type: String,
        required: false,
        trim: true,
    },
    lastName: {
        type: String,
        required: false,
        trim: true
    },
    userName: {
        type: String,
        required: false,
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
        required: false,
        trim: true
    },
    token: {
        type: String
    },
    birthDate: {
        type: String
    },
    address: {
        type: String,
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    },
    isActive: {
        type: Boolean,
        default: false
    },
    shoppingCart: [
        {
        type: Schema.ObjectId,
        ref: "Product"
        }
    ],
    wishList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        }
    ]
});

//* Encriptamos las contraseñas antes de guardarlas:
UserSchema.pre('save', async function(next) {
    if( !this.isModified('password') ) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash( this.password, salt )
});
//* Comprobar password:
UserSchema.methods.comparePassword = async function( passwordForm ) {
    return await bcrypt.compare( passwordForm, this.password );
};

const User = mongoose.model("User", UserSchema);
module.exports = User;