const Employee = require("../lib/Employee");

test("Can create an Employee Object", () => {
  const employeeObj = new Employee();
  expect(typeof(employeeObj)).toBe("object");
});
