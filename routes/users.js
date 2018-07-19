/**
 * Our User routes.
 * 
 * SOURCE: 
 * https://appdividend.com/2018/07/18/react-redux-node-mongodb-jwt-authentication/#1_Create_a_backend_on_Nodejs
 * 
 */

const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../auth/validation/register');
const validateLoginInput = require('../auth/validation/login');

const User = require('../models/User');

/**
 * POST - Register new user
 */
router.post('/register', function (req, res) {

    // Validate input for errors, if any, stop immediately.
    const {
        errors,
        isValid
    } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    // No errors, so we check if email exists already
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (user) {

            // We found a user with that email, so we gotta let them know
            return res.status(400).json({
                email: 'Email already exists'
            });

        } else {

            // Email is available, so we fetch avatar based on email 
            // (if no avatar found, we send default)
            const avatar = gravatar.url(req.body.email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });

            // Make a new User using model
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                avatar,
                type: req.body.type
            });

            // Create hash value of password
            bcrypt.genSalt(10, (err, salt) => {

                if (err) {
                    console.error('There was an error', err);
                } else {

                    bcrypt.hash(newUser.password, salt, (err, hash) => {

                        if (err) {
                            console.error('There was an error', err);
                        } else {

                            // Assign our hashed password to our new user...
                            newUser.password = hash;

                            // Then store in DB
                            // and send that user back to client.
                            newUser
                                .save()
                                .then(user => {
                                    res.json(user)
                                });
                        }
                    });

                }
            });
        }
    });
});


/**
 * POST - Login with user credentials
 */
router.post('/login', (req, res) => {

    const {
        errors,
        isValid
    } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({
            email
        })
        .then(user => {
            if (!user) {
                errors.email = 'User not found'
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            name: user.name,
                            avatar: user.avatar
                        }
                        jwt.sign(payload, process.env.SECRET, {
                            expiresIn: 3600
                        }, (err, token) => {
                            if (err) console.error('There is some error in token', err);
                            else {
                                res.json({
                                    success: true,
                                    token: `Bearer ${token}`
                                });
                            }
                        });
                    } else {
                        errors.password = 'Incorrect Password';
                        return res.status(400).json(errors);
                    }
                });
        });
});

router.get('/me', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

module.exports = router;