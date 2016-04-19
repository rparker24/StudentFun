function Bus(driverName, color, gas) {
	var studentsOnTheBus = [];
	var driverName = driverName;
	var color = color;
	var gas = gas;
	var studentEntersBus = function(student) {
		this.studentsOnTheBus.push(student);
	}
	var busChatter = function() {
		for(i=0; i < this.studentsOnTheBus.length; i++) {
			console.log(this.studentsOnTheBus[i].catchPhrase);
		}
	}
}

module.exports = Bus;