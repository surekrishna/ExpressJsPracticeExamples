var express = require('express');
var router = express.Router();

//query params example
router.get('/queryparam', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send(req.query.id);//http://localhost:3000/?id=1000
});

//pathvariable example
router.get('/pathvariable/:id', (req, res) => {
	res.send(req.params.id);//http://localhost:3000/200
});

//to get complete url
router.get("/fullurl", (req, res) => {
 	var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;	
	res.send(fullUrl);
})

module.exports = router;

