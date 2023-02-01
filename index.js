const db = require("./main/config/connection");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const{ menuQuestions, addDepartmentQuestions, addRoleQuestions, addEmployeeQuestions } = require("./main/utils/query");
const { showDepartments, showEmployees, showRoles, addDepartment, addRole, addEmployee, updateEmployee } = require("./main/utils/query");

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("\n\nWELCOME TO EMPLOYEE TRACKER\n\n")
    askQuestions();
});

const askQuestions = () => {
    inquirer.prompt(menuQuestions)
        .then((answers) => {
            switch (answers.firstMenu) {

                case "View All Employees":
                    viewEmployees()
                    break;

                case "Add Employee":
                    addNewEmployee();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;

                case "View All Roles":
                    viewRoles();
                    break;

                case "Add Role":
                    addNewRole();
                    break;

                case "View All Departments":
                    viewDepartments();
                    break;

                case "Add Department":
                    //console.log('department')
                    addNewDepartment();
                    break;

                case "Quit":
                    console.log("Thank you for using Employee-Tracker")
                    break;
            }
            if (answers.firstMenu === "Quit") {
                return;
            }
        });
};

const viewEmployees = () => {
    showEmployees().then((result) => {
        console.table(result[0])
    }
    ).then(() => askQuestions())
};

const viewDepartments = () => {
    showDepartments().then((result) => {
        console.table(result[0])
    }
    ).then(() => askQuestions())
};

const viewRoles = () => {
    showRoles().then((result) => {
        console.table(result[0])
    }
    ).then(() => askQuestions())
};

const addNewDepartment = () => {
    inquirer.createPromptModule(addDepartmentQuestions).then((answers) => {
        addDepartment(answers).then((result) => {
            console.log("New Department Added To Database")
        }).then(() => askQuestions())
    })
};

const addNewRole = () => {
    showDepartments().then((result) => {
        const departmentChoices = result[0].map((department) => 
        (
            {
                name: department.name,
                value:department.id
            }
        ));
        console.log(deparmentChoices);
        addRoleQuestions.push({
            type: "list",
            message: "What department is this role in?",
            name: "department_id",
            choices: departmentChoices
        })
        inquirer.createPromptModule(addRoleQuestions).then((answers) => {
            addRole(answers).then((result) => {
                console.log("New Role Has Been Added To Database")
            }).then(() => askQuestions())
        })
    })
};

const addNewEmployee = () => {
    showRoles().then((result) => {
        const roleChoices = result[0].map((role) => 
        (
            {
                name: role.title,
                value: role.id
            }
        ));
        showEmployees().then((result) => {
            const managerChoices = result[0].map((employee) => 
            (
                {
                    name: employee.first_name,
                    value: employee.id
                }
            ))
            addEmployeeQuestions.push({
                type: "list",
                message: "What is the employee's role in the company?",
                name: "role_id",
                choices: roleChoices
            },
            {
                type: "list",
                message: "Who is the employee's manager?",
                name: "manager_id",
                choices: managerChoices
            })
            inquirer.createPromptModule(addEmployeeQuestions).then((answers) => {
                addEmployee(answers).then((result) => {
                    console.olog("New Employee Has Been Added To Database")
                }).then(() => askQuestions())
            })
        })
    })
};

const updateEmployeeRole = () => {
    showEmployees().then((result) => {
        const updateEmployeeChoices = result[0].map((employee) =>
        (
            {
                name: employee.first_name,
                value: employee.id
            }
        ));
        showRoles().then((result) => {
            const updateRoleChoices = result[0].map((role) =>
            (
                {
                    name: role.title,
                    value: role.id
                }
            ));
            const updateRoleQuestions = [
                {
                    type: "list",
                    message: "Which employee do you want to update?",
                    name: "updateEmployeeChoice",
                    choices: updateEmployeeChoices
                },
                {
                    type: "list",
                    message: "What role do you want to add to this employee?",
                    name: "updateRoleChoice",
                    choices: updateRoleChoices
                }
            ];
            inquirer.createPromptModule(updateRoleQuestions).then((answers) => {
                updateEmployee(answers).then((result) => {
                    console.log("Employee Role has been changed.");
                    askQuestions();
                })
            })
        })
    })
};