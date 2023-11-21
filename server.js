const queries = require("./lib/queries.js");
const inquirer = require("inquirer");
require("console.table");

function startApp() {
  inquirer
    .prompt([
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
    ])
    .then(async (answers) => {
      switch (answers.userAction) {
        case "viewDepartments":
            viewAllDepartments()
          break;
        case "viewRoles":
          viewRoles()
          break;
        case "viewEmployees":
          viewEmployees();
          break;
        case "addDepartment":
          addNewDepartment();
          break;
        case "addRole":
        addNewRole();
          break;
        case "addEmployee":
          addNewEmployee();
          break;
          case "updateEmployeeRole":
            updateEmployeeRole();
            break;
        case "Exit":
          console.log("Goodbye!");
          break;
      }
    }).catch(err => {
        console.log(err);
    });
}

startApp();


async function viewAllDepartments() {
    const [data] = await queries.viewDepartments();
    console.table(data);
}

async function viewRoles() {
    const [data] = await queries.viewRoles();
    console.table(data);
}

async function viewEmployees() {
    const [data] = await queries.viewEmployees();
    console.table(data);
}

async function addNewDepartment() {
          const deptAnswers = await inquirer.prompt([
            {
              type: "input",
              name: "deptName",
              message: "What is the name of the department?",
            },
          ]);
          const inputName = deptAnswers.deptName;
          const addDept = await queries.addDepartment(inputName);
          console.log("A new department has been added!");
    
}

async function addNewRole(){
  const [departments] = await queries.viewDepartments();
  const departmentChoices = departments.map(({ id, name }) => ({
    name: name,
    value: id,
  }));
          const roleAnswers = await inquirer.prompt([
            {
              type: "input",
              name: "title",
              message: "What is the title of the role?",
            },
            {
              type: "input",
              name: "salary",
              message: "What is the salary for this role?",
            },
            {
              type: "list",
              name: "department",
              message: "What department is this role in?",
              choices: departmentChoices,
            },
          ]);
          const addNewRole = await queries.addRole(roleAnswers);
          console.log("A new role has been added!");
} 

async function addNewEmployee(){
  const [roles] = await queries.viewRoles();
  const roleChoices = roles.map(({ id, title }) => ({
    name: title,
    value: id,
  }));
  const [employees] = await queries.viewEmployees();
  const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id,
  }));
          const employeeAnswers = await inquirer.prompt([
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
              name: "role",
              message: "What is the employee's role?",
              choices: roleChoices,
            },
            {
              type: "list",
              name: "manager",
              message: "Who is the employee's manager?",
              choices: employeeChoices,
            },
          ]);
          const addNewEmployee = await queries.updateEmp(employeeAnswers);
          console.log("A new employee has been added!");
}

async function updateEmployeeRole(){
  const [roles] = await queries.viewRoles();
  const roleChoices = roles.map(({ id, title }) => ({
    name: title,
    value: id,
  }));
  const [employees] = await queries.viewEmployees();
  const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id,
  }));
          const employeeAnswers = await inquirer.prompt([
            {
              type: "list",
              name: "employees",
              message: "Which employee would you like to update?",
              choices: employeeChoices,
            },
            {
              type: "list",
              name: "role",
              message: "What is the employee's new role?",
              choices: roleChoices,
            },
          ]);
          const updateEmployeeRole = await queries.updateEmp(employeeAnswers);
          console.log("The employee's role has been updated!");
}