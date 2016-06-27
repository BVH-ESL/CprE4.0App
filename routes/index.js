var express = require('express');
var router = express.Router();
var student = require('../model/student.js');

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

router.get('/test_rfid_scan', function(req, res) {
  res.render('testrifdscan');
});

router.get('/list_students', function(req, res) {
  res.render('liststudent')
});

router.get('/students', student.findAll);
router.get('/students/addex', student.addEx);

// router.get('/students/:id',  student.addstudent);
// router.post('/students', student.addstudent);
// router.put('/students/:id', student.updatestudent);
// router.delete('/students/:id', student.deletestudent);

module.exports = router;
