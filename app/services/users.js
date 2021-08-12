/**********************************************************************************************************
 *  Execution    : 1. Default node with npm   cmd> npm server.js
                   2. If nodemon installed    cmd> nodemon start
 *
 * Purpose      : services layer handles the actual business logic of our application
 *
 * @description  :modules need to be required before execution of this file  
 *
 * @file        : services/user.js
 * @overview    : Performs tasks to interact with controller and model layer
 * @module      : calls functions from model layer which involves db operations & return response to controller  
 * @author      : Shaheen M.
 * @version     : 1.0
 * @since       : 15-06-2021
 **********************************************************************************************************/
const userModel = require('../models/users');
const helper = require('../middlewares/helper');

class UserService {

    /**
       * creates a new user 
       * @param {*} req (express property)
       * @param {*} res (express property)
       * @returns promise
       */

    registerUser = (userData) => {
        try {
            return userModel.addNewUser(userData)
                .then(data => {
                    return data;
                }).catch(error => {
                    return error;
                });
        } catch (error) {
            return error;
        }
    }
}
module.exports = new UserService();