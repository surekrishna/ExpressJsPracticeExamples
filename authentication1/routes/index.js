var express = require('express');
var router = express.Router();

var app = express();


var users = [

	{'username': 'krish', 'password': 'sure','email': 'krish@sure.com'}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res){
	res.render('login', {message: "Welcome please login"});
})

router.post('/login', function(req, res){	
	if(!req.body.username || !req.body.password){
		res.render('login', {message: 'Enter required details to login'});
	}else {		
		for(var i = 0 ; i < users.length ; i++) {						
			if(users[i].username == req.body.username && users[i].password == req.body.password)
				res.render('home', {username: users[i].username, email: users[i].email});
		}

		res.render('login', {message: 'Invalid login details'});
	}	
})

router.get('/register', function(req, res){
	res.render('register', {message: 'Registration Form'});
})

router.post('/register', function(req, res){
	var form = req.body;

	if(!form.username || !form.email || !form.password || !form.confirm_password){
		res.render('register', {message: 'Please fill all the required details'})
	}else if(form.password != form.confirm_password){
		res.render('register', {message: 'Passwords do not match'})
	}else {
		users.filter(function(user){
			if(user.username == form.username)
			res.render('register', {message: 'User already exists!'})		
		})
	}

	var user = {username: form.username, email: form.email, password: req.body.password};
	users.push(user);
	res.render('home', {username: form.username, email: form.email});
})

router.get('/users', function(req, res){
	res.send(users);
})

router.get('/home', function(req, res){
	res.render('home', {username: req.body.username, email: req.body.email});
})

module.exports = router;
