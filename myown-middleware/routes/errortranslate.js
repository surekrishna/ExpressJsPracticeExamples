module.exports = function(code){
	return function(req, res){
		switch(code){
			case 500:
				res.send('Internal server error, something went wrong!')
			case 404:
				res.send('Request resource not available!')
			case 403:
				res.send('Forbidden!')
			case 200:
				res.send('Success!')
			default:
				res.send('Other than 500/404/403 ' + code)
				next()
		}
	}
}