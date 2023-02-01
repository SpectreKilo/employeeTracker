INSERT INTO department (name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES  ("Sales Lead", 50000, 1),
        ("Salesperson", 40000, 1),
        ("Lead Engineer", 140000, 2),
        ("Software Engineer", 90000, 2),
        ("Account Manager", 70000, 3),
        ("Accountant", 50000, 3),
        ("Legal Team Lead", 150000, 4),
        ("Lawyer", 100000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Tony", "Stark", 1, NULL),
        ("Steve", "Rogers", 2, 1),
        ("Natasha", "Romanoff", 3, NULL),
        ("Bruce", "Banner", 4, 2),
        ("Thor", "Odinson", 5, NULL),
        ("Clint", "Barton", 6, 3),
        ("Peter", "Parker", 7, NULL),
        ("Wanda", "Maximoff", 8, 4);

