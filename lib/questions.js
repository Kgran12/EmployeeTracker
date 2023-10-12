const queries = require("./queries.js");

const questions = {
  userAction: () => {
    return [
      {
        type: "list",
        name: "userAction",
        message: "What would you like to do?",
        choices: [
          { name: "View all departments", value: "viewDepartments" },
          { name: "View all roles", value: "viewRoles" },
          { name: "View all employees", value: "viewEmployees" },
          { name: "Add a department", value: "addDepartment" },
          { name: "Add a role", value: "addRole" },
          { name: "Add an employee", value: "addEmployee" },
          { name: "Update an employee role", value: "updateEmployeeRole" },
        ],
      },
    ];
  },

  addDept: () => {
    return [
      {
        type: "input",
        name: "deptName",
        message: "What is the name of the department?",
      },
    ];
  },

  addRole: async () => {
    const departments = await queries.getDepartments();
    return [
      {
        type: "input",
        name: "roleTitle",
        message: "What is the title of the role?",
      },
      {
        type: "input",
        name: "roleSalary",
        message: "What is the salary for this role?",
      },
      {
        type: "list",
        name: "roleDepartment",
        message: "What department is this role in?",
        choices: departments,
      },
    ];
  },

  addEmployee : async () => {
    const roles = await queries.getRoles();
    const employees = await queries.getEmployees();
    return [
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
      },
      {
        type: "list",
        name: "employeeRole",
        message: "What is the employee's role?",
        choices: roles,
      },
      {
        type: "list",
        name: "employeeManager",
        message: "Who is the employee's manager?",
        choices: employees,
      },
    ];
  },
};

module.exports = questions;
