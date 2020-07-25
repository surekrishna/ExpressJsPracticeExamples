//First nodejs example hello world!
console.log("hello world!")

//adding two numbers
var a = 10;
var b = 4;

var c = a + b;
console.log('Out put of a + b = ' + c);

//creating first api
var http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, {'Contenty-Type' :'text/html'});
	res.write('hello! this is my first api.');
	res.end();
}).listen(3000);

//created my own module calc.js and importing here and using it
var calc = require('./calc');

var add = calc.add(1, 2);
var sub = calc.sub(1, 2);
var mul = calc.mul(1, 2);
var div = calc.div(1, 2);

console.log("addition : " + add);
console.log("substraction : " + sub);
console.log("multiplication : " + mul);
console.log("division : " + div);

//working with inbuilt module file system reading and writing

var fs = require('fs');

//reading a file
fs.readFile('calc.js', 'utf8', function(err, data){
	console.log(data);
});

//writing a file
//if i mention already exisitng file, then the exisitng content will be replaced with new content
fs.writeFile('test.txt', 'Im writing a file.\nHello World!', function(err){
	console.log('File created successfully.');
});

//appending content to existing file
fs.appendFile('test.txt', 'This is appending text', function(err){
	console.log('Data appended successfully');
});

//to delete a file 
fs.unlink('test.txt', function(err){
	console.log('File deleted successfully');
});