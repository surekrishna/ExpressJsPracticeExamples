//Routing
var express = require("express");
var app = express();


var handler1 = function(req, res, next) {	
	req.params.file += ".txt";
	next();
};

var handler2 = function(req, res) {
	res.download( __dirname + "/" + req.params.file);
}


//GET request example
app.get("/get-request", function(req, res){
	res.send("Welcome to Express GET request page!");
});


//POST request example
app.get("/post-request", function(req, res){
	res.sendFile( __dirname + "/form.html");
});

app.post("/post-request", function(req, res){
	res.send("Successfully submitted form");
});


//PUT request example
app.put("/put-request", function(req, res){
	res.send("put request updated Successfully!");
});


//DELETE request example
app.delete("/delete-request", function(req, res){
	res.send("delete request Successfully!");
});


//Path Varaible access example
app.get("/path-variable/:id", function(req, res){
	res.send("Hello path-variable : " + req.params.id);
});


//Method - 1
// we can omit [] works fine, app.get("/download-file/:file", handler1, handler2);

//Method - 2
// app.get("/download-file/:file", function(req, res, next){
// 	req.params.file += ".txt";
// 	next();
// }, function(req, res){
// 	res.download( __dirname + "/" + req.params.file);
// });

//Method - 3
// app.get("/download-file/:file", handler1, function(req, res){
// 	res.download( __dirname + "/" + req.params.file);
// });


//Method - 4
app.get("/download-file/:file", [handler1, handler2]);

//Port setting up
app.listen(3000, function(){
	console.log("Express routing app started with url http://localhost:3000");
});


