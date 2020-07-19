var express = require('express');

var app = express();

app.use(express.static(__dirname));
app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', function(req, res){
	res.render('index', {title : 'home'});
});

app.listen(3000, function(){
	console.log("Express static-pug-inheritance app started with url http://localhost:3000");
});