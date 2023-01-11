const User = require('../models/user');


module.exports.renderCreateUserForm = (req, res) => {
    res.render('users/register')
}

module.exports.createUser = async (req, res) => {
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
};


module.exports.renderLoginForm = (req, res) => {
    res.render('users/login');
};


module.exports.logUserOut = (req, res) => {
    req.logout(err=>{
        if(err){
            return next(err)
        }
        req.flash('success', 'see you soon!');
        res.redirect('/campgrounds');
    });
};

module.exports.logUserIn = (req, res) => {
    req.flash('success', 'Welcome Back!');
    const redirectUserTo = req.session.returnTo || '/campgrounds';
    delete req.session.returnTo;
    res.redirect(redirectUserTo);
}

module.exports.testeRedirectRoute = (req, res) => {
    req.flash('success', 'welcome back!');
    const redirectUrl = req.session.returnTo || '/campgrounds';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}