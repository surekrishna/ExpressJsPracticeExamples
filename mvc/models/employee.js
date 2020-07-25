var express = require('express');
var {Pool, Client} = require('pg');
var Promise = require('promise');

var connectionUrl = 'postgressql://postgres:postgres@localhost:5432/test';
var client = new Client({connectionUrl:connectionUrl});


try{
	client.connect();	
}catch(e){
	console.log('Failed to connect :: ${e}');
}

exports.findById = (id, callback) => {
	new Promise((resolve, reject) => {
		client.query('SELECT e FROM test.employee e WHERE e.id = $1', [id], (error, result) => {
			if(error)
				return reject(error);

			resolve(result);
		})
	})
};

exports.deleteById = (id, callback) => {
	new Promise((resolve, reject) => {
		client.query('DELETE FROM test.employee e WHERE e.id = $1', [id], (error, result) => {
			if(error)
				return reject(error);

			resolve(result);
		})
	})
}

exports.findAll = (callback) => {
	new Promise((resolve, reject) => {
		client.query('SELECT e FROM test.employee e', (error, result)=> {
			if(error)
				return reject(error);

			resolve(result);
		})
	})
}

exports.changePassword = (id, password, callback) => {
	new Promise((resolve, reject) => {
		client.query('UPDATE test.employee e SET e.password = $1 WHERE e.id = $2', [password, id], (error, result) => {
			if(error)
				return reject(error);

			resolve(result);
		})
	})
};

exports.authenticateUser = (email, password, callback) => {
	new Promise((resolve, reject) => {
		client.query('SELECT e FROM test.employee e WHERE e.email = $1 AND e.password = $2', [email, password], (error, result) => {
			if(error)
				return reject(error);

			if(result.length == 0)
				return reject();

			resolve(result);
		})
	})
};
