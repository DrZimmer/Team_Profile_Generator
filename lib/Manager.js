const Employee = require('./Employee');

class Manager extends Employee {
  constructor (name = '') {
    super(name);
    this.officeNumber = officeNumber;
  }

  getRole() {
    //code for get role
    return Manager; // // Overridden to return 'Manager'
  }
};

module.exports = Manager;