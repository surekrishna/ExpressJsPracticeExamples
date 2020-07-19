var express = require("express");
var app = express();

app.get('/', function(req, res){
	res.sendFile( __dirname + "/index.html");
});

app.get('/message', function(req, res){
	res.send("Hello Welcome to Express!");
});

app.listen(8081);