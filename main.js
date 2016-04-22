var prompt = require('prompt');
var Student = require('./student.js');
var Bus = require('./bus.js');

var schoolBus = new Bus('Jerry', 'orange', 100);

prompt.start();
prompt.get(['name', 'gpa', 'detentions', 'catchPhrase'], function(err, result) {
	var student1 = new Student(result.name, result.gpa, result.detentions, result.catchPhrase);
	// console.log(JSON.stringify(student1));
	schoolBus.studentEntersBus(student1);
});

var studentList = [];

// var student2 = new Student('Dave', , 9, 3)

schoolBus.busChatter();
