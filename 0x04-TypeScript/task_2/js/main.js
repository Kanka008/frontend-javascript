"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = exports.Director = void 0;
exports.createEmployee = createEmployee;
exports.isDirector = isDirector;
exports.executeWork = executeWork;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from Home.";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break.";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to Director Tasks.";
    };
    return Director;
}());
exports.Director = Director;
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from Home.";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a coffee break.";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work.";
    };
    return Teacher;
}());
exports.Teacher = Teacher;
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
function executeWork(employee) {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
