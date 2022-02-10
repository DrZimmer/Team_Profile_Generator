const Employee = require("../lib/Employee");

test("Can create an Employee Object", () => {
  const employeeObj = new Employee();
  expect(typeof(employeeObj)).toBe("object");
});

test("Can use constructor to create name", () => {
  const name = "Daniel";
  const employeeObj = new Employee(name);
  expect(employeeObj.name).toBe(name);
});

test("Can use constructor to create id", () => {
  const testID = 1;
  const employeeObj = new Employee("Daniel", testID);
  expect(employeeObj.id).toBe(testID);
});

test("Can use constructor to create email", () => {
  const testEmail = "test@gmail.com";
  const employeeObj = new Employee("Daniel", 1, testEmail);
  expect(employeeObj.email).toBe(testEmail);
});

test("Can get name using getName() method", () => {
  const test = "Daniel";
  const employeeObj = new Employee(test);
  expect(employeeObj.getName()).toBe(test);
});

test("Can get id using getId() method", () => {
  const test = 1;
  const employeeObj = new Employee("Daniel", test);
  expect(employeeObj.getId()).toBe(test);
});

test("Can get email using getEmail() method", () => {
  const testEmail = "test@gmail.com"
  const employeeObj = new Employee("Daniel", 1, testEmail);
  expect(employeeObj.getEmail()).toBe(testEmail);
});

test('getRole() should return "Employee"', () => {
  const test = "Employee"
  const employeeObj = new Employee("Daniel", 1, "test@gmail.com");
  expect(employeeObj.getRole()).toBe(test);
});