var express = require('express');
var router = express.Router();
var app = express();

app.use('view engine', 'pug');
app.use('views', './views');

app.get('/', function(req, res){
	res.render('index', {title : "Home"});
});

module.exports = router;