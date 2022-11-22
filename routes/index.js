var express = require('express');
var router = express.Router();

cities = [{
  "id": 1,
  "city": "Waterbury",
  "state": "Connecticut",
  "country": "United States"
}, {
  "id": 2,
  "city": "Albany",
  "state": "New York",
  "country": "United States"
}, {
  "id": 3,
  "city": "Utica",
  "state": "New York",
  "country": "United States"
}, {
  "id": 4,
  "city": "Austin",
  "state": "Texas",
  "country": "United States"
}, {
  "id": 5,
  "city": "San Antonio",
  "state": "Texas",
  "country": "United States"
}, {
  "id": 6,
  "city": "Memphis",
  "state": "Tennessee",
  "country": "United States"
}, {
  "id": 7,
  "city": "Fresno",
  "state": "California",
  "country": "United States"
}, {
  "id": 8,
  "city": "Dallas",
  "state": "Texas",
  "country": "United States"
}, {
  "id": 9,
  "city": "Boise",
  "state": "Idaho",
  "country": "United States"
}, {
  "id": 10,
  "city": "Maple Plain",
  "state": "Minnesota",
  "country": "United States"
}]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express', cities: cities });
});

module.exports = router;
