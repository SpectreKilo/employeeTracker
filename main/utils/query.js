const connect = require("../config/connection")
const consoleTable = require("console.table");
const questionsArray = require("../lib/questions")
const askQuestions = require("../../index");
const menuQuestions = require("../lib/questions");

const showDepartments = () => {
    const sqlQuery = "SELECT * FROM department;"
    return connect.promise().query(sqlQuery);
};

const showRoles = () => {
    const sqlQuery = "SELECT role.id, role.title, role.salary, department.name AS department FROM role JOIN department ON role.department_id = department.id;"
    return connect.promise().query(sqlQuery);
};

const showEmployees = () => {
    const sqlQuery = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, manager.first_name AS manager FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;"
    return connect.promise().query(sqlQuery)
};

const addEmployee = (newEmployee) => {
    const sqlQuery = "INSERT INTO employee SET ?"
    return connect.promise().query(sqlQuery, newEmployee)
};

const addDepartment = (newDepartment) => {
    const sqlQuery = "INSERT INTO department SET ?"
    return connect.promise().query(sqlQuery, newDepartment)
};

const addRole = (newRole) => {
    const sqlQuery = "INSERT INTO role SET ?"
    return connect.promise().query(sqlQuery, newRole)
};

const updateEmployee = (answers) => {
    console.log(answers)
    const sqlQuery = `UPDATE employee SET role_id = ${answers.updateRoleChoice} WHERE employee.id = ${answers.updateEmployeeChoice};`
    console.log(sqlQuery)
    return connect.promise().query(sqlQuery)
};

module.exports = { showDepartments, showEmployees, showRoles, addDepartment, addRole, addEmployee, updateEmployee };