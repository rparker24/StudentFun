function Student(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase) {
	var name = name;
	var gender = gender;
	var grade = grade;
	var gpa = gpa;
	var detentions = detentions;
	var sleepingInClass = sleepingInClass;
	var catchPhrase = catchPhrase;
	var canStudentHaveFun = function() {
		if((this.detentions < 10) && (this.gpa > 2)) {
			console.log("This student can have fun.");
		}
	}
}

module.exports = Student;