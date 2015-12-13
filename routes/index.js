var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {messages: req.flash()});
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

router.post('/signin', function(req, res, next) {
  req.flash('success', '로그인 되었습니다.');
  res.redirect('/ [로그인하면 이동할 페이지] ');
});

router.use('/[로그인하면 이동할 페이지]', 로그인하면 이동할 페이지);

module.exports = router;
