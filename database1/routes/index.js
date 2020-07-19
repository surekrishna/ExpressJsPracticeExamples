var express = require('express');
var {Pool, Client} = require('pg');
var Promise = require('promise');
var router = express.Router();

var connectionString = 'postgressql://postgres:postgres@localhost:5432/test';
var client = new Client({connectionString:connectionString});

// var client = new Client({
// 	user: 'postgres',
// 	host: 'localhost',
// 	database: 'test',
// 	password: 'postgres',
// 	port: 5432
// });

connect();

async function connect() {
	try {
		await client.connect();
	} catch(e){
		console.error('Failed to connect :: ${e}')
	}
}

async function getEmployeeById(id) {	
	return new Promise((resolve, reject) => {
		client.query('SELECT * FROM test.employee WHERE id = $1', [id], (error, result) =>{
			if(error)
				return reject(error);

			resolve(result);
		})
	})
}

async function getEmployees() {
	return new Promise((resolve, reject) => {
		client.query('SELECT * FROM test.employee', (error, result) => {
			if(error)
				return reject(error);

			resolve(result);
		})
	})
}

async function createEmployee(id, firstName, lastName, middleName, email, salary, password) {	
	return new Promise((resolve, reject) => {
		client.query('INSERT INTO test.employee(id, first_name, last_name, middle_name, email, salary, password) VALUES($1, $2, $3, $4, $5, $6, $7)', [id, firstName, lastName, middleName, email, salary, password], (error, result) =>{
			if(error)
				return reject(error);

			resolve(result);
		});
	})
}

async function deleteEmployee(id) {
	return new Promise((resolve, reject) => {
		client.query('DELETE FROM test.employee WHERE id = $1', [id], (error, result) =>{
			if(error)
				return reject(error);

			resolve(result);
		})
	})
}

// client.query('SELECT * FROM EMPLOYEE', (err, res)=>{
// 	console.log(err, res);
// 	client.end();
// })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/employees', (req, res) => {
	getEmployees().then(result => {
		res.send(result.rows);
	}).catch(err => setImmediate(() => { throw err; }));	
});

router.get('/employee/:id', (req, res) => {
	//res.setHeader('content-type', 'application/json');
	getEmployeeById(req.params.id).then((result) => {		
		res.send(result.rows);
	}).catch((err) => setImmediate(() => { throw err; }));		
});

router.get('/add-employee', (req, res)=>{
	res.render('employee', {message: 'Fill the details to add employee!'});
})

router.post('/add-employee', (req, res)=>{
	createEmployee(req.body.id, req.body.firstName, req.body.lastName, req.body.middleName, req.body.email, req.body.salary, req.body.password).then(result => {
		res.render('employee', {message: 'Employee added successfully!'});	
	}).catch((err) => setImmediate(() => { throw err; }));		
})

router.delete('/delete-employee/:id', (req, res)=>{
	console.log(req.params.id);
	deleteEmployee(req.params.id).then(result => {
		res.send('deleted employee with the id : ' + req.params.id);
	})
})

module.exports = router;
