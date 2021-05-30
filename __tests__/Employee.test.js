const { expect, test } = require("@jest/globals");
const Employee = require("../lib/Employee");

//create new employee
test("create a new employee", () => {
  const employee = new Employee("Zavala", 1, "zavala@vanguard.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

//get name
test("gets the employee's name", () => {
  const employee = new Employee("Zavala", 1, "zavala@vanguard.com");

  expect(employee.getName()).toEqual("Zavala");
});

//get id
test("gets the employee's ID", () => {
  const employee = new Employee("Zavala", 1, "zavala@vanguard.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

//get email
test("gets the employee's email", () => {
  const employee = new Employee("Zavala", 1, "zavala@vanguard.com");

  expect(employee.getEmail()).toEqual(expect.stringContaining("@"));
});

//Employee Role
test("gets the employee's Role", () => {
  const employee = new Employee("Zavala", 1, "zavala@vanguard.com");

  expect(employee.getRole()).toEqual("Employee");
});
