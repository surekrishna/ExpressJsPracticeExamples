var express = require("express");

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/home/:name', function(req, res){
	res.render('index', {name: req.params.name});
});


app.listen(3000, function(){
	console.log("Express template-engine1 started with http://localhost:3000");
});