const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        require: true,
        validate: /^[a-zA-Z]{3,20}$/,
    },
    contact: {
        type: String,
        required: true,
        validate: /^[6-9]{1}[0-9]{9}$/,
    },
    email: {
        type: String,
        validate: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+[.]+[a-zA-Z]+$/,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
    }
},
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
