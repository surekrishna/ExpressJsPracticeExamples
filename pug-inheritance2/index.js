var express = require('express');

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', function(req, res){
	res.render('index', {title : 'Home'});
});

app.get('/about', function(req, res){
	res.render('index', {title : 'About'});
});


app.listen(3000, function(){
    console.log("Express pug-inheritance1 started with url http://localhost:3000");
});