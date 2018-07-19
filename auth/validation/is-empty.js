/**
 * Check if the passed value is undefined or null or object or string‘s length is 0.
 * 
 * SOURCE: 
 * https://appdividend.com/2018/07/18/react-redux-node-mongodb-jwt-authentication/#1_Create_a_backend_on_Nodejs
 * 
 * @param {String|Object} value 
 */
const isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
}
module.exports = isEmpty;