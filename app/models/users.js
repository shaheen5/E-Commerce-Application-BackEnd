const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        require: true,
        validate: /^[a-zA-Z\s]{3,20}$/,
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
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
},
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
class UserRegistrationAndLogin {
    /**
        * @description adNewUser method is to save the new User Data in database
        * @param userData is data sent from Services layer
        * @return promise is used to send appropriate response
        */
    addNewUser = (userData) => {
        try {
            //create new user
            const user = new User({
                userName: userData.userName,
                contact: userData.contact,
                email: userData.email,
                password: userData.password,
                role: userData.role
            });
            // Save user details in the database
            return user.save()
                .then(data => {
                    return data;
                }).catch(err => {
                    return err;
                });
        } catch (error) {
            return (error, null);
        }
    }
}
module.exports = new UserRegistrationAndLogin();
