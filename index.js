//run this one at the end
//Finally, although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path'); //maybe use path for determining engineer,intern, or quit?
const fs = require('fs');

const outputDIR = path.resolve(__dirname, "output"); // not finished, syntax?
const outputPath = path.join(outputDIR, "team.html"); //not sure if this is correct?

const render = require('./src/page-template.js');

const teamMembers = [];
const idArray = [];

function appMenu() { //change this name appMenu

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
        message: "",
        validate: answer => {
          if (answer !== '') {
            return true;
          } else return ""
        }
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "",
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
        choices: ["Engineer", "Intern"], //not sure if syntax is right here
        validate: answer => {
          if (answer == "Engineer") {
            addEngineer()
          } else if (answer = "Intern") { //syntax wrong?
            addIntern()
          } else {
            //generate html function (creatTeam?)
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
    ]);
  };
};

//What is the team manager's name?
//What is the team manager's id?
//What is the team manager's email?
//What is the team manager's office number?
//Which type of team member would you like to add? Engineer or Intern (if no then done)

//What is your engineer's name?
//What is your engineer's id?
//What is your engineer's email?
//What is your engineer's Github Username?

//What is your interns name?
//What is your interns id?
//What is your interns email?
//What is your interns Github Username?