var express = require('express');
var router = express.Router();

const User = require('../models/User.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, (err, results) => {
    res.send(results)
  })
});

module.exports = router;
