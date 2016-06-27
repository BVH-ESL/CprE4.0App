var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema;
var studentSchema = new Schema(
  {
    studentID:  String,
    name:
    {
      fristName: String,
      lastName: String
    },
    department: String
  },
  {
    collection : 'student'
  }
);

var Student = mongoose.model('student', studentSchema);

exports.findAll = function(req, res) {
  Student.find({}).exec(function(err, result) {
    if (err) return handleError(err);
     console.log(result);
     res.send(result);
  });
};

exports.addEx = function(req, res) {
  var exStudent = new Student({
    studentID: "5801011813011",
    name:{
      fristName: "Kanitkon",
      lastName : "Khanchure"
    },
    department: "MEE"
  });
  exStudent.save(function (err, exStudent) {
  if (err) return console.error(err);
    res.render("success");
  });
};

exports.findByStudentId = function(req, res) {
  var id = req.params.id;
  console.log('Retrieving wine: ' + id);
  Student.findOne({ 'studentID': id }, function (err, result) {
    if (err) return handleError(err);
    // console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
  })
};
