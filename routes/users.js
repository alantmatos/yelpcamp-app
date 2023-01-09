const express = require('express');
const User = require('../models/user');
const router = express.Router({ mergeParams: true });
const CatchAsync = require('../utilities/CatchAsync');
const ExpressError = require('../utilities/ExpressError');
const passport = require('passport');
const users = require('../controllers/users');


router.route('/register')
    .get(users.renderCreateUserForm)
    .post(CatchAsync(users.createUser));

router.route('/login')
    .get(users.renderLoginForm)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.logUserIn);

router.get('/logout', users.logUserOut);


module.exports = router;

