/**********************************************************************************************************
 *  Execution    : 1. Default node with npm   cmd> npm server.js
                   2. If nodemon installed    cmd> nodemon start
 *
 * Purpose      : controller handles request and responses of  user login & registartion
 *
 * @description  :modules need to be required before execution of this file 
 *
 * @file        : controller/users.controller.js
 * @overview    : Handles requests coming from clients to login & register 
 * @module      : neccessary part (controller) of MVC Model
 * @author      : Shaheen M.
 * @version     : 1.0
 * @since       : 7-08-2021
 **********************************************************************************************************/
const userService = require('../services/users');
//const userValidator = require('../middlewares/UserValidation');

class UserController {
    /**
        * function to validate req body and call service layer function registerUser to add new user in db
        * @param {*} req (express property)
        * @param {*} res (express property)
        * @returns HTTP status and object
        */
    userSignup = (req, res) => {
        try {
            const userDetails = {
                userName: req.body.userName,
                contact: req.body.contact,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            };
            userService.registerUser(userDetails)
                .then(userData => {
                    if (!userData) {
                        return res.status(404).send({
                            success: false,
                            message: "Some error occured during user registration"
                        });
                    }
                    else {
                        res.status(201).send({
                            success: true,
                            data: userData,
                            message: "Registration Successfull !"
                        });
                    }
                }).catch(err => {
                    return res.status(500).send({
                        sucess: false,
                        message: "Some error occured while saving user Details!"
                    });
                });
        } catch (error) {
            return res.send({ message: error.message })
        }
    }
}
module.exports = new UserController();