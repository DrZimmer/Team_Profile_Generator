//Generate the html here

const generateManager = managerInfo => {
  return `
      ${managerInfo
        .map(({ managerName, managerId, managerEmail, managerOfficeNumber }) => {
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${managerName}</h3>
            <h5 class="portfolio-languages">
              ID: ${managerId}
            </h5>
            <p>${managerEmail}</p>
            <p>${managerOfficeNumber}</p>
          </div>
        `;
        })
        .join('')}
      </div>
    </section>
  `;
};

const generateEngineer = engineerInfo => {
  return `
      ${engineerInfo
        .map(({ engineerName, engineerId, engineerEmail, engineerGithub }) => {
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${engineerName}</h3>
            <h5 class="portfolio-languages">
              ID: ${engineerId}
            </h5>
            <p>${engineerEmail}</p>
            <p>${engineerGithub}</p>
          </div>
        `;
        })
        .join('')}
      </div>
    </section>
  `;
};

const generateIntern = internInfo => {
  return `
      ${internInfo
        .map(({ internName, internId, internEmail, internGithub }) => {
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${internName}</h3>
            <h5 class="portfolio-languages">
              ID: ${internId}
            </h5>
            <p>${internEmail}</p>
            <p>${internGithub}</p>
          </div>
        `;
        })
        .join('')}
      </div>
    </section>
  `;
};

module.exports = templateData => {
  const { manager, engineer, intern, ...header } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">Team Profile Generator</h1>
      </div>
    </header>
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block align-cetner">Employees</h2>
      <div class="flex-row justify-space-between">
    <main class="container my-5">
      ${generateManager(manager)}
      ${generateEngineer(engineer)}
      ${generateIntern(intern)}
    </main>
  </body>
  </html>
  `;
}