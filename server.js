const express = require('express');
const questions = require('./questions.js');
const queries = require('./queries.js');

const app = express();
const PORT = process.env.PORT || 3001;

async function startApp() {
    const answers = await questions.userAction();
    console.log(answers);
    switch (answers.userAction) {
        case 'View all departments':
            queries.viewAllDepartments();
            break;
        case 'View all roles':
            queries.viewAllRoles();
            break;
        case 'View all employees':
            queries.viewAllEmployees();
            break;
        case 'Add a department':
            queries.addDepartment();
            break;
        case 'Add a role':
            queries.addRole();
            break;
        case 'Add an employee':
            queries.addEmployee();
            break;
        case 'Update an employee role':
            queries.updateEmployeeRole();
            break;
        case 'Exit':
            console.log('Goodbye!');
            break;
    }
}

