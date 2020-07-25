var express = require('express');
var router = express.Router();
var Employee = require('../models/employee');


router.get('/employees', (req, res) => {
	Employee.findAll().then(result => {
		res.redirect('home');
	}).catch(error => setImmediate(() => {throw error}));
});

router.get('/employees/:id', (req, res) => {
	Employee.findById(req.params.id).then(result => {
		res.redirect('home');
	}).catch(error => setImmediate(() => {throw error}));
});

router.delete('/delete-employee/:id', (req, res) => {
	Employee.deleteById(req.params.id).then(result => {
		res.redirect('home');
	}).catch(error => setImmediate(() => {throw error}))
});

router.put('/update-password', (req, res) => {
	Employee.changePassword().then(result => {
		res.redirect('home');
	}).catch(error => setImmediate(() => {throw error}));
});

router.get('/login', (req, res) => {
	res.render('login');
});

router.post('/login', (req, res) => {
	try {			
	Employee.authenticateUser().then(result => {
		res.redirect('employee', {username: result.username});
	});
	}catch(err) {
		next(err);
	}

});

module.exports = router;