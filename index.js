const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");

const employeeList = [];
const createManager = () => {
  return inquirer
    .prompt([
      //Manager Name
      {
        type: "input",
        name: "name",
        message: "What is the Team Manager's Name?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the Manager's Name!");
            return false;
          }
        },
      },
      //Manager ID
      {
        type: "input",
        name: "id",
        message: "What is the Manager's Id Number?",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the Manager's Id Number!");
            return false;
          }
        },
      },
      //Manager Email
      {
        type: "input",
        name: "email",
        message: "What is the Manager's email address?",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the Manager's email address!");
            return false;
          }
        },
      },
      //Manager Office Number
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?",
        validate: officeNumberInput => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter the Manager's office number!");
            return false;
          }
        },
      },
    ])
    .then(newManager => {
      const { name, id, email, officeNumber } = newManager;
      const manager = new Manager(name, id, email, officeNumber);

      employeeList.push(manager);
      console.table(employeeList);
    });
};

const createEmployee = () => {
  console.log("Adding a new Employee");
  return inquirer
    .prompt([
      //Designate the Employee's Role
      {
        type: "list",
        name: "role",
        message: "What is the Employee's role?",
        choices: ["Engineer", "Intern"],
      },
      //Employee Name
      {
        type: "input",
        name: "name",
        message: "What is the Employee's name?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the Employee's name!");
            return false;
          }
        },
      },
      //Employee ID
      {
        type: "input",
        name: "id",
        message: "What is the Employee's ID Number?",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the Employee's ID Number!");
            return false;
          }
        },
      },
      //Employee Email
      {
        type: "input",
        name: "email",
        message: "What is the Employee's email address?",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the Employee's email address!");
            return false;
          }
        },
      },
      //Engineer Github
      {
        when: input => input.role === "Engineer",
        type: "input",
        name: "github",
        message: "What is the Employee's Github Username?",
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter the Employee's Github Username!");
            return false;
          }
        },
      },
      //Intern School
      {
        when: input => input.role === "Intern",
        type: "input",
        name: "school",
        message: "Where does/did the Intern go to School?",
        validate: schoolInput => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter the Intern's School!");
            return false;
          }
        },
      },
      //Exit AddEmployee Loop
      {
        type: "confirm",
        name: "createAnother",
        message: "Would you like to add another Employee?",
        default: true,
      },
    ])
    .then(employeeData => {
      //create an object that holds all of the information

      let { name, id, email, role, github, school, createAnother } =
        employeeData;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }

      //Append new Employee to EmployeeList
      employeeList.push(employee);

      //exit create a team?
      if (createAnother) {
        return createEmployee(employeeList);
      } else {
        console.table(employeeList);
        return employeeList;
      }
    });
};

createManager().then(createEmployee);
