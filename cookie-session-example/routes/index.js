var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/set-cookie', function(req, res){
	req.session.user = {'username': 'krishna', 'email': 'surekrrishna@gmail.com'};
	res.send('cookie user set!');	
})

router.get('/get-session', function(req, res){
	res.send(res.session);
})

router.get('/page-views', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});


module.exports = router;
