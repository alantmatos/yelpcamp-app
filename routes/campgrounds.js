const express = require('express');
const router = express.Router();
const Campground = require('../models/campground');
const CatchAsync = require('../utilities/CatchAsync');
const passport = require('passport');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');




router.get('/', CatchAsync(async (req, res, next) => {
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index', { campgrounds })
}));

router.delete('/:id', isLoggedIn, CatchAsync(async (req, res, next) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndDelete(id);
    req.flash('success', 'The campground was successfully deleted');
    res.redirect('/campgrounds')
}));

router.put('/:id', isLoggedIn, isAuthor, validateCampground, CatchAsync(async (req, res, next) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    req.flash('success', 'The campground was successfully updated!');
    res.redirect(`/campgrounds/${campground._id}`)
}));

router.get('/new', isLoggedIn, (req, res) => {
    res.render('campgrounds/new');
});

router.post('/', isLoggedIn, validateCampground, CatchAsync(async (req, res, next) => {
    // if (!req.body.campground) throw new ExpressError('Invalid Campground Data', 400)
    const campground = new Campground(req.body.campground);
    campground.author = req.user._id;
    await campground.save();
    req.flash('success', 'The new campground was successfully created!');
    res.redirect(`/campgrounds/${campground._id}`)
}));

router.get('/:id', CatchAsync(async (req, res, next) => {
    const { id } = req.params
    const campground = await Campground.findById(id).populate({
        path: 'reviews',
        populate:{
            path: 'author'
        }
        }).populate('author');
    if (!campground) {
        req.flash('error', 'The campground was not found');
        return res.redirect('/campgrounds');
    } else {
        res.render('campgrounds/show', { campground })
    }
}));

router.get('/:id/edit', isLoggedIn, isAuthor, CatchAsync(async (req, res, next) => {
    const { id } = req.params
    const campground = await Campground.findById(id)
    if (!campground) {
        req.flash('error', 'The campground was not found');
        return res.redirect('/campgrounds');
    } else {
        res.render('campgrounds/edit', { campground })
    }
}));


module.exports = router;