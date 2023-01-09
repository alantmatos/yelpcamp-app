const express = require('express');
const router = express.Router();
const CatchAsync = require('../utilities/CatchAsync');
const passport = require('passport');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const campgrounds = require('../controllers/campgrounds');



router.get('/', CatchAsync(campgrounds.index));

router.delete('/:id', isLoggedIn, isAuthor, CatchAsync(campgrounds.deleteCampground));

router.put('/:id', isLoggedIn, isAuthor, validateCampground, CatchAsync(campgrounds.updateCampground));

router.get('/new', isLoggedIn, campgrounds.renderNewForm);

router.post('/', isLoggedIn, validateCampground, CatchAsync(campgrounds.createCampground));

router.get('/:id', CatchAsync(campgrounds.showCampground));

router.get('/:id/edit', isLoggedIn, isAuthor, CatchAsync(campgrounds.renderEditCampground));


module.exports = router;