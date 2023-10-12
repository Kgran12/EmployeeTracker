const mysql = require('mysql12');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root_12!',
    database: 'employee_tracker'
});

const queries = {
    viewDepartment: async () => {
       db.query('SELECT * FROM department', (err, res) => {
           if (err) throw err;
           console.table(res);
        })
    },

    viewRoles: async () => {
        db.query('SELECT r.title, r.id As role_id, d.name AS department_name, r.salary FROM roles r LEFT JOIN department d ON r.department_id = d.id', (err, res) => {
            if (err) throw err;
            console.table(res);
        })
    },

    viewEmployees: async () => {
        db.query(`
        SELECT e.id AS employee_id, e.first_name, e.last_name, r.title AS job_title, d.name AS department_name, r.salary, e2.first_name AS manager
        FROM employees e 
        JOIN roles r ON e.role_id = r.id
        JOIN departments d ON r.department_id = d.id
        JOIN employees e2 ON e.manager_id = e2.id
        `, function (err, results) {
            console.log('\n');
            console.table(results);
        })
    },
    addDepartment: async (answers) => {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        const input = answers.deptName;

        db.query(sql, input, (err, res) => {
            if (err) throw err;
            console.log('Department added successfully!');
        })

    },

    updateEmp: async (answers) => {
        const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
        const input = [answers.role, answers.employee];

        db.query(sql, input, (err, res) => {
            if (err) throw err;
            console.log('Employee updated successfully!');
        })
    },

    allEmployees: async () => {
        const [employees] = await db.promise().query('SELECT id, frist_name, last_name FROM employees');
        return employees;        

    },

    allRoles: async () => {
        const [roles] = await db.promise().query('SELECT id, title FROM roles');
        return roles;
    },
    allDepartments: async () => {
        const [departments] = await db.promise().query('SELECT id, name FROM department');
        return departments;
    },

}

module.exports = queries;
