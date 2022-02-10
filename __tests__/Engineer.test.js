const Engineer = require('../lib/Engineer');

test("Can use constructor to create GitHub account", () => {
  const testGithub = "github";
  const employeeObj = new Engineer("Daniel", 1, "test@gmail.com", testGithub);
  expect(employeeObj.github).toBe(testGithub);
});

test("Can get GitHub by using getGithub() method", () => {
  const testGithub = "github";
  const employeeObj = new Engineer("Daniel", 1, "test@gmail.com", testGithub);
  expect(employeeObj.getGithub()).toBe(testGithub);
});

test('getRole() should return "Engineer"', () => {
  const test = "Engineer"
  const employeeObj = new Engineer("Daniel", 1, "test@gmail.com", "github");
  expect(employeeObj.getRole()).toBe(test);
});