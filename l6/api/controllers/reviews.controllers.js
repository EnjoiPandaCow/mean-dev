var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');

//Get all reviews for a hotel
module.exports.reviewsGetAll = function(req, res) {
    var hotelId = req.params.hotelId;
    console.log("GET hotelId", hotelId);

    Hotel
        .findById(hotelId)
        .select('reviews')
        .exec(function(err, doc){
            console.log("Returned doc", doc);
            res
                .status(200)
                .json(doc.reviews);
        });
};

//Get single review for a hotel
module.exports.reviewsGetOne = function(req, res) {

    var hotelId = req.params.hotelId;
    var reviewId = req.params.reviewId;
    console.log("GET reviewId " + hotelId + " for hotelId " + hotelId);

    Hotel
        .findById(hotelId)
        .select('reviews')
        .exec(function(err, hotel){
            console.log("Returned doc", hotel);
            var review = hotel.reviews.id(reviewId);
            res
                .status(200)
                .json(review);
        });
};

