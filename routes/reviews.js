const express = require('express');
const router = express.Router({mergeParams: true});

const Campground = require('../models/campground');
const Review = require('../models/review');

const CatchAsync = require('../utilities/CatchAsync');
const ExpressError = require('../utilities/ExpressError');

const { campgroundSchema, reviewSchema } = require('../schemas.js');


// validates review data
const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errorMsg = error.details.map(el => el.message).join(',')
        throw new ExpressError(errorMsg, 400)
    } else {
        next();
    }
};

router.post('/', validateReview, async (req, res, next) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success', 'A new review was created');
    res.redirect(`/campgrounds/${campground._id}`);
});

router.delete('/:reviewId', CatchAsync(async (req, res, next) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'The review was deleted');
    res.redirect(`/campgrounds/${id}`);
}));


module.exports = router;