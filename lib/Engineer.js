const Employee = require('./Employee');

class Engineer extends Employee {
  constructor (name = '') {
    super(name);
    this.github = github;
  }

  getGithub() {
    //code
  };

  getRole() {
    //code for get role
    return Engineer; // // Overridden to return 'Engineer'
  }
};

module.exports = Engineer;