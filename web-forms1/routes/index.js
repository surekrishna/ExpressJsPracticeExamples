var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login', function(req, res){
	res.render('login')
})

router.post('/login', function(req, res){
	//console.log('username: ' + req.body.username + ' password: ' + req.body.password);
	//res.send('username: ' + req.body.username + ' password: ' + req.body.password);
	console.log(res.body);
	res.send('logged in');
})

module.exports = router;
