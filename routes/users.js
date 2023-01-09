const express = require('express');
const User = require('../models/user');
const router = express.Router({ mergeParams: true });
const CatchAsync = require('../utilities/CatchAsync');
const ExpressError = require('../utilities/ExpressError');
const passport = require('passport');



router.get('/register', (req, res) => {
    res.render('users/register')
});

router.post('/register', CatchAsync(async (req, res) => {
    try {
        const { username, email, password } = req.body.user;
        const user = new User({ username, email });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if(err) return next(err);
            req.flash('success', "Welcome to YelpCamp!")
            res.redirect('/campgrounds');
        })
        
    } catch (e) {
        req.flash('error', e.message)
        res.redirect('/register');
    }
}));

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.get('/logout', (req, res) => {
    req.logout(err=>{
        if(err){
            return next(err)
        }
        req.flash('success', 'see you soon!');
        res.redirect('/campgrounds');
    });
});

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res, next) => {
    req.flash('success', 'Welcome Back!');
    //saves url user tried to acess, redirect after loguedin/
    //the session is getting lost upon loggin, losing originalurl
    const redirectUserTo = req.session.returnTo || '/campgrounds';
    console.log('url to return is ', redirectUserTo);
    res.redirect(redirectUserTo);
    //delete req.session.returnTo;
});

module.exports = router;

