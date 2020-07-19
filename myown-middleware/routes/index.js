var express = require('express');
var et = require('./errortranslate');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/middleware', et(200))

module.exports = router;
