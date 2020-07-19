var express = require("express");
var router = require("./index.js");

var app = express();

app.use("/", router);


app.listen(3000, function(){
	console.log("Express response-methods app started with url http://localhost:3000");
});