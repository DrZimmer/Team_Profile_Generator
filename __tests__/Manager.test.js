const Manager = require('../lib/Manager');

test("Can use constructor to create office number", () => {
  const testOfficeNumber = 1;
  const employeeObj = new Manager("Daniel", 1, "test@gmail.com", testOfficeNumber);
  expect(employeeObj.officeNumber).toBe(testOfficeNumber);
});

test('getRole() should return "Manager"', () => {
  const test = "Manager"
  const employeeObj = new Manager("Daniel", 1, "test@gmail.com", 2);
  expect(employeeObj.getRole()).toBe(test);
});