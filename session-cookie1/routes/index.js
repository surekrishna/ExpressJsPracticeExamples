var express = require('express');
var session = require('express-session');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {	
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res){	
	res.render('home', {viewsCount: req.session.view[req.originalUrl], otl: req.session.cookie.originalMaxAge / 1000});
})


router.get('/set-cookie', function(req, res){
	res.cookie('name', 'krish').send('Cookie set!');
})

router.get('/get-cookie', function(req, res){
	res.send(req.cookies);
})
module.exports = router;
