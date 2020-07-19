var express = require("express");
var fs = require("fs");

var router = express.Router();


router.get("/hello", function(req, res){
	res.send("Hello Express!");
});

router.get("/error", function(res, req){
	res.send("Something is wrong");
})

router.get("/file-success", function(req, res){
	
	fs.readFile("test.txt", function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
    	res.write(data);
    	return res.end();
	})
});


router.get("/file-failure", function(req, res){

	fs.readFile("test.json", function(err, data){
		if(err){
			res.redirect(404, "/error");
		}

		res.json();
	});
});


module.exports = router;

