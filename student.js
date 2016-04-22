function Student(name, gpa, detentions, catchPhrase) {
	this.name = name;
	this.gpa = gpa;
	this.detentions = detentions;
	this.catchPhrase = catchPhrase;
	this.canStudentHaveFun = function() {
		if((detentions < 10) && (gpa > 2)) {
			return true;
		} else {
			return false;
		}
	};
}

module.exports = Student;