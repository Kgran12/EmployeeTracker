const db = require('../db/connection');

class QU {

  constructor(db) {
    this.db = db
  }

  viewDepartments() {
    return this.db.promise().query('SELECT * FROM departments');
  }

  viewRoles() {
    return this.db.promise().query('SELECT roles.id, roles.title, departments.name AS department, roles.salary FROM roles LEFT JOIN departments ON roles.department_id = departments.id');

  }

  viewEmployees() {
    return this.db.promise().query(
      `SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employees LEFT JOIN roles on employees.role_id = roles.id LEFT JOIN departments on roles.department_id = departments.id LEFT JOIN employees manager on manager.id = employees.manager_id`
    );

  }

  addDepartment(answers) {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
   

    return this.db.promise().query(sql, answers, (err, res) => {
      if (err) throw err;
      console.log('Department added successfully!');
    })
  }


  updateEmp(answers) {
    const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
    const input = [answers.role, answers.employees];

    db.query(sql, input, (err, res) => {
      if (err) throw err;
      console.log('employees updated successfully!');
    })
  }

  addRole(answers) {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
    const input = [answers.title, answers.salary, answers.department];

    return this.db.promise().query(sql, input, (err, res) => {
      if (err) throw err;
      console.log('Role added successfully!');
    })

  }


  allRoles() {
    const [roles] = db.promise().query('SELECT id, title FROM roles');
    return roles;
  }
  allDepartments() {
    const [departments] = db.promise().query('SELECT id, name FROM department');
    return departments;
  }

};

module.exports = new QU(db);
