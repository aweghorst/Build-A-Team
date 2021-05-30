const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

//create a new Manager
test("creates a new Manager", () => {
  const manager = new Manager("Cayde", 6, "TheBestHunter@RamenShop.com", 6);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

//get role
test("get the manager's role", () => {
  const manager = new Manager("Cayde", 6, "TheBestHunter@RamenShop.com", 6);

  expect(manager.getRole()).toEqual("Manager");
});
