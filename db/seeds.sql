INSERT INTO department (ID, NAME) VALUES
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'Legal');

INSERT INTO roles (id, title, salary, department_id) VALUES
(1, 'Sales Lead', 100000.00, 1),
(2, 'Salesperson', 80000.00, 1),
(3, 'Lead Engineer', 150000.00, 2),
(4, 'Software Engineer', 120000.00, 2),
(5, 'Accountant', 125000.00, 3),
(6, 'Legal Team Lead', 250000.00, 4),
(7, 'Lawyer', 190000.00, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'John', 'Doe', 1, 2),
(2, 'Jane', 'Doe', 2, 1),
(3, 'Jerry', 'Garcia', 3, 4),
(4, 'Kevin', 'Smith', 4, 3),
(5, 'Jim', 'James', 5, 4),
(6, 'Peter', 'Smith', 6, 4),
(7, 'Jon', 'Allen', 7, 1),
(8, 'Joe', 'Smith', 7, 2),
(9, 'Bob', 'Evans', 7, 3);