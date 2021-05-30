/***CREATE CARDS***/
//Manager
const managerCard = function (manager) {
  return `<div class="col-12 col-md-6 col-xl-4 mt-3 mb-3">
  <div class="card">
    <div
      class="card-header bg-primary text-light align-items-center pl-4"
    >
      <h4 class="row pl-2">${manager.name}</h4>
      <h5 class="row pl-2">
        <i class="fas fa-mug-hot mr-2"></i>Manager
      </h5>
    </div>
    <div class="card-body bg-light">
      <div class="row bg-white m-1 p-2 pl-3">ID: ${manager.id}</div>
      <div class="row bg-white m-1 p-2 pl-3">Email: <a href="mailto: ${manager.email}"> ${manager.email}</a></div>
      <div class="row bg-white m-1 p-2 pl-3">Office Number: ${manager.officeNumber}</div>
    </div>
  </div>
</div>
  `;
};

//Engineer

const engineerCard = function (engineer) {
  return `<div class="col-12 col-md-6 col-xl-4 mt-3 mb-3">
  <div class="card">
    <div
      class="card-header bg-primary text-light align-items-center pl-4"
    >
      <h4 class="row pl-2">${engineer.name}</h4>
      <h5 class="row pl-2">
        <i class="fas fa-glasses mr-2"></i>Engineer
      </h5>
    </div>
    <div class="card-body bg-light">
      <div class="row bg-white m-1 p-2 pl-3">ID: ${engineer.id}</div>
      <div class="row bg-white m-1 p-2 pl-3">Email: <a href="mailto: ${engineer.email}"> ${engineer.email}</a></div>
      <div class="row bg-white m-1 p-2 pl-3">GitHub: ${engineer.github}</div>
    </div>
  </div>
</div>`;
};

//Intern
const internCard = function (intern) {
  return `<div class="col-12 col-md-6 col-xl-4 mt-3 mb-3">
  <div class="card">
    <div
      class="card-header bg-primary text-light align-items-center pl-4"
    >
      <h4 class="row pl-2">${intern.name}</h4>
      <h5 class="row pl-2">
        <i class="fas fa-user-graduate mr-2"></i>Intern
      </h5>
    </div>
    <div class="card-body bg-light">
      <div class="row bg-white m-1 p-2 pl-3">ID: ${intern.id}</div>
      <div class="row bg-white m-1 p-2 pl-3">Email: <a href="mailto: ${intern.email}"> ${intern.email}</a></div>
      <div class="row bg-white m-1 p-2 pl-3">School: ${intern.school}</div>
    </div>
  </div>
</div>`;
};

newHTML = data => {
  pageArray = [];

  for (var i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
    //manager role
    if (role === "Manager") {
      const managerCards = managerCard(employee);

      pageArray.push(managerCards);
    }
    //engineer role
    if (role === "Engineer") {
      const engineerCards = engineerCard(employee);

      pageArray.push(engineerCards);
    }
    //intern role
    if (role === "Intern") {
      const internCards = internCard(employee);

      pageArray.push(internCards);
    }
  }

  const allCards = pageArray.join("");

  const createdHTML = createHTML(allCards);
  return createdHTML;
};

const createHTML = function (allCards) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
    />
    <link rel="stylesheet" href="../dist/style.css" />
  </head>
  <body>
    <header>
      <div class="header mb-5">My Team</div>
    </header>
    <div class="container justify">
      <div class="row justify-content-center">
        ${allCards}
      </div>
    </div>
  </body>
</html>
`;
};

module.exports = newHTML;
