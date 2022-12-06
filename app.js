const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utilities/ExpressError');

//routes file
const campgrounds = require('./routes/campgrounds')
const reviews = require('./routes/reviews');


//database connection
mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    // useCreateIndex: true, ( no longer supported )
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});


// tell express to parse the body, if not parsed body will be empty
app.use(express.urlencoded({ extended: true }));

// forms only make a get and post requests, im usng method overRide to
// make a patch request in order to update data.
app.use(methodOverride('_method'));

//using the pre set up route
app.use('/campgrounds', campgrounds);
app.use('/campgrounds/:id/reviews', reviews);

//config
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//root page
app.get('/', (req, res) => {
    res.render("home")
});

//404 page
app.all('*', (req, res, next) => {
    //res.send('404! My dog ate this page, Are you sure this is the one you are looking for?')
    next(new ExpressError('Not Found', 404))
});



//Error handling middleware
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Ugh! Something went wrong';
    res.status(statusCode).render('error', { err });
});

//database connection feedback
app.listen(3000, () => {
    console.log("listening on Port 3000")
});