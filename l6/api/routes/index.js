var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers');
var ctrlReviews = require('../controllers/reviews.controllers.js');

router
    .route('/hotels')
    .get(ctrlHotels.hotelsGetAll);

router
    .route('/hotels/:hotelId')
    .get(ctrlHotels.hotelsGetOne);

router
    .route('/hotels/new')
    .post(ctrlHotels.hotelAddOne);

//Review Routes
router
    .route('/hotels/:hotelId/reviews')
    .get(ctrlReviews.reviewsGetAll);

router
    .route('/hotels/:hotelId/reviews/:reviewId')
    .get(ctrlReviews.reviewsGetOne);


module.exports = router;

//Palintino Hotel ID 59d3b62233d9c8d7b3996f06