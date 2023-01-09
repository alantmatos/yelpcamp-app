const express = require('express');
const User = require('../models/user');
const router = express.Router({ mergeParams: true });
const CatchAsync = require('../utilities/CatchAsync');
const ExpressError = require('../utilities/ExpressError');
const passport = require('passport');
const users = require('../controllers/users');



router.get('/register', users.renderCreateUserForm);

router.post('/register', CatchAsync(users.createUser));

router.get('/login', users.renderLoginForm);

router.get('/logout', users.logUserOut);

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.logUserIn);

module.exports = router;

