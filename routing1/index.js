var express = require("express");
var router = express.Router();


router.get("/message", function(req, res){
	res.send("Hello from the router!")
});

router.get("/download-file", function(req, res){
	res.download( __dirname + "/test.txt");
});


module.exports = router;