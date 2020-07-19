var express = require('express');
var cookieSession = require('cookie-session');
var router = express.Router();

var app = express();

var count = 0;

app.use(cookieSession({

	name: 'session',
	keys: ['key1', 'key2']
}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/views-count', function(req, res){
	//res.session.views = ( res.session.views || 0) + 1 //Not working	
	res.send('This page is viewd : ' + ++count + ' times')
})




module.exports = router;
