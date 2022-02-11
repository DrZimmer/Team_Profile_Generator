const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./src/page-template.js");

const teamMembers = []; 
const idArray = [];

const outputDIR = path.resolve(__dirname, "output");
const outputPath = path.join(outputDIR, "./dist/team.html");

function createManager() {
  console.log("Please begin to create your team.");
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character for the name";
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?",
        validate: (answer) => {
          const pass = answer.match(
            /^[1-9]\d*$/ // this will require chars 1-9
          );
          if (pass) {
            return true;
          }
          return "Please enter numbers for the id";
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter the team manager's email address.";
        },
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter the team manager's office number.";
        },
      },
    ])
    .then((resp) => {
      // Create a manager constructor
      const manager = new Manager(resp.managerName, resp.managerId, resp.managerEmail, resp.managerOfficeNumber);
      //Add constructor to teamMembers
      teamMembers.push(manager);
      //add id the idArray
      idArray.push(resp.managerId);
      employeeCreator();
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character for the name";
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?",
        validate: (answer) => {
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
          return "Please enter a positive number greater than 0.";
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter an Email Address.";
        },
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's Github username?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          } else return "";
        },
      },
    ])
    .then((resp) => {
      // Create a engineer constructor
      const engineer = new Engineer(resp.engineerName, resp.engineerId, resp.engineerEmail, resp.engineerGithub);
      //Add constructor to teamMembers
      teamMembers.push(engineer);
      //add id the idArray
      idArray.push(resp.engineerId);
      employeeCreator();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character for the name";
        },
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's id?",
        validate: (answer) => {
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
          return "Please enter a positive number greater than 0.";
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter an Email Address.";
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter your intern's school.";
        },
      },
    ])
    .then((resp) => {
      //Create an intern constructor
      const intern = new Intern(resp.internName, resp.internId, resp.internEmail, resp.internSchool);
      //Add constructor to teamMembers
      teamMembers.push(intern);
      //add id the idArray
      idArray.push(resp.internId);

      employeeCreator();
    });
}

function employeeCreator() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "whichType",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "None"],
      },
    ])
    .then((choice) => {
      if (choice.whichType === "Engineer") {
        addEngineer();
      } else if (choice.whichType === "Intern") {
        addIntern();
      } else {
        createTeam();
      }
    });
}

//TODO
function createTeam() {
  //   .then((portfolioData) => {
  //     return render(portfolioData);
  //   })
  //   .then((pageHTML) => {
  //     return writeFile(pageHTML);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  fs.writeFile("./dist/index.html", render(teamMembers), (err) => {
    if (err) {
      console.log("err", err);
    }
  });
}

createManager();
