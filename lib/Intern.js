const Employee = require('./Employee');

class Intern extends Employee {
  constructor (name = '') {
    super(name);
    this.school = school;
  }

  getSchool() {
    //code
  }

  getRole() {
    //code for get role
    return Intern; // // Overridden to return 'Intern'
  }
};

module.exports = Intern;