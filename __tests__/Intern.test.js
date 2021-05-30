const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

//create new Intern
test("create a new intern", () => {
  const intern = new Intern(
    "Uldren",
    4,
    "Crow@Sov.com",
    "Reef School for the Gifted"
  );

  expect(intern.school).toEqual(expect.any(String));
});

//get School
test("gets the intern's school", () => {
  const intern = new Intern(
    "Uldren",
    4,
    "Crow@Sov.com",
    "Reef School for the Gifted"
  );

  expect(intern.getSchool()).toEqual(expect.any(String));
});

//get Role
test("gets the intern's role", () => {
  const intern = new Intern(
    "Uldren",
    4,
    "Crow@Sov.com",
    "Reef School for the Gifted"
  );

  expect(intern.getRole()).toEqual("Intern");
});
