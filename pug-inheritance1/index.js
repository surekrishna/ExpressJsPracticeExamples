var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded())
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
	res.render('login', {title : 'Login'});
});

app.post('/login', function(req, res){
	res.render('login', {title : 'Home', user : {username : req.body.username}});
});


app.listen(3000, function(){
	console.log("Express Inheritance Pug app started with url http://localhost:3000");
});	