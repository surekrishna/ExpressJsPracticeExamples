var express = require("express");

var app = express();


app.set('view engine', 'pug');
app.set('/views', './views');

app.get('/', function(req, res){
	res.render('login');
});


app.listen(3000, function(){
	console.log("Express pug-login app started with http://localhost:3000");
});