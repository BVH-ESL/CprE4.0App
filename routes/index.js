var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld');
});

router.get('/test_cam_scan', function(req, res) {
    res.render('testcamscan');
});

module.exports = router;
