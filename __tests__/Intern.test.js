const Intern = require('../lib/Intern');

test("Can use constructor to create school", () => {
  const testSchool = "school";
  const employeeObj = new Intern("Daniel", 1, "test@gmail.com", testSchool);
  expect(employeeObj.school).toBe(testSchool);
});

test("Can get school by using getSchool() method", () => {
  const testSchool = "school";
  const employeeObj = new Intern("Daniel", 1, "test@gmail.com", testSchool);
  expect(employeeObj.getSchool()).toBe(testSchool);
});

test('getRole() should return "Intern"', () => {
  const test = "Intern"
  const employeeObj = new Intern("Daniel", 1, "test@gmail.com", "school");
  expect(employeeObj.getRole()).toBe(test);
});