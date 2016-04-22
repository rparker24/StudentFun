function Bus(driverName, color, gas) {
	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function(student) {
		this.studentsOnTheBus.push(student);
	}
	this.busChatter = function() {
		for(i=0; i < this.studentsOnTheBus.length; i++) {
			if(this.studentsOnTheBus[i].canStudentHaveFun === true) {
				console.log(this.studentsOnTheBus[i].catchPhrase);
			}
		}
	}
}

module.exports = Bus;