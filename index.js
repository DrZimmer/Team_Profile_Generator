//run this one at the end
//Finally, although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const inquirer = require('inquirer');
const path = require('path'); //maybe use path for determining engineer,intern, or quit?
const fs = require('fs');

const outputDIR = path.resolve(__dirname, "output"); // not finished, syntax?
const outputPath = path.join(outputDIR, "./dist/team.html"); //not sure if this is correct?

const render = require('./src/page-template.js');
const { toUnicode } = require('punycode');

const teamMembers = [];
const idArray = [];

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
          } else return "Please enter at least one character for the name"
        }
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/ //might have to change or remove this later this will require chars 1-9
          );
          if (pass) {
            //condition if answer passes, return answer?
          } else return false; //might be wrong here
        }
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
        validate: answer => {
          if (answer !== '') {
            return true;
          } else return ""
        }
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
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
          } else return "Please enter at least one character for the name"
        }
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/ //might have to change or remove this later this will require chars 1-9
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
        name: "engineerEmail",
        message: "What is your engineer's email?",
        validate: answer => {
          //const pass = answer.match(
            // /\$+@\$+\.\S+/  no idea will have to google this
          // ) if pass return true
          if (answer !== '') {
            return true;
          } else return ""
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
          } else return "Please enter at least one character for the name"
        }
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's id?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/ //might have to change or remove this later this will require chars 1-9
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
          //const pass = answer.match(
            // /\$+@\$+\.\S+/  no idea will have to google this
          // ) if pass return true
          if (answer !== '') {
            return true;
          } else return ""
        }
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
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

employeeCreator()
  .then(createManager)
  .then()

function createTeam() {
 //generate the html
};