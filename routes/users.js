var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource for unknown user');
});

router.get("/:user", function (req, res) {
  res.render('user', { user: req.params.user });
});

module.exports = router;
