const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const render = require('./src/page-template.js');

const teamMembers = []; //TODO figure out how this goes into inquirer?
const idArray = []; // see other todos

const outputDIR = path.resolve(__dirname, "output");
const outputPath = path.join(outputDIR, "./dist/team.html");

function employeeCreator() {

  function createManager() {
    console.log("Please begin to create your team.");
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
        validate: answer => {
          if (answer !== '') {
            return true;
          }
          return "Please enter at least one character for the name"
        }
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/ // this will require chars 1-9
          );
          if (pass) {
            // TODO add to teamMembers array 
            return true;
          } 
          return "Please enter numbers for the id"
        }
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
        validate: answer => {
          if (answer !== '') {
            return true;
          } 
          return "Please enter the team manager's email address."
        }
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
        validate: answer => {
          if (answer !== '') {
            return true;
          }
          return "Please enter the team manager's office number."
        }
      },
      {
        type: "list",
        name: "whichType",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern"], 
        validate: answer => {
          if (answer == "Engineer") {
            addEngineer()
          } else if (answer == "Intern") { 
            addIntern()
          } else {
            createTeam();
          }
        }
      },
    ])
  };

  function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
        validate: answer => {
          if (answer !== '') {
            return true;
          }
          return "Please enter at least one character for the name"
        }
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/ //this will require chars 1-9
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "This ID is already taken. Please enter a different ID number";
            } else {
              // TODO add to teamMembers array
              return true;
            }
          }
          return "Please enter a positive number greater than 0."
        }
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
        validate: answer => {
          const pass = answer.match(
            /\$+@\$+\.\S+/ //this will require email
          );
          if (pass) {
            if (answer !== '') {
            return true;
            }
          }
          return "Please enter a valid Email Address."
        }
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's Github username?",
        validate: answer => {
          if (answer !== '') {
            return true;
          } else return ""
        }
      },
      {
        type: "list",
        name: "whichType",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern"], 
        validate: answer => {
          if (answer == "Engineer") {
            addEngineer()
          } else if (answer = "Intern") { 
            addIntern()
          } else {
            createTeam();
          }
        }
      },
    ]);
  };

  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
        validate: answer => {
          if (answer !== '') {
            return true;
          } 
          return "Please enter at least one character for the name"
        }
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's id?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/ //this will require chars 1-9
          );
          if (pass) {
            if (idArray.includes(answer)) {
              return "This ID is already taken. Please enter a different ID number";
            } else {
              return true;
            }
          }
          return "Please enter a positive number greater than 0."
        }
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
        validate: answer => {
          const pass = answer.match(
            /\$+@\$+\.\S+/ //this will require email
          );
          if (pass) {
            if (answer !== '') {
            return true;
            }
          }
          return "Please enter a valid Email Address."
        }
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
        validate: answer => {
          if (answer !== '') {
            return true;
          }
          return "Please enter your intern's school."
        }
      },
      {
        type: "list",
        name: "whichType",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern"], 
        validate: answer => {
          if (answer == "Engineer") {
            addEngineer()
          } else if (answer = "Intern") { 
            addIntern()
          } else {
            createTeam();
          }
        }
      },
    ]);
  };
};

// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

//TODO 
function createTeam() {

  employeeCreator.createManager()
  .then(portfolioData => {
    return render(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });
};

createTeam();