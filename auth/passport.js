const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = require('../models/User')
const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;

/**
 * JSON Web Token Strategy for Passport.
 * 
 * SOURCE: 
 * https://appdividend.com/2018/07/18/react-redux-node-mongodb-jwt-authentication/#1_Create_a_backend_on_Nodejs
 * 
 * @param {Object} passport 
 */
module.exports = passport => {
    passport.use(new JWTStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id) // Look in JWT for valid User ID
            .then(user => {
                if(user) { // We either find user...
                    return done(null, user);
                }
                return done(null, false); //...or we don't
            })
            .catch(err => console.error(err));
    }));
}