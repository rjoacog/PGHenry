const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require('bcrypt');   // Para encriptar contraseñas


const AdminSchema = new Schema({
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
    token: {
        type: String
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    },
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

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;