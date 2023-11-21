INSERT INTO departments ( NAME) VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles ( title, salary, department_id) VALUES
('Sales Lead', 100000.00, 1),
('Salesperson', 80000.00, 1),
('Lead Engineer', 150000.00, 2),
('Software Engineer', 120000.00, 2),
('Accountant', 125000.00, 3),
('Legal Team Lead', 250000.00, 4),
('Lawyer', 190000.00, 4);

INSERT INTO employees ( first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Doe', 2, 1),
('Jerry', 'Garcia', 3, 2),
('Kevin', 'Smith', 4, 3),
('Jim', 'James', 5, 4),
('Peter', 'Smith', 6, 4),
('Jon', 'Allen', 7, 1),
('Joe', 'Smith', 7, 2),
('Bob', 'Evans', 7, 3);