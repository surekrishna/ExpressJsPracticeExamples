var express = require('express');
var fs = require('fs');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var router = express.Router();


//req.file
var uploadImage = upload.single('avatar');
//req.files[1]
var uploadBatch = upload.array('photos', 8);
//req.files[avatar][1]   req.files[photos][2/3/4/.../8]
var uploadAlbum = upload.fields([{name: 'avatar', maxCount: 1}, {name: 'photos', maxCount: 8}]);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login', function(req, res){
	res.render('login');
})


//single file upload 

router.post('/login', function(req, res){
	console.log(req.body);
	res.send('Congratulations logged-in successfully, Welcome ' + req.body.username);
})


router.get('/single-upload', function(req, res){
	res.render('single-upload', {message: 'Upload an image'});
})

router.post('/single-file', uploadImage, function(req, res){
	
	var src = fs.createReadStream(req.file.path);
	var target = fs.createWriteStream('uploads/' + req.file.originalname);
	src.pipe(target);

	src.on('end', function(){
		res.render('single-upload', {message: "File uploaded successfully!"});
	})

	src.on('error', function(err){
		res.render('single-upload', {message: "Something went wrong!"});
		console.log(err.stack);
	})
})


//multiple file upload

router.get('/multiple-upload', function(req, res){
	res.render('multiple-upload', {message: 'Upload images'});
})

router.post('/multiple-file', uploadBatch, function(req, res){
	
	var photos = req.files;	

	photos.forEach(function(file){
		src = fs.createReadStream(file.path);
		target = fs.createWriteStream('uploads/' + file.originalname);
		src.pipe(target);

	});

	src.on('end', function(){
		res.render('multiple-upload', {message: "Files are uploaded successfully!"});
	})

	src.on('error', function(err){
		res.render('multiple-upload', {message: "Something went wrong!"});
		console.log(err.stack);
	})

})

module.exports = router;
