const html = [];

function generateTeamMembers(data) {
  function generateManager(manager) {
    return `
    <div class="employeeBorder">
      <div class="employeeHeader">
        <label class="eName">${manager.name}</label>
        <label class="jobRole">${manager.getRole()}</label>
      </div>
      <div class="employeeBody">
        <p><b>Id:</b> ${manager.id}</p>
        <p><b>Email:</b> ${manager.email}</p>
        <p><b>Office Number:</b> ${manager.officeNumber}</p>
      </div>
    </div>
    `;
  }

  function generateEngineer(engineer) {
    return `
      <div class="employeeBorder">
        <div class="employeeHeader">
          <label class="eName">${engineer.name}</label>
          <label class="jobRole">${engineer.getRole()}</label>
        </div>
        <div class="employeeBody">
          <p><b>Id:</b> ${engineer.id}</p>
          <p><b>Email:</b> ${engineer.email}</p>
          <p><b>Github:</b> ${engineer.github}</p>
        </div>
      </div>
    `;
  }

  function generateIntern(intern) {
    return `
      <div class="employeeBorder">
        <div class="employeeHeader">
          <label class="eName">${intern.name}</label>
          <label class="jobRole">${intern.getRole()}</label>
        </div>
        <div class="employeeBody">
          <p><b>Id:</b> ${intern.id}</p>
          <p><b>Email:</b> ${intern.email}</p>
          <p><b>School:</b> ${intern.school}</p>
        </div>
      </div>
    `;
  }

  //for loop to push each employee html to the generateTeam function
  for (let i = 0; i < data.length; i++) {
    if (data[i].getRole() === "Manager") {
      html.push(generateManager(data[i]));
    } else if (data[i].getRole() === "Engineer") {
      html.push(generateEngineer(data[i]));
    } else {
      html.push(generateIntern(data[i]));
    }
  }
  //join html array HTML all together to fit into generateTeam function 
  return html.join("");
};

function generateTeamHTML(data) {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="./style.css" />
      </head>
    <body>
      <div class="pageTitle">
        <label>My Team</label>
      </div>
      
      <div class="mainContainer">
        ${generateTeamMembers(data)}
      </div>
  
    </body>
    </html>
  `;
}

module.exports = generateTeamHTML;