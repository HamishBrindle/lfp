const Validator = require('validator');
const isEmpty = require('./is-empty');

/**
 * Validates login information.
 * 
 * Takes in User information (from the User) and decides if input is valid
 * or not using the Validator library and IsEmpty function.
 * 
 * When we encounter an error, we concatenate it onto an error object and
 * pass it through for logging, display, etc.
 * 
 * SOURCE: 
 * https://appdividend.com/2018/07/18/react-redux-node-mongodb-jwt-authentication/#1_Create_a_backend_on_Nodejs
 * 
 * @param {Object} data 
 */
module.exports = function validateLoginInput(data) {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Password must have 6 chars';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}