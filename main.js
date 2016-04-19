var prompt = require('prompt');
var Student = require('./student.js');

prompt.start();
prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result) {
	var student1 = new Student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);
	console.log(JSON.stringify(student1));
	student1.canStudentHaveFun();
});