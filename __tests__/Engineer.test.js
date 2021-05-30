const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

//create a new Engineer
test("creates a new engineer", () => {
  const engineer = new Engineer(
    "Amanda",
    3,
    "HollidayAllDay@yahoo.com",
    "AmandasShop"
  );

  expect(engineer.github).toEqual(expect.any(String));
});

//get github
test("gets the employee's github username", () => {
  const engineer = new Engineer(
    "Amanda",
    3,
    "HollidayAllDay@yahoo.com",
    "AmandasShop"
  );

  expect(engineer.getGithub()).toEqual(expect.any(String));
});

//get role
test("gets the engineer's role", () => {
  const engineer = new Engineer(
    "Amanda",
    3,
    "HollidayAllDay@yahoo.com",
    "AmandasShop"
  );

  expect(engineer.getRole()).toEqual("Engineer");
});
